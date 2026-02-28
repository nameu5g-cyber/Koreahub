"use client";

import React, { useState, useEffect } from 'react';
import { LifeHub } from '../components/LifeHub';
import { translations } from '../../lib/translations';

export default function HubPage() {
    const [mounted, setMounted] = useState(false);
    const [uiLang, setUiLang] = useState('ru');
    const [doc, setDoc] = useState('passport');
    const [sim, setSim] = useState('data');

    useEffect(() => {
        setUiLang(localStorage.getItem('kh_lang') || 'ru');
        setDoc(localStorage.getItem('kh_doc') || 'passport');
        setSim(localStorage.getItem('kh_sim') || 'data');
        setMounted(true);
    }, []);

    const t = (key: string) => (translations as any)[uiLang]?.[key] || (translations as any)['en']?.[key] || key;

    if (!mounted) return null;

    return (
        <LifeHub
            t={t}
            doc={doc} setDoc={setDoc}
            sim={sim} setSim={setSim}
            setActiveTab={(tab) => window.location.hash = tab}
            setIsSimExpertChat={() => { }}
            onSosOpen={() => { }}
        />
    );
}
