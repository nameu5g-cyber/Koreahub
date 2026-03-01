"use client";

import React, { useState, useMemo } from 'react';
import { Search, Phone, ExternalLink, MapPin, Calendar, Star, Info, MessageSquare, ShieldCheck, Globe, Briefcase, Landmark, Activity, ChevronDown, Check, Languages } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { VERTICALS, MOCK_ENTITIES } from '../../lib/data/registry';
import { VerticalConfig, RegistryEntity, FieldConfig } from '../../lib/data/registry/types';

interface ResourcesRegistryProps {
    t: (key: string) => string;
    uiLang: string;
}

const getLabel = (field: FieldConfig, lang: string) => {
    if (!field.label) return field.code;
    if (typeof field.label === 'string') return field.label;
    const labels = field.label as Record<string, string>;
    return labels[lang] || labels.en || labels.ru || field.code;
};

export function ResourcesRegistry({ t, uiLang }: ResourcesRegistryProps) {
    const searchParams = useSearchParams();
    const initialVertical = searchParams.get('v') || 'visa';
    const [search, setSearch] = useState('');
    const [activeVertical, setActiveVertical] = useState<string>(initialVertical);
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const vertical = VERTICALS[activeVertical] || VERTICALS.general;
    const langKey = (uiLang === 'kz' ? 'kk' : uiLang) as string;

    const REGIONS: Record<string, any> = {
        seoul: { ru: 'Сеул', en: 'Seoul', ko: '서울', kk: 'Сеул', uz: 'Seul' },
        busan: { ru: 'Пусан', en: 'Busan', ko: '부산', kk: 'Пусан', uz: 'Busan' },
        daegu: { ru: 'Тэгу', en: 'Daegu', ko: '대гу', kk: 'Тэгу', uz: 'Daegu' },
        incheon: { ru: 'Инчхон', en: 'Incheon', ko: '인천', kk: 'Инчхон', uz: 'Incheon' },
        gwangju: { ru: 'Кванджу', en: 'Gwangju', ko: '광주', kk: 'Кванджу', uz: 'Gwangju' },
        daejeon: { ru: 'Тэджун', en: 'Daejeon', ko: '대전', kk: 'Тэджун', uz: 'Daejeon' },
        gyeonggi: { ru: 'Кёнгидо', en: 'Gyeonggi', ko: '경기', kk: 'Кёнгидо', uz: 'Kyonggido' },
        gangwon: { ru: 'Канвондо', en: 'Gangwon', ko: '강원', kk: 'Канвондо', uz: 'Kangvondo' },
        chungcheong: { ru: 'Чхунчхон', en: 'Chungcheong', ko: '충청', kk: 'Чхунчхон', uz: 'Chungcheong' },
        gyeongsang: { ru: 'Кёнсан', en: 'Gyeongsang', ko: '경상', kk: 'Кёнсан', uz: 'Gyeongsang' },
        jeolla: { ru: 'Чолла', en: 'Jeolla', ko: '전라', kk: 'Чолла', uz: 'Jeolla' },
        jeju: { ru: 'Чеджу', en: 'Jeju', ko: '제주', kk: 'Чеджу', uz: 'Jeju' }
    };

    const toggleExpand = (id: string) => {
        setExpandedId(prev => prev === id ? null : id);
    };

    const handleQuickSelect = (id: string) => {
        setExpandedId(id);
        setSearch(''); // Clear search on select to show more results
        setShowSuggestions(false);
        const element = document.getElementById(`entity-${id}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const copyToClipboard = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const filteredEntities = useMemo(() => {
        return MOCK_ENTITIES.filter(entity => {
            const matchesVertical = entity.verticalCode === activeVertical;
            // Map sub-regions to main regions for filtering
            const regionMap: Record<string, string> = {
                'chungnam': 'chungcheong', 'chungbuk': 'chungcheong',
                'gyeongnam': 'gyeongsang', 'gyeongbuk': 'gyeongsang',
                'jeonnam': 'jeolla', 'jeonbuk': 'jeolla'
            };
            const mappedRegion = regionMap[entity.data.region as string] || entity.data.region;
            const matchesRegion = !selectedRegion || mappedRegion === selectedRegion;

            if (!matchesVertical || !matchesRegion) return false;
            if (!search) return true;

            const name = typeof entity.data.name === 'string' ? entity.data.name : (entity.data.name[langKey] || entity.data.name.en);
            const nameKo = entity.data.nameKo || '';
            const fieldsMatch = Object.values(entity.data).some(val =>
                typeof val === 'string' && val.toLowerCase().includes(search.toLowerCase())
            );

            return name.toLowerCase().includes(search.toLowerCase()) ||
                nameKo.toLowerCase().includes(search.toLowerCase()) ||
                fieldsMatch;
        });
    }, [activeVertical, search, langKey, selectedRegion]);

    const renderField = (field: FieldConfig, value: any) => {
        if (!value) return null;

        // Dynamic Support Badge logic:
        // Shows "(Language) Support" if the entity supports the current UI language.
        // We only show this for international-oriented languages (excluding Korean itself as a 'support' badge).
        if (field.code === 'languages' && field.display === 'flags' && Array.isArray(value)) {
            const currentLangMap: Record<string, string> = {
                'ru': 'russian',
                'en': 'english',
                'kk': 'kazakh',
                'uz': 'uzbek'
            };
            const targetLang = currentLangMap[uiLang] || currentLangMap['ru'];

            if (value.includes(targetLang) && uiLang !== 'ko') {
                const supportLabelMap: Record<string, string> = {
                    'ru': 'Русская поддержка',
                    'en': 'English Support',
                    'kk': 'Орыс тілді қолдау',
                    'uz': 'Rus tilida qo\'llab-quvvatlash'
                };
                return (
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-1.5 text-[10px] font-black uppercase text-blue-600">
                            <ShieldCheck size={14} /> {supportLabelMap[uiLang] || supportLabelMap['en']}
                        </div>
                        <div className="flex gap-1.5 items-center">
                            <Languages size={14} className="text-gray-400 mr-0.5" />
                            {value.map((v: string) => {
                                let label = v.toUpperCase();
                                let colorClass = "bg-gray-100 text-gray-500";

                                if (v === 'ru' || v === 'russian') { label = 'RU'; colorClass = "bg-blue-50 text-blue-600"; }
                                if (v === 'en' || v === 'english') { label = 'EN'; colorClass = "bg-indigo-50 text-indigo-600"; }
                                if (v === 'ko' || v === 'korean') { label = 'KR'; colorClass = "bg-rose-50 text-rose-600"; }
                                if (v === 'zh' || v === 'chinese') { label = 'ZH'; colorClass = "bg-amber-50 text-amber-600"; }
                                if (v === 'uz' || v === 'uzbek') { label = 'UZ'; colorClass = "bg-green-50 text-green-600"; }
                                if (v === 'kk' || v === 'kazakh' || v === 'kz') { label = 'KZ'; colorClass = "bg-cyan-50 text-cyan-600"; }
                                if (v === 'japanese') { label = 'JP'; colorClass = "bg-slate-50 text-slate-600"; }
                                if (v === 'mongolian') { label = 'MN'; colorClass = "bg-orange-50 text-orange-600"; }
                                if (v === 'arabic') { label = 'AR'; colorClass = "bg-emerald-50 text-emerald-600"; }
                                if (v === 'vietnamese') { label = 'VN'; colorClass = "bg-yellow-50 text-yellow-600"; }

                                return (
                                    <span key={v} className={`px-1.5 py-0.5 rounded text-[8px] font-black tracking-tighter ${colorClass}`} title={v}>
                                        {label}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                );
            }
        }

        switch (field.type) {
            case 'translated_string':
            case 'translated_text':
                return value[langKey] || value.en || value.ru || '';
            case 'multiselect':
                if (field.display === 'flags') {
                    return (
                        <div className="flex gap-1.5 items-center">
                            <Languages size={14} className="text-gray-400 mr-0.5" />
                            {value.map((v: string) => {
                                let label = v.toUpperCase();
                                let colorClass = "bg-gray-100 text-gray-500";

                                if (v === 'ru' || v === 'russian') { label = 'RU'; colorClass = "bg-blue-50 text-blue-600"; }
                                if (v === 'en' || v === 'english') { label = 'EN'; colorClass = "bg-indigo-50 text-indigo-600"; }
                                if (v === 'ko' || v === 'korean') { label = 'KR'; colorClass = "bg-rose-50 text-rose-600"; }
                                if (v === 'zh' || v === 'chinese') { label = 'ZH'; colorClass = "bg-amber-50 text-amber-600"; }
                                if (v === 'uz' || v === 'uzbek') { label = 'UZ'; colorClass = "bg-green-50 text-green-600"; }
                                if (v === 'kk' || v === 'kazakh' || v === 'kz') { label = 'KZ'; colorClass = "bg-cyan-50 text-cyan-600"; }
                                if (v === 'japanese') { label = 'JP'; colorClass = "bg-slate-50 text-slate-600"; }
                                if (v === 'mongolian') { label = 'MN'; colorClass = "bg-orange-50 text-orange-600"; }
                                if (v === 'arabic') { label = 'AR'; colorClass = "bg-emerald-50 text-emerald-600"; }
                                if (v === 'vietnamese') { label = 'VN'; colorClass = "bg-yellow-50 text-yellow-600"; }

                                return (
                                    <span key={v} className={`px-1.5 py-0.5 rounded text-[8px] font-black tracking-tighter ${colorClass}`} title={v}>
                                        {label}
                                    </span>
                                );
                            })}
                        </div>
                    );
                }
                if (field.display === 'chips') {
                    return (
                        <div className="flex flex-wrap gap-1.5 mt-1">
                            {value.map((v: string) => (
                                <span key={v} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-md text-[9px] font-black uppercase tracking-tight">
                                    {t(`${vertical.code}_${v}`) || v}
                                </span>
                            ))}
                        </div>
                    );
                }
                return value.join(', ');
            case 'boolean':
                return value ? (
                    <div className="flex items-center gap-1.5 text-[10px] font-black uppercase text-blue-600">
                        <ShieldCheck size={14} /> {getLabel(field, langKey)}
                    </div>
                ) : null;
            case 'string':
            default:
                if (field.code === 'phone') {
                    return (
                        <div className="flex items-center gap-1.5 text-gray-600 bg-gray-100/80 px-2 py-1 rounded-md text-[10px] font-bold">
                            <Phone size={12} className="text-gray-400" />
                            {String(value)}
                        </div>
                    );
                }
                if (field.code === 'messenger') {
                    return (
                        <div className="flex items-center gap-1.5 text-blue-600 bg-blue-50 px-2 py-1 rounded-md text-[10px] font-bold">
                            <MessageSquare size={12} className="text-blue-400" />
                            {String(value)}
                        </div>
                    );
                }
                return String(value);
        }
    };

    // V4-Logic: Vertical Mapping (Fixed Order for UI)
    const verticalTabs = [
        { code: 'general', icon: Info },
        { code: 'visa', icon: Landmark },
        { code: 'telecom', icon: Phone },
        { code: 'medical', icon: Activity },
        { code: 'jobs', icon: Briefcase },
    ];

    const activeIndex = verticalTabs.findIndex(v => v.code === activeVertical);

    return (
        <div className="flex flex-col h-full bg-gray-50/50">
            {/* Header: Vertical Tabs (Sliding Indicator) */}
            <div className="bg-white border-b border-gray-100 relative z-20 shadow-sm">
                <div className="px-4 pt-2.5 flex relative gap-0 overflow-x-auto no-scrollbar">
                    {verticalTabs.map(tab => {
                        const v = VERTICALS[tab.code];
                        if (!v) return null;
                        const label = v.name[langKey] || v.name.en;

                        return (
                            <button
                                key={tab.code}
                                onClick={() => setActiveVertical(tab.code)}
                                className={`flex flex-col items-center gap-1 pb-2 transition-all flex-1 min-w-[70px] ${activeVertical === tab.code ? 'text-blue-600' : 'text-gray-300 hover:text-gray-500'}`}
                            >
                                <tab.icon size={20} strokeWidth={activeVertical === tab.code ? 2.5 : 2} className={activeVertical === tab.code ? 'animate-in fade-in zoom-in duration-300' : ''} />
                                <span className="text-[9px] font-black uppercase tracking-tighter text-center leading-none px-1">
                                    {label}
                                </span>
                            </button>
                        );
                    })}

                    {/* Sliding Indicator (Pixel Perfect) */}
                    <div className="absolute bottom-0 left-4 right-4 h-[3px]">
                        <div
                            className="h-full bg-blue-600 transition-all duration-300 ease-out rounded-t-full"
                            style={{
                                marginLeft: `${(activeIndex * 100) / verticalTabs.length}%`,
                                width: `${100 / verticalTabs.length}%`
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Subheader: Category Title & Search (Lexicon Style) */}
            <div className="p-3 bg-white border-b border-gray-100 sticky top-0 z-10 space-y-3 shadow-sm">
                <div className="flex justify-between items-center px-1">
                    <h2 className="text-lg font-black text-gray-900 flex items-center gap-2 uppercase tracking-tight">
                        <ChevronDown size={20} className="text-blue-600 shrink-0" />
                        {vertical.name[langKey] || vertical.name.en}
                    </h2>
                    <div className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-blue-600 transition-colors shadow-inner">
                        <Search size={16} />
                    </div>
                </div>

                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setShowSuggestions(true);
                        }}
                        onFocus={() => setShowSuggestions(true)}
                        placeholder={t('search_place_placeholder') || t('search') || `Поиск...`}
                        className="w-full bg-gray-50 border border-gray-100 rounded-full pl-10 pr-5 py-2.5 text-xs outline-none focus:border-blue-500 transition-all font-medium shadow-sm"
                    />

                    {/* Dynamic Autocomplete Suggestions */}
                    {showSuggestions && search && filteredEntities.length > 0 && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-gray-100 shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                            <div className="max-h-[350px] overflow-y-auto no-scrollbar">
                                {filteredEntities.slice(0, 20).map((entity) => {
                                    const name = typeof entity.data.name === 'string' ? entity.data.name : (entity.data.name[langKey] || entity.data.name.en);
                                    return (
                                        <button
                                            key={entity.id}
                                            onClick={() => handleQuickSelect(entity.id)}
                                            className="w-full px-4 py-3 flex items-center gap-3 hover:bg-blue-50 transition-colors border-b border-gray-50 last:border-0 text-left"
                                        >
                                            <div className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-[8px] font-black uppercase" style={{ backgroundColor: VERTICALS[entity.verticalCode]?.color || '#cbd5e0' }}>
                                                {entity.verticalCode.charAt(0)}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[11px] font-bold text-gray-800 leading-tight">{name}</span>
                                                <span className="text-[9px] text-gray-400 font-medium uppercase tracking-tighter">{entity.verticalCode}</span>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex items-center gap-1.5 text-[9px] font-black text-blue-600/60 uppercase tracking-widest pl-2">
                    <MapPin size={12} />
                    📍 {t('nearby_label') || "Выбор региона"}
                </div>

                {/* Region Pills */}
                <div className="flex gap-2 overflow-x-auto no-scrollbar px-1 pb-1">
                    <button
                        onClick={() => setSelectedRegion(null)}
                        className={`px-3 py-1.5 rounded-full text-[10px] font-bold whitespace-nowrap transition-all ${!selectedRegion ? 'bg-blue-600 text-white shadow-sm' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                    >
                        {t('all_regions') || 'Все регионы'}
                    </button>
                    {Object.entries(REGIONS).map(([code, names]: [string, any]) => (
                        <button
                            key={code}
                            onClick={() => setSelectedRegion(code)}
                            className={`px-3 py-1.5 rounded-full text-[10px] font-bold whitespace-nowrap transition-all ${selectedRegion === code ? 'bg-blue-600 text-white shadow-sm' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                        >
                            {names[langKey] || names.en}
                        </button>
                    ))}
                </div>
            </div>

            {/* Entities List */}
            <div className="flex-grow p-3 space-y-3.5 overflow-y-auto no-scrollbar pb-10">
                {filteredEntities.length === 0 ? (
                    <div className="text-center text-gray-400 py-10 font-bold">{t('search_no_results')}</div>
                ) : (
                    filteredEntities.map((entity) => {
                        const isExpanded = expandedId === entity.id;
                        const data = entity.data;
                        const name = typeof data.name === 'string' ? data.name : (data.name[langKey] || data.name.en);

                        return (
                            <div
                                key={entity.id}
                                id={`entity-${entity.id}`}
                                className={`bg-white rounded-[20px] border ${isExpanded ? 'border-blue-200 shadow-md' : 'border-gray-100 shadow-sm'} overflow-hidden transition-all duration-300`}
                            >
                                <div
                                    onClick={() => toggleExpand(entity.id)}
                                    className="px-4 py-4 flex flex-col gap-2.5 cursor-pointer hover:bg-gray-50/50 active:bg-gray-100 transition-colors relative"
                                >
                                    <div className="flex justify-between items-start">
                                        <div className="flex flex-col gap-0.5 pr-6">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-white font-bold text-[10px]`} style={{ backgroundColor: vertical.color }}>
                                                    {vertical.name.en.charAt(0)}
                                                </div>
                                                <h4 className="font-ex-black text-gray-900 text-sm leading-tight tracking-tight">
                                                    {name}
                                                </h4>
                                            </div>
                                            {data.nameKo && <span className="text-[10px] font-bold text-gray-400 ml-9 tracking-tight">{data.nameKo}</span>}
                                        </div>
                                        <div className="flex flex-col items-end gap-1">
                                            <div className="flex items-center gap-1 text-orange-500 font-black text-[10px]">
                                                <Star size={12} fill="currentColor" /> 4.1
                                            </div>
                                            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">2.3 км</span>
                                        </div>
                                    </div>

                                    {/* Quick Info Preview (Card Mode) */}
                                    <div className="flex flex-wrap gap-3 mt-1 ml-10">
                                        {vertical.fields.filter(f => f.showInCard).map(field => {
                                            const val = data[field.code];
                                            if (!val || field.code === 'name') return null;
                                            return (
                                                <div key={field.code} className="flex items-center">
                                                    {renderField(field, val)}
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <div className={`absolute right-4 bottom-5 p-1.5 rounded-full bg-gray-50 text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-blue-50 text-blue-500' : ''}`}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    </div>
                                </div>

                                {/* Expanded Detail Mode */}
                                <div className={`transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="px-5 pb-6 pt-4 border-t border-gray-50 space-y-5 bg-gray-50/20">

                                        {/* Address & Map Block */}
                                        {data.address && (
                                            <div className="space-y-2">
                                                <div className="flex items-start gap-2">
                                                    <MapPin size={16} className="text-blue-500 shrink-0 mt-0.5" />
                                                    <div className="flex flex-col">
                                                        <span className="text-xs font-bold text-gray-700">
                                                            {typeof data.address === 'string' ? data.address : (data.address[langKey] || data.address.en)}
                                                        </span>
                                                        {data.addressKo && <span className="text-[11px] font-medium text-gray-400">{data.addressKo}</span>}
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 ml-6">
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            const addr = data.addressKo || (typeof data.address === 'string' ? data.address : data.address.en);
                                                            copyToClipboard(addr, data.id);
                                                        }}
                                                        className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-1 ${copiedId === data.id ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                                            }`}
                                                    >
                                                        {copiedId === data.id ? <Check size={10} /> : null}
                                                        {copiedId === data.id ? (uiLang === 'ru' ? 'Скопировано' : 'Copied') : t('copy_address')}
                                                    </button>
                                                    {data.naverMapUrl && (
                                                        <a
                                                            href={`nmap://search?query=${encodeURIComponent(data.addressKo || (typeof data.address === 'string' ? data.address : data.address.en))}&appname=com.koreahub.app`}
                                                            className="px-3 py-1.5 bg-green-50 rounded-lg text-[10px] font-black uppercase tracking-wider text-green-700 hover:bg-green-100 flex items-center gap-1"
                                                        >
                                                            <ExternalLink size={10} />
                                                            {t('route')} (App)
                                                        </a>
                                                    )}
                                                    {data.naverMapUrl && (
                                                        <a
                                                            href={data.naverMapUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="px-3 py-1.5 bg-gray-100 rounded-lg text-[10px] font-black uppercase tracking-wider text-gray-500 hover:bg-gray-200"
                                                        >
                                                            Web
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                        {/* Dynamic Fields List */}
                                        <div className="grid gap-4">
                                            {vertical.fields.filter(f => f.showInDetail).map(field => {
                                                const val = data[field.code];
                                                if (!val || field.code === 'nameKo' || field.code === 'addressKo') return null;
                                                return (
                                                    <div key={field.code} className="flex flex-col gap-1.5 pl-6 border-l-2 border-gray-100">
                                                        <span className="text-[9px] font-black uppercase text-gray-400 tracking-widest">{getLabel(field, langKey)}</span>
                                                        <div className="text-xs font-medium text-gray-700 leading-relaxed">
                                                            {renderField(field, val)}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        {/* Actions Bar */}
                                        <div className="flex gap-2 pt-2">
                                            {vertical.actions.includes('call') && data.phone && (
                                                <a href={`tel:${data.phone}`} className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-4 rounded-2xl font-black text-[11px] uppercase shadow-lg shadow-blue-100 active:scale-95 transition-all">
                                                    <Phone size={16} /> Позвонить
                                                </a>
                                            )}
                                            {vertical.actions.includes('naver_map') && data.naverMapUrl && (
                                                <a href={data.naverMapUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-4 rounded-2xl font-black text-[11px] uppercase shadow-lg shadow-green-100 active:scale-95 transition-all">
                                                    <ExternalLink size={16} /> Naver Map
                                                </a>
                                            )}
                                            {vertical.actions.includes('booking') && vertical.koreaSpecific?.portalUrl && (
                                                <a
                                                    href={vertical.koreaSpecific.portalUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 flex items-center justify-center gap-2 bg-rose-500 text-white py-4 rounded-2xl font-black text-[11px] uppercase shadow-lg shadow-rose-100 active:scale-95 transition-all text-center"
                                                >
                                                    <Calendar size={16} />
                                                    <span className="leading-tight">
                                                        {langKey === 'kk' ? 'Онлайн жазылу' :
                                                            langKey === 'uz' ? 'Onlayn yozilish' :
                                                                langKey === 'en' ? 'Online Booking' :
                                                                    langKey === 'ko' ? '방문예약' : 'Запись онлайн'}
                                                    </span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}

                {/* Info Articles Section (The "📚 Полезные статьи" block) */}
                {vertical.infoArticles && (
                    <div className="mt-8 space-y-4">
                        <div className="flex justify-between items-center px-1">
                            <h3 className="text-[11px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                                <Landmark size={14} /> Полезные статьи
                            </h3>
                            <button className="text-[10px] font-black text-blue-600 uppercase">Все</button>
                        </div>
                        <div className="bg-white rounded-[24px] border border-gray-100 p-2 shadow-sm">
                            {vertical.infoArticles.map((art, idx) => (
                                <div key={art.slug} className={`p-4 flex items-center gap-3 ${idx !== vertical.infoArticles!.length - 1 ? 'border-b border-gray-50' : ''} hover:bg-gray-50 transition-colors cursor-pointer rounded-xl`}>
                                    <div className="p-2 bg-blue-50 text-blue-500 rounded-lg">
                                        <ShieldCheck size={18} />
                                    </div>
                                    <span className="text-sm font-bold text-gray-700">{art.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Communities Section */}
                <div className="mt-6 space-y-4">
                    <div className="flex justify-between items-center px-1">
                        <h3 className="text-[11px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                            <MessageSquare size={14} /> Сообщества
                        </h3>
                        <button className="text-[10px] font-black text-blue-600 uppercase">Войти</button>
                    </div>
                    <div className="bg-gray-900 rounded-[28px] p-6 text-white shadow-xl relative overflow-hidden">
                        <div className="relative z-10 space-y-3">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-[10px] font-black uppercase text-gray-400">1,234 участника онлайн</span>
                            </div>
                            <h4 className="font-ex-black text-lg leading-tight tracking-tight">Чат помощи по визам</h4>
                            <p className="text-gray-400 text-[11px] leading-relaxed font-medium">Обсуждение F-2, F-5, E-7 и других визовых категорий в реальном времени.</p>
                        </div>
                        <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
                            <MessageSquare size={120} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
