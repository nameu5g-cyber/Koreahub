"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Assistant } from '../components/Assistant';
import { translations } from '../../lib/translations';

export default function ChatPage() {
    const searchParams = useSearchParams();
    const [mounted, setMounted] = useState(false);
    const [uiLang, setUiLang] = useState('ru');
    const [messages, setMessages] = useState<any[]>([]);
    const [sessionCount, setSessionCount] = useState(0);

    const isSimExpert = searchParams.get('expert') === 'true';

    useEffect(() => {
        const savedLang = localStorage.getItem('kh_lang') || 'ru';
        const savedMessages = localStorage.getItem('kh_messages');
        const savedCount = localStorage.getItem('kh_count');

        setUiLang(savedLang);
        if (savedMessages) setMessages(JSON.parse(savedMessages));
        if (savedCount) setSessionCount(parseInt(savedCount));

        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            localStorage.setItem('kh_messages', JSON.stringify(messages));
            localStorage.setItem('kh_count', String(sessionCount));
        }
    }, [messages, sessionCount, mounted]);

    const t = (key: string) => (translations as any)[uiLang]?.[key] || (translations as any)['en']?.[key] || key;

    if (!mounted) return null;

    return (
        <Assistant
            t={t} uiLang={uiLang}
            messages={messages} setMessages={setMessages}
            sessionCount={sessionCount} setSessionCount={setSessionCount}
            isSimExpert={isSimExpert}
        />
    );
}
