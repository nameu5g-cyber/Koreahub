"use client";

import React, { useState } from 'react';
import { Search, Phone, ExternalLink } from 'lucide-react';
import { RESOURCES_DATA } from '../../lib/resources';

interface ResourcesRegistryProps {
    t: (key: string) => string;
    uiLang: string;
}

export function ResourcesRegistry({ t, uiLang }: ResourcesRegistryProps) {
    const [search, setSearch] = useState('');
    const [activeCat, setActiveCat] = useState('all');
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggleExpand = (id: string) => {
        setExpandedId(prev => prev === id ? null : id);
    };

    const filtered = RESOURCES_DATA.filter(cat => activeCat === 'all' || cat.id === activeCat)
        .map(cat => ({
            ...cat,
            items: (cat.items || []).filter(item => {
                const searchLower = search.toLowerCase();
                const matchName = (item.name || '').toLowerCase().includes(searchLower);
                const matchDesc = ((item.desc as any)[uiLang] || (item.desc as any).en || '').toLowerCase().includes(searchLower);
                const matchTags = item.tags && (item.tags[uiLang] || item.tags.en)
                    ? (item.tags[uiLang] || item.tags.en).some(tag => tag.toLowerCase().includes(searchLower))
                    : false;

                return matchName || matchDesc || matchTags;
            })
        })).filter(cat => cat.items.length > 0);

    return (
        <div className="flex flex-col h-full bg-gray-50/50">
            <div className="p-4 bg-white border-b border-gray-100 sticky top-0 z-10 space-y-3">
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder={t('search')}
                        className="w-full bg-gray-50 border border-gray-100 rounded-[28px] pl-12 pr-6 py-4 text-sm outline-none focus:border-blue-500 transition-all font-medium"
                    />
                </div>
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                    <button
                        onClick={() => setActiveCat('all')}
                        className={`whitespace-nowrap px-4 py-2 rounded-full text-[11px] font-black uppercase transition-all ${activeCat === 'all' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white border border-gray-100 text-gray-400'}`}
                    >
                        {t('filter_all')}
                    </button>
                    {RESOURCES_DATA.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCat(cat.id)}
                            className={`whitespace-nowrap px-4 py-2 rounded-full text-[11px] font-black uppercase transition-all ${activeCat === cat.id ? 'bg-blue-600 text-white shadow-lg' : 'bg-white border border-gray-100 text-gray-400'}`}
                        >
                            {(cat.title as any)[uiLang] || cat.title.en}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex-grow p-4 space-y-6 overflow-y-auto no-scrollbar pb-10">
                {filtered.map(cat => (
                    <div key={cat.id} className="space-y-3">
                        <h3 className="text-[10px] font-black text-blue-900 uppercase tracking-widest pl-2 border-l-4 border-blue-600">{(cat.title as any)[uiLang] || cat.title.en}</h3>
                        <div className="grid gap-2">
                            {cat.items.map((item, idx) => {
                                const isExpanded = expandedId === `${cat.id}-${idx}`;
                                return (
                                    <div key={idx} className="bg-white rounded-[24px] border border-gray-100 shadow-sm overflow-hidden transition-all duration-300">
                                        <div
                                            onClick={() => toggleExpand(`${cat.id}-${idx}`)}
                                            className="px-5 py-4 flex justify-between items-center cursor-pointer hover:bg-gray-50/50 active:bg-gray-100 transition-colors"
                                        >
                                            <div className="flex flex-col gap-1">
                                                <h4 className="font-extrabold text-gray-900 text-sm leading-tight">{item.name}</h4>
                                                {item.location && <span className="text-[10px] font-bold text-gray-500">{item.location}</span>}
                                            </div>
                                            <div className={`p-1.5 rounded-full bg-gray-50 text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-blue-50 text-blue-500' : ''}`}>
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                            </div>
                                        </div>

                                        <div className={`transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                            <div className="px-5 pb-5 pt-1 border-t border-gray-50">
                                                {item.tags && (item.tags[uiLang] || item.tags.en) && (
                                                    <div className="flex flex-wrap gap-2 mb-3">
                                                        {(item.tags[uiLang] || item.tags.en).map((tag, tagIdx) => (
                                                            <span key={tagIdx} className="px-2 py-1 text-[9px] font-bold uppercase tracking-wider bg-gray-100 text-gray-500 rounded-lg">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                                <p className="text-xs text-gray-600 leading-relaxed font-medium mb-4">{(item.desc as any)[uiLang] || (item.desc as any).en}</p>
                                                <div className="flex gap-2">
                                                    {item.phone && (
                                                        <a href={`tel:${item.phone}`} onClick={(e) => e.stopPropagation()} className="flex-grow flex items-center justify-center gap-2 bg-blue-50 text-blue-600 py-2.5 rounded-2xl font-black text-[10px] uppercase hover:bg-blue-600 hover:text-white transition-all">
                                                            <Phone size={14} /> {t('call')}
                                                        </a>
                                                    )}
                                                    {item.link && (
                                                        <a href={item.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex-grow flex items-center justify-center gap-2 bg-gray-900 text-white py-2.5 rounded-2xl font-black text-[10px] uppercase active:scale-95 transition-all">
                                                            <ExternalLink size={14} /> {t('visit')}
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
