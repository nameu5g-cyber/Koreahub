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

    const filtered = RESOURCES_DATA.filter(cat => activeCat === 'all' || cat.id === activeCat)
        .map(cat => ({
            ...cat,
            items: (cat.items || []).filter(item =>
                (item.name || '').toLowerCase().includes(search.toLowerCase()) ||
                ((item.desc as any)[uiLang] || (item.desc as any).en || '').toLowerCase().includes(search.toLowerCase())
            )
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

            <div className="flex-grow p-4 space-y-8 overflow-y-auto no-scrollbar pb-10">
                {filtered.map(cat => (
                    <div key={cat.id} className="space-y-4">
                        <h3 className="text-[10px] font-black text-blue-900 uppercase tracking-widest pl-2 border-l-4 border-blue-600">{(cat.title as any)[uiLang] || cat.title.en}</h3>
                        <div className="grid gap-3">
                            {cat.items.map((item, idx) => (
                                <div key={idx} className="bg-white p-5 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-extrabold text-gray-900 text-sm">{item.name}</h4>
                                        {item.location && <span className="text-[9px] font-black bg-blue-50 text-blue-600 px-2 py-1 rounded-lg uppercase tracking-tighter">{item.location}</span>}
                                    </div>
                                    <p className="text-xs text-gray-500 leading-relaxed font-medium mb-4">{(item.desc as any)[uiLang] || (item.desc as any).en}</p>
                                    <div className="flex gap-2">
                                        {item.phone && (
                                            <a href={`tel:${item.phone}`} className="flex-grow flex items-center justify-center gap-2 bg-blue-50 text-blue-600 py-3 rounded-2xl font-black text-[10px] uppercase hover:bg-blue-600 hover:text-white transition-all">
                                                <Phone size={14} /> {t('call')}
                                            </a>
                                        )}
                                        {item.link && (
                                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex-grow flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-2xl font-black text-[10px] uppercase active:scale-95 transition-all">
                                                <ExternalLink size={14} /> {t('visit')}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
