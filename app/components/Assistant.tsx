"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Send, Loader2, Trash2, X, Phone } from 'lucide-react';
import { askGeminiAction } from '../actions';
import { EXPERT_PROMPT, AGENT_VERSION } from '../../lib/agent-config';

interface AssistantProps {
    t: (key: string) => string;
    uiLang: string;
    messages: any[];
    setMessages: any;
    sessionCount: number;
    setSessionCount: any;
    isSimExpert?: boolean;
}

export function Assistant({ t, uiLang, messages, setMessages, sessionCount, setSessionCount, isSimExpert }: AssistantProps) {
    const [val, setVal] = useState('');
    const [loading, setLoading] = useState(false);
    const [cooldown, setCooldown] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, loading]);

    const handleSend = async (customVal?: string) => {
        const textToSend = customVal || val;
        if (!textToSend.trim() || loading || cooldown) return;
        if (sessionCount > 30) {
            setMessages((prev: any[]) => [...prev, { id: Date.now(), text: "⚠️ Limit reached. Please refresh.", sender: 'bot' }]);
            return;
        }

        setMessages((prev: any[]) => [...prev, { id: Date.now(), text: textToSend, sender: 'user' }]);
        setVal('');
        setLoading(true);
        setSessionCount((prev: number) => prev + 1);

        const langNames: Record<string, string> = { ru: 'Russian', en: 'English', uz: 'Oʻzbekcha', kz: 'Қазақша' };
        const currentLangName = langNames[uiLang] || 'Russian';

        const system = EXPERT_PROMPT.replace(/\[USER_LANGUAGE\]/g, currentLangName) +
            (isSimExpert ? `\n\n${t('sim_ai_prompt')}` : "") +
            `\nToday is ${new Date().toLocaleDateString()}.`;

        try {
            const res = await askGeminiAction(textToSend, system, messages);
            setMessages((prev: any[]) => [...prev, { id: Date.now() + 1, text: res, sender: 'bot' }]);
        } catch (e) {
            setMessages((prev: any[]) => [...prev, { id: Date.now() + 1, text: "Error connecting to AI.", sender: 'bot' }]);
        } finally {
            setLoading(false);
            setCooldown(true);
            setTimeout(() => setCooldown(false), 1500);
        }
    };

    return (
        <div className={`flex flex-col h-full ${isSimExpert ? 'bg-blue-50/30' : 'bg-gray-50/30'}`}>
            <div className={`px-4 py-3 flex items-center justify-between border-b ${isSimExpert ? 'bg-blue-600 text-white' : 'bg-white border-gray-100'}`}>
                <div className="flex items-center gap-2">
                    {!isSimExpert && <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />}
                    <span className="text-[10px] font-black uppercase tracking-widest">
                        {isSimExpert ? t('sim_expert_mode') : 'Korea Expert Agent'}
                    </span>
                </div>
                <div className="flex items-center gap-3">
                    <span className={`text-[9px] font-bold ${isSimExpert ? 'text-blue-100' : 'text-blue-400'}`}>{AGENT_VERSION}</span>
                    {!isSimExpert && (
                        <button
                            onClick={() => {
                                if (confirm('Clear history?')) {
                                    setMessages([{ id: 1, text: t('welcome'), sender: 'bot' }]);
                                    setSessionCount(0);
                                }
                            }}
                            className="p-1.5 hover:bg-red-50 text-gray-300 hover:text-red-500 rounded-lg transition-colors"
                        >
                            <Trash2 size={14} />
                        </button>
                    )}
                    {isSimExpert && (
                        <>
                            <button
                                onClick={() => {
                                    if (confirm('Clear SIM Expert chat?')) {
                                        setMessages([{ id: 1, text: t('sim_expert_mode'), sender: 'bot' }]);
                                        setSessionCount(0);
                                    }
                                }}
                                className="p-1.5 hover:bg-blue-500 text-blue-200 hover:text-white rounded-lg transition-colors"
                                title="Clear chat"
                            >
                                <Trash2 size={14} />
                            </button>
                            <Phone size={14} />
                        </>
                    )}
                </div>
            </div>

            <div ref={scrollRef} className="flex-grow space-y-4 p-4 overflow-y-auto no-scrollbar">
                {messages.map(m => (
                    <div key={m.id} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`p-4 rounded-[26px] text-[13px] font-medium leading-relaxed max-w-[85%] shadow-sm ${m.sender === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white border border-gray-100 rounded-tl-none'}`}>
                            {m.text}
                        </div>
                    </div>
                ))}
                {loading && (
                    <div className="flex gap-2 items-center bg-white/80 w-fit px-4 py-2 rounded-full border border-blue-50 ml-2 animate-pulse">
                        <Loader2 className="animate-spin text-blue-600" size={14} />
                        <span className="text-[10px] font-bold text-blue-400 uppercase italic">Thinking...</span>
                    </div>
                )}
            </div>

            <div className="p-4 space-y-3 bg-white/80 backdrop-blur-md border-t border-gray-100">
                {!isSimExpert && (
                    <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                        <button onClick={() => handleSend(t('explain_prompt'))} className="whitespace-nowrap bg-white border border-blue-100 text-blue-600 px-4 py-2.5 rounded-full text-[10px] font-black active:scale-95 shadow-sm">🇰🇷 {t('explain_btn')}</button>
                        <button onClick={() => handleSend(t('arc_info_prompt'))} className="whitespace-nowrap bg-white border border-gray-100 text-gray-400 px-4 py-2.5 rounded-full text-[10px] font-black active:scale-95 shadow-sm">📝 {t('arc_info_btn')}</button>
                    </div>
                )}
                <div className="flex gap-2">
                    <input
                        value={val}
                        onChange={(e) => setVal(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        disabled={loading}
                        className={`flex-grow bg-white border border-gray-200 rounded-[28px] px-6 py-4 text-sm outline-none shadow-sm transition-all ${loading ? 'opacity-50 grayscale' : 'focus:border-blue-500'}`}
                        placeholder="..."
                    />
                    <button
                        onClick={() => handleSend()}
                        disabled={loading}
                        className={`bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all ${loading ? 'opacity-50 scale-90 grayscale' : 'active:scale-95'}`}
                    >
                        <Send size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}
