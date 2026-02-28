"use client";

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Plus, MessageSquare, Languages, Book, ShieldAlert, Loader2, PhoneCall } from 'lucide-react';
import { translations, LANG_LIST } from '../../lib/translations';
import { SosScreen } from './SosScreen';

export function AppShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const [mounted, setMounted] = useState(false);
    const [hasAccepted, setHasAccepted] = useState(false);
    const [uiLang, setUiLang] = useState('ru');
    const [isLangOpen, setIsLangOpen] = useState(false);

    const isSosOpen = searchParams.get('sos') === 'true';

    useEffect(() => {
        setHasAccepted(localStorage.getItem('kh_accepted') === 'true');
        setUiLang(localStorage.getItem('kh_lang') || 'ru');
        setMounted(true);
    }, []);

    useEffect(() => { if (mounted) localStorage.setItem('kh_accepted', String(hasAccepted)); }, [hasAccepted, mounted]);
    useEffect(() => { if (mounted) localStorage.setItem('kh_lang', uiLang); }, [uiLang, mounted]);

    const t = (key: string) => (translations as any)[uiLang]?.[key] || (translations as any)['en']?.[key] || key;

    const navigate = (path: string) => {
        router.push(path);
    };

    if (!mounted) return <div className="min-h-screen bg-gray-50 flex items-center justify-center"><Loader2 className="animate-spin text-blue-600" /></div>;

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-0 sm:p-4 font-sans selection:bg-blue-100">
            <div className="w-full max-w-[440px] h-[100dvh] sm:h-[760px] bg-white sm:rounded-[40px] shadow-2xl overflow-hidden relative border-0 sm:border-[8px] border-gray-900 flex flex-col">

                {/* Disclaimer */}
                {!hasAccepted && (
                    <div className="absolute inset-0 z-[110] bg-white p-8 flex flex-col items-center justify-center text-center animate-in fade-in duration-500">
                        <div className="w-20 h-20 bg-blue-600 rounded-[24px] flex items-center justify-center mb-6 shadow-xl shadow-blue-200">
                            <ShieldAlert size={40} className="text-white" />
                        </div>
                        <h1 className="text-2xl font-black text-gray-900 mb-4 tracking-tight uppercase">KOREA HUB</h1>
                        <p className="text-sm text-gray-400 mb-8 leading-relaxed font-medium">{t('disclaimer')}</p>
                        <button
                            onClick={() => setHasAccepted(true)}
                            className="w-full bg-blue-600 text-white py-5 rounded-[24px] font-black text-xs uppercase tracking-widest shadow-xl shadow-blue-100 active:scale-95 transition-all"
                        >
                            {t('accept')}
                        </button>
                    </div>
                )}

                {/* SOS Screen Overlay */}
                {isSosOpen && (
                    <div className="absolute inset-0 z-[100]">
                        <SosScreen t={t} onClose={() => router.push(pathname)} />
                    </div>
                )}

                <header className="px-6 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between sticky top-0 z-50">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-100 italic font-black text-white text-[10px]">KH</div>
                        <span className="font-black text-sm tracking-tighter text-gray-900">KOREA HUB</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => router.push('/hub?sos=true')}
                            className="w-10 h-10 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center active:scale-95 transition-all border border-red-100"
                        >
                            <PhoneCall size={18} />
                        </button>

                        <div className="relative">
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className="px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-2xl flex items-center gap-2 transition-all border border-gray-100"
                            >
                                <span className="text-sm">{LANG_LIST.find(l => l.code === uiLang)?.flag}</span>
                                <span className="text-[10px] font-black uppercase text-gray-500">{uiLang}</span>
                            </button>
                            {isLangOpen && (
                                <div className="absolute right-0 mt-2 w-32 bg-white rounded-3xl shadow-2xl border border-gray-100 p-2 animate-in zoom-in-95 origin-top-right z-50">
                                    {LANG_LIST.map((l: { code: string; flag: string }) => (
                                        <button
                                            key={l.code}
                                            onClick={() => { setUiLang(l.code); setIsLangOpen(false); window.location.reload(); }}
                                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 rounded-2xl transition-colors"
                                        >
                                            <span>{l.flag}</span>
                                            <span className="text-xs font-bold text-gray-700 uppercase">{l.code}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                <main className="flex-grow bg-gray-50/30 overflow-hidden relative">
                    {children}
                </main>

                <nav className="bg-white border-t border-gray-100 px-8 py-5 flex items-center justify-between sticky bottom-0 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.03)] pb-10 sm:pb-5">
                    <NavBtn active={pathname === '/hub' || pathname === '/'} label={t('hub')} icon={<Plus />} onClick={() => navigate('/hub')} />
                    <NavBtn active={pathname === '/docs'} label={t('docs')} icon={<Book />} onClick={() => navigate('/docs')} />
                    <NavBtn active={pathname === '/chat'} label={t('chat')} icon={<MessageSquare />} onClick={() => navigate('/chat')} />
                    <NavBtn active={pathname === '/trans'} label={t('trans')} icon={<Languages />} onClick={() => navigate('/trans')} />
                </nav>
            </div>
        </div>
    );
}

function NavBtn({ active, label, icon, onClick }: { active: boolean, label: string, icon: any, onClick: () => void }) {
    return (
        <button onClick={onClick} className={`flex flex-col items-center gap-1 transition-all ${active ? 'text-blue-600 scale-110 font-bold' : 'text-gray-300 grayscale opacity-40'}`}>
            <span className="mb-1">{React.cloneElement(icon, { size: 22, strokeWidth: active ? 3 : 2 })}</span>
            <span className="text-[9px] font-black uppercase tracking-tighter">{label}</span>
        </button>
    );
}
