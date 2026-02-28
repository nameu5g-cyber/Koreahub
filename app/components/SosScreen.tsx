"use client";

import React from 'react';
import { Phone, X, ShieldAlert } from 'lucide-react';

interface SosScreenProps {
    t: (key: string) => string;
    onClose: () => void;
}

export function SosScreen({ t, onClose }: SosScreenProps) {
    const sosNumbers = [
        { n: '112', l: t('sos_police'), i: '👮' },
        { n: '119', l: t('sos_ambulance'), i: '🚑' },
        { n: '1345', l: t('sos_immigration'), i: '🛂' },
        { n: '1577-1366', l: t('sos_danuri'), i: '🏠' }
    ];

    return (
        <div className="h-full bg-white animate-in slide-in-from-bottom-full duration-300 z-[100] flex flex-col">
            <div className="p-6 flex justify-between items-center border-b border-gray-50">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-50 rounded-2xl flex items-center justify-center text-red-600">
                        <ShieldAlert size={24} />
                    </div>
                    <div>
                        <h2 className="text-xl font-black uppercase tracking-tighter text-gray-900 leading-none">Emergency</h2>
                        <p className="text-[10px] font-bold text-red-400 uppercase tracking-widest mt-1">24/7 Response</p>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-900 active:scale-90 transition-all font-bold"
                >
                    <X size={20} />
                </button>
            </div>

            <div className="flex-grow p-6 space-y-4 overflow-y-auto no-scrollbar">
                {sosNumbers.map(s => (
                    <a
                        key={s.n}
                        href={`tel:${s.n}`}
                        className="flex items-center justify-between p-6 bg-white border border-gray-100 rounded-[32px] shadow-sm active:bg-red-50 active:border-red-100 transition-all group"
                    >
                        <div className="flex items-center gap-5">
                            <span className="text-4xl bg-gray-50 w-16 h-16 rounded-[24px] flex items-center justify-center group-active:scale-110 transition-transform shadow-inner">
                                {s.i}
                            </span>
                            <div className="flex flex-col">
                                <span className="font-black text-[10px] text-gray-400 uppercase tracking-wider mb-1">{s.l}</span>
                                <span className="text-3xl font-black text-gray-900 leading-none tracking-tighter group-active:text-red-600 transition-colors">{s.n}</span>
                            </div>
                        </div>
                        <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-300 group-active:text-red-500 group-active:bg-red-100/50 transition-all">
                            <Phone size={18} />
                        </div>
                    </a>
                ))}

                <div className="p-6 bg-amber-50 rounded-[32px] border border-amber-100 mt-4 space-y-2">
                    <p className="text-[11px] font-bold text-amber-900 leading-relaxed italic">
                        * {t('sos_tip_call')}
                    </p>
                    <p className="text-[11px] font-bold text-amber-700 leading-relaxed italic border-t border-amber-200/50 pt-2">
                        * {t('sos_tip_hospital')}
                    </p>
                </div>
            </div>

            <div className="p-6 bg-gray-50 border-t border-gray-100">
                <button
                    onClick={onClose}
                    className="w-full bg-white border border-gray-200 py-4 rounded-[20px] font-black text-[11px] uppercase tracking-widest text-gray-400 active:scale-95 transition-all shadow-sm"
                >
                    {t('sos_back')}
                </button>
            </div>
        </div>
    );
}
