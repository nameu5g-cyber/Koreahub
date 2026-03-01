"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { Search, Info, ShieldAlert, AlertTriangle, AlertCircle, CheckCircle2, BookOpen, Volume2, Activity, Landmark, Briefcase } from 'lucide-react';
import { allTerms, DomainType, LexiconTerm } from '../../lib/data/lexicon/index';

interface LexiconRegistryProps {
    t: (key: string) => string;
    uiLang: string;
}

export function LexiconRegistry({ t, uiLang }: LexiconRegistryProps) {
    const [search, setSearch] = useState('');
    const [activeDomain, setActiveDomain] = useState<DomainType>('telecom');
    const [activeCat, setActiveCat] = useState('all');
    const [expandedCats, setExpandedCats] = useState<Record<string, boolean>>({});
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const [isExpertMode, setIsExpertMode] = useState(false);
    const [secretCode, setSecretCode] = useState('');
    const [codeError, setCodeError] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState<string | null>(null);
    const [voicesLoaded, setVoicesLoaded] = useState(false);

    // Map UI language code to the keys used in lexicon files
    const langKey = uiLang === 'kz' ? 'kk' : uiLang;

    const toggleExpand = (id: string) => {
        setExpandedId(prev => prev === id ? null : id);
    };

    // Pre-load voices for better reliability
    useEffect(() => {
        if (typeof window !== 'undefined' && window.speechSynthesis) {
            const loadVoices = () => {
                const availableVoices = window.speechSynthesis.getVoices();
                if (availableVoices.length > 0) {
                    setVoicesLoaded(true);
                }
            };

            loadVoices();
            window.speechSynthesis.onvoiceschanged = loadVoices;

            const timer = setInterval(() => {
                const v = window.speechSynthesis.getVoices();
                if (v.length > 0) {
                    setVoicesLoaded(true);
                    clearInterval(timer);
                }
            }, 1000);

            return () => {
                clearInterval(timer);
                if (window.speechSynthesis) window.speechSynthesis.onvoiceschanged = null;
            };
        }
    }, []);

    const handleUnlock = () => {
        if (secretCode === 'b8h@er0K') {
            setIsExpertMode(true);
            setCodeError(false);
            setSecretCode('');
        } else {
            setCodeError(true);
        }
    };

    const speak = (e: React.MouseEvent, text: string) => {
        e.stopPropagation();
        if (typeof window === 'undefined' || !window.speechSynthesis) return;

        window.speechSynthesis.cancel();
        const hangulOnly = text.split('(')[0].trim();
        const utterance = new SpeechSynthesisUtterance(hangulOnly);
        const voices = window.speechSynthesis.getVoices();

        if (voices.length === 0) {
            setTimeout(() => {
                const retryVoices = window.speechSynthesis.getVoices();
                if (retryVoices.length > 0) playUtterance(retryVoices, utterance, text);
            }, 250);
            return;
        }
        playUtterance(voices, utterance, text);
    };

    const playUtterance = (voices: SpeechSynthesisVoice[], utterance: SpeechSynthesisUtterance, term: string) => {
        let voice = voices.find(v => v.lang.startsWith('ko')) || voices.find(v => v.lang.includes('KR'));
        if (voice) utterance.voice = voice;
        utterance.lang = 'ko-KR';
        utterance.rate = 0.85;
        utterance.onstart = () => setIsSpeaking(term);
        utterance.onend = () => setIsSpeaking(null);
        utterance.onerror = () => setIsSpeaking(null);
        setTimeout(() => window.speechSynthesis.speak(utterance), 50);
    };

    // L3-Switch Domains
    const domains: { id: DomainType; icon: any; label: string }[] = [
        { id: 'all', icon: Info, label: t('domain_all') },
        { id: 'legal', icon: Landmark, label: t('domain_legal') },
        { id: 'medical', icon: Activity, label: t('domain_medical') },
        { id: 'telecom', icon: Briefcase, label: t('domain_telecom') },
    ];

    const activeIndex = domains.findIndex(d => d.id === activeDomain);

    // Filter by Domain First
    const domainFiltered = useMemo(() => {
        return activeDomain === 'all'
            ? allTerms
            : allTerms.filter(t => t.domain === activeDomain);
    }, [activeDomain]);

    // Extract dynamic categories for the selected domain
    const categories = useMemo(() => {
        const visibleTerms = isExpertMode
            ? domainFiltered
            : domainFiltered.filter(item => ['safe', 'neutral', 'info'].includes(item.riskLevel));

        const cats = new Set(visibleTerms.map(item => item.category.en));
        return Array.from(cats);
    }, [domainFiltered, isExpertMode]);

    // Reset category when domain changes
    useEffect(() => {
        setActiveCat('all');
        setExpandedId(null);
    }, [activeDomain]);

    // Final filtering (Search + Category)
    const filteredTerms = useMemo(() => {
        return domainFiltered.filter(item => {
            if (!isExpertMode && !['safe', 'neutral', 'info'].includes(item.riskLevel)) return false;

            const matchesCategory = activeCat === 'all' || item.category.en === activeCat;
            const searchLower = search.toLowerCase();
            const matchesSearch =
                item.termKo.toLowerCase().includes(searchLower) ||
                Object.values(item.termTrans).some(val => val.toLowerCase().includes(searchLower)) ||
                Object.values(item.meaning).some(val => val.toLowerCase().includes(searchLower));

            return matchesCategory && matchesSearch;
        });
    }, [domainFiltered, search, activeCat, isExpertMode]);

    const groupedTerms = useMemo(() => {
        const groups: Record<string, LexiconTerm[]> = {};
        filteredTerms.forEach(item => {
            const key = item.category.en;
            if (!groups[key]) groups[key] = [];
            groups[key].push(item);
        });
        return groups;
    }, [filteredTerms]);

    const getRiskIcon = (level: string) => {
        switch (level) {
            case 'safe': return <CheckCircle2 size={14} className="text-green-500" />;
            case 'neutral': return <Info size={14} className="text-gray-400" />;
            case 'info': return <BookOpen size={14} className="text-blue-500" />;
            case 'warning': return <AlertTriangle size={14} className="text-orange-500" />;
            case 'danger': return <ShieldAlert size={14} className="text-red-500" />;
            default: return <AlertCircle size={14} className="text-gray-400" />;
        }
    };

    const getRiskBadgeStyles = (level: string) => {
        switch (level) {
            case 'safe': return 'bg-green-50 text-green-700 border-green-200';
            case 'neutral': return 'bg-gray-50 text-gray-600 border-gray-200';
            case 'info': return 'bg-blue-50 text-blue-700 border-blue-200';
            case 'warning': return 'bg-orange-50 text-orange-700 border-orange-200';
            case 'danger': return 'bg-red-50 text-red-700 border-red-200';
            default: return 'bg-gray-50 text-gray-500 border-gray-200';
        }
    };

    return (
        <div className="flex flex-col h-full bg-gray-50/50">
            {/* Domain Switcher (L3-Switch Header) */}
            <div className="bg-white border-b border-gray-100 relative z-20 shadow-sm">
                <div className="px-4 pt-2.5 flex relative gap-0 overflow-x-auto no-scrollbar">
                    {domains.map(dom => (
                        <button
                            key={dom.id}
                            onClick={() => setActiveDomain(dom.id)}
                            className={`flex flex-col items-center gap-1 pb-2 transition-all flex-1 min-w-[70px] ${activeDomain === dom.id ? 'text-blue-600' : 'text-gray-300 hover:text-gray-500'}`}
                        >
                            <dom.icon size={20} strokeWidth={activeDomain === dom.id ? 2.5 : 2} className={activeDomain === dom.id ? 'animate-in fade-in zoom-in duration-300' : ''} />
                            <span className="text-[9px] font-black uppercase tracking-tighter">{dom.label}</span>
                        </button>
                    ))}

                    {/* Sliding Indicator (Pixel Perfect) */}
                    <div className="absolute bottom-0 left-4 right-4 h-[3px]">
                        <div
                            className="h-full bg-blue-600 transition-all duration-300 ease-out rounded-t-full"
                            style={{
                                marginLeft: `${(activeIndex * 100) / domains.length}%`,
                                width: `${100 / domains.length}%`
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Header / Search & Category Filter */}
            <div className="p-3 bg-white border-b border-gray-100 sticky top-0 z-10 space-y-2.5 shadow-sm">
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder={t('lexicon_search') || "Искать (한글/Рус)"}
                        className="w-full bg-gray-50 border border-gray-100 rounded-full pl-10 pr-5 py-2.5 text-xs outline-none focus:border-blue-500 transition-all font-medium"
                    />
                </div>

                {/* Dynamic Category Tabs */}
                {categories.length > 0 && (
                    <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                        <button
                            onClick={() => setActiveCat('all')}
                            className={`whitespace-nowrap px-4 py-2 rounded-full text-[11px] font-black uppercase transition-all ${activeCat === 'all' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white border border-gray-100 text-gray-400'}`}
                        >
                            {t('all')}
                        </button>
                        {categories.map(catEn => {
                            const locItem = domainFiltered.find(i => i.category.en === catEn);
                            const catLoc = locItem ? (locItem.category as any)[langKey] || locItem.category.en : catEn;

                            return (
                                <button
                                    key={catEn}
                                    onClick={() => setActiveCat(catEn)}
                                    className={`whitespace-nowrap px-4 py-2 rounded-full text-[11px] font-black uppercase transition-all ${activeCat === catEn ? 'bg-blue-600 text-white shadow-lg' : 'bg-white border border-gray-100 text-gray-400'}`}
                                >
                                    {catLoc}
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* List */}
            <div className="flex-grow p-3 space-y-5 overflow-y-auto no-scrollbar pb-10">
                {Object.keys(groupedTerms).length === 0 ? (
                    <div className="text-center text-gray-400 py-10 font-bold">{t('search_no_results')}</div>
                ) : (
                    Object.entries(groupedTerms).map(([catEn, items]) => {
                        const locItem = items[0];
                        const catLoc = locItem ? (locItem.category as any)[langKey] || locItem.category.en : catEn;
                        const isCatExpanded = expandedCats[catEn] !== false;

                        return (
                            <div key={catEn} className="space-y-3">
                                <div
                                    onClick={() => setExpandedCats(prev => ({ ...prev, [catEn]: !isCatExpanded }))}
                                    className="flex items-center justify-between cursor-pointer group/cat px-1"
                                >
                                    <div className="flex items-center gap-2.5">
                                        <div className={`transition-transform duration-300 ${isCatExpanded ? 'rotate-0' : '-rotate-90'}`}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="m6 9 6 6 6-6" /></svg>
                                        </div>
                                        <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight">
                                            {catLoc}
                                        </h3>
                                    </div>
                                    <div className="p-2 rounded-full bg-gray-100/50 text-gray-400 opacity-0 group-hover/cat:opacity-100 transition-all">
                                        <Search size={16} />
                                    </div>
                                </div>

                                <div className={`grid gap-2 transition-all duration-500 overflow-hidden ${isCatExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    {items.map((item) => {
                                        const isExpanded = expandedId === item.id;
                                        const termTrans = (item.termTrans as any)[langKey] || item.termTrans.en;
                                        const meaning = (item.meaning as any)[langKey] || item.meaning.en;
                                        const riskLabel = (item.riskLabel as any)[langKey] || item.riskLabel.en;

                                        return (
                                            <div key={item.id} className={`bg-white rounded-[20px] border ${isExpanded ? 'border-blue-200 shadow-md' : 'border-gray-100 shadow-sm'} overflow-hidden transition-all duration-300`}>
                                                <div
                                                    onClick={() => toggleExpand(item.id)}
                                                    className="px-4 py-3.5 flex flex-col gap-1.5 cursor-pointer hover:bg-gray-50/50 active:bg-gray-100 transition-colors relative"
                                                >
                                                    <div className="flex justify-between items-start">
                                                        <div className="flex flex-col pr-8 group/term">
                                                            <div className="flex items-center gap-2">
                                                                <h4 className="font-black text-gray-900 text-base leading-tight tracking-tight">
                                                                    {item.termKo}
                                                                </h4>
                                                                <button
                                                                    onClick={(e) => speak(e, item.termKo)}
                                                                    className={`p-1 rounded-full transition-all ${isSpeaking === item.termKo ? 'bg-blue-100 text-blue-600 animate-pulse' : 'bg-gray-50 text-gray-400 hover:bg-blue-50 hover:text-blue-500'}`}
                                                                >
                                                                    <Volume2 size={14} />
                                                                </button>
                                                            </div>
                                                            <span className="text-[13px] font-bold text-gray-500 mt-0.5">
                                                                {termTrans}
                                                            </span>
                                                        </div>
                                                        <div className={`absolute right-4 top-3.5 p-1.5 rounded-full bg-gray-50 text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-blue-50 text-blue-500' : ''}`}>
                                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                                        </div>
                                                    </div>

                                                    <div className={`self-start flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[9px] font-black uppercase tracking-wider ${getRiskBadgeStyles(item.riskLevel)} mt-1`}>
                                                        {getRiskIcon(item.riskLevel)}
                                                        {riskLabel}
                                                    </div>
                                                </div>

                                                <div className={`transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                                    <div className="px-5 pb-5 pt-2 border-t border-gray-50 bg-gray-50/30">
                                                        <p className="text-sm text-gray-700 leading-relaxed font-medium">
                                                            {meaning}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })
                )}

                {/* Expert Mode Unlock UI */}
                {!isExpertMode ? (
                    <div className="mt-8 bg-gray-900 rounded-[24px] p-6 text-white shadow-xl relative overflow-hidden">
                        <div className="absolute -right-4 -top-4 opacity-10">
                            <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><circle cx="12" cy="11" r="3" /></svg>
                        </div>
                        <div className="relative z-10 flex flex-col items-center text-center gap-3">
                            <h3 className="font-black text-xl tracking-tight">{t('expert_mode_title')}</h3>
                            <p className="text-gray-400 text-xs max-w-[250px] leading-relaxed font-medium">
                                {t('expert_mode_desc')}
                            </p>

                            <div className="w-full max-w-[280px] mt-4 flex flex-col gap-2">
                                <div className="flex gap-2">
                                    <input
                                        type="password"
                                        value={secretCode}
                                        onChange={(e) => { setSecretCode(e.target.value); setCodeError(false); }}
                                        placeholder={t('expert_mode_placeholder')}
                                        className={`flex-1 bg-gray-800 border ${codeError ? 'border-red-500' : 'border-gray-700'} rounded-xl px-4 py-3 text-sm outline-none text-white focus:border-blue-500 transition-colors placeholder-gray-500`}
                                        onKeyDown={(e) => e.key === 'Enter' && handleUnlock()}
                                    />
                                    <button
                                        onClick={handleUnlock}
                                        className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-xl font-bold text-sm transition-colors active:scale-95 flex items-center justify-center shrink-0"
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="mt-8 bg-blue-50/50 border border-blue-100 rounded-2xl p-4 flex items-center justify-center gap-2 text-blue-600">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 9.9-1" /></svg>
                        <span className="text-xs font-black uppercase tracking-wider">{t('expert_unlocked')}</span>
                    </div>
                )}
            </div>
        </div>
    );
}
