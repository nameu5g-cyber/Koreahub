"use client";

import React, { useState, useEffect } from 'react';
import { ResourcesRegistry } from '../components/ResourcesRegistry';
import { translations } from '../../lib/translations';

export default function DocsPage() {
    const [mounted, setMounted] = useState(false);
    const [uiLang, setUiLang] = useState('ru');

    useEffect(() => {
        setUiLang(localStorage.getItem('kh_lang') || 'ru');
        setMounted(true);
    }, []);

    const t = (key: string) => (translations as any)[uiLang]?.[key] || (translations as any)['en']?.[key] || key;

    if (!mounted) return null;

    return <ResourcesRegistry t={t} uiLang={uiLang} />;
}
