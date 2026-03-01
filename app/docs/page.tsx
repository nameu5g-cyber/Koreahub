"use client";

import React, { useState, useEffect } from 'react';
import { ResourcesRegistry } from '../components/ResourcesRegistry';
import { LexiconRegistry } from '../components/LexiconRegistry';
import { translations } from '../../lib/translations';

export default function DocsPage() {
    const [mounted, setMounted] = useState(false);
    const [uiLang, setUiLang] = useState('ru');
    const [activeTab, setActiveTab] = useState<'registry' | 'lexicon'>('registry');

    useEffect(() => {
        setUiLang(localStorage.getItem('kh_lang') || 'ru');
        setMounted(true);
    }, []);

    const t = (key: string) => (translations as any)[uiLang]?.[key] || (translations as any)['en']?.[key] || key;

    if (!mounted) return null;

    return (
        <div className="h-full flex flex-col bg-gray-50/50">
            {/* Top Toggle Component */}
            <div className="bg-white p-4 pb-2 border-b border-gray-100 flex gap-2 shadow-sm z-20">
                <button
                    onClick={() => setActiveTab('registry')}
                    className={`flex-1 py-3.5 rounded-[22px] text-[11px] font-black uppercase transition-all duration-300 ${activeTab === 'registry' ? 'bg-blue-600 text-white shadow-lg scale-100' : 'bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600'}`}
                >
                    {t('resources') || 'Реестр Мест'}
                </button>
                <button
                    onClick={() => setActiveTab('lexicon')}
                    className={`flex-1 py-3.5 rounded-[22px] text-[11px] font-black uppercase transition-all duration-300 ${activeTab === 'lexicon' ? 'bg-blue-600 text-white shadow-lg scale-100' : 'bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600'}`}
                >
                    Словарь (Lexicon)
                </button>
            </div>

            {/* Content Area */}
            <div className="flex-grow overflow-hidden relative">
                <div className={`absolute inset-0 transition-opacity duration-300 ${activeTab === 'registry' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                    <ResourcesRegistry t={t} uiLang={uiLang} />
                </div>
                <div className={`absolute inset-0 transition-opacity duration-300 ${activeTab === 'lexicon' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                    <LexiconRegistry t={t} uiLang={uiLang} />
                </div>
            </div>
        </div>
    );
}
