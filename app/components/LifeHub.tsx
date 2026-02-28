"use client";

import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { PLANS_DATA } from '../../lib/data/constants';

interface LifeHubProps {
    t: (key: string) => string;
    doc: string;
    setDoc: (doc: string) => void;
    sim: string;
    setSim: (sim: string) => void;
    setActiveTab: (tab: string) => void;
    setIsSimExpertChat: (isExpert: boolean) => void;
    onSosOpen: () => void;
}

export function LifeHub({ t, doc, setDoc, sim, setSim, setActiveTab, setIsSimExpertChat, onSosOpen }: LifeHubProps) {
    const [planIdx, setPlanIdx] = useState(0);
    const [vPlanIdx, setVPlanIdx] = useState(0);
    const [term, setTerm] = useState(1); // 1, 6, 12 months
    const [arrivalDay, setArrivalDay] = useState(new Date().getDate());
    const [stayDuration, setStayDuration] = useState(30);

    const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
    const remainingDays = Math.max(1, daysInMonth - arrivalDay + 1);

    useEffect(() => {
        setPlanIdx(0);
        setVPlanIdx(0);
        if (doc === 'passport' || sim === 'data') setTerm(1);
    }, [doc, sim]);

    const calculateProrated = (name: string) => {
        if (doc !== 'passport' || name.includes('396') || name.includes('459') || sim === 'data') return name;
        const gbMatch = name.match(/(\d+(\.\d+)?)\s*GB/);
        if (!gbMatch) return name;
        const total = parseFloat(gbMatch[1]);
        const prorated = ((total / daysInMonth) * remainingDays).toFixed(1);
        return name.replace(/(\d+(\.\d+)?)\s*GB/, `${prorated} GB / ${total} GB`) + ` (${remainingDays} ${t('days_rem')})`;
    };

    const currentDataPlans = sim === 'data' ? PLANS_DATA.data_only : (doc === 'passport' ? PLANS_DATA.voice_passport : PLANS_DATA.voice_arc);

    const getDiscountPlans = () => {
        if (doc === 'arc' && sim !== 'data') {
            const payNote = t('full_payment_note');
            if (term === 6) return [{ name: 'Ntelecom 330 (10.3GB+3M)', price: '33,000 KRW', note: t('sim_note_396') + '\n' + payNote, provider: 'L-Net (6m)' }];
            if (term === 12) return [
                { name: 'Ntelecom 299 (10.3GB+3M)', price: '29,900 KRW', note: t('sim_note_396') + '\n' + payNote, provider: 'K/L Net' },
                { name: 'Ntelecom 399 (20.3GB+3M)', price: '39,900 KRW', note: '20.3 GB + Unlimited.\n' + payNote, provider: 'K-Net' },
                { name: 'Ntelecom 494 (11GB+2GB/Day)', price: '49,400 KRW', note: '11GB + 2GB/Daily + 3Mbps.\n' + payNote, provider: 'L-Net' },
            ];
        }
        return currentDataPlans;
    };

    const currentPlans = getDiscountPlans();
    const selectedPlan = currentPlans[Math.min(sim === 'data' ? planIdx : vPlanIdx, currentPlans.length - 1)];

    const calculatePrice = (p: any) => {
        if (!p) return '';
        if (doc === 'passport' && p.name.includes('859')) {
            return `${Math.ceil((85900 / 30) * stayDuration).toLocaleString()} KRW`;
        }
        return p.price;
    };

    const currentPrice = calculatePrice(selectedPlan);

    return (
        <div className="h-full overflow-y-auto no-scrollbar p-5 space-y-6 pb-12">
            {/* SOS Button */}
            <button
                onClick={onSosOpen}
                className="w-full bg-red-50 border-2 border-red-100 p-5 rounded-[32px] flex items-center justify-between active:scale-95 transition-all shadow-sm group"
            >
                <div className="flex items-center gap-4 text-left">
                    <div className="text-3xl bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner group-hover:rotate-12 transition-transform">🚨</div>
                    <div>
                        <p className="text-[10px] font-black text-red-500 uppercase tracking-[0.2em]">Emergency</p>
                        <p className="text-lg font-extrabold text-red-600 leading-tight tracking-tight">{t('sos')}</p>
                    </div>
                </div>
                <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg shadow-red-200">
                    <Phone size={18} />
                </div>
            </button>

            {/* Selection Grid */}
            <div className="space-y-3">
                <div className="bg-white p-1 rounded-3xl border border-gray-100 shadow-sm flex">
                    <button
                        onClick={() => setDoc('passport')}
                        className={`flex-1 py-3.5 rounded-[22px] text-[11px] font-black uppercase transition-all duration-300 ${doc === 'passport' ? 'bg-blue-600 text-white shadow-lg scale-100' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`}
                    >
                        {t('passport')}
                    </button>
                    <button
                        onClick={() => setDoc('arc')}
                        className={`flex-1 py-3.5 rounded-[22px] text-[11px] font-black uppercase transition-all duration-300 ${doc === 'arc' ? 'bg-blue-600 text-white shadow-lg scale-100' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`}
                    >
                        {t('arc')}
                    </button>
                </div>

                {/* Term Selector - ONLY for ARC (Voice only) */}
                {doc === 'arc' && sim !== 'data' && (
                    <div className="bg-gray-100 p-1.5 rounded-full flex gap-1 shadow-inner border border-gray-200/50">
                        {[1, 6, 12].map((m) => (
                            <button
                                key={m}
                                onClick={() => setTerm(m)}
                                className={`flex-1 py-3 rounded-full text-[9px] font-black uppercase transition-all flex items-center justify-center ${term === m ? 'bg-gray-900 text-white shadow-xl' : 'text-gray-400 hover:text-gray-600'}`}
                            >
                                {(t as any)(`term_${m}m`)}
                            </button>
                        ))}
                    </div>
                )}

                {/* Passport specific: Arrival Date & Stay Duration */}
                {doc === 'passport' && sim !== 'data' && !selectedPlan?.name.includes('396') && !selectedPlan?.name.includes('459') && (
                    <div className="space-y-3 animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className="bg-white p-4 rounded-[28px] border border-gray-100 shadow-sm space-y-4">
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">{t('arrival_date')}</span>
                                    <span className="text-[8px] text-blue-500/50 font-bold italic">Calculation reset on 1st</span>
                                </div>
                                <input
                                    type="number"
                                    min="1"
                                    max={daysInMonth}
                                    value={arrivalDay}
                                    onChange={(e) => setArrivalDay(parseInt(e.target.value) || 1)}
                                    className="w-16 bg-gray-50 border-none rounded-xl px-3 py-1.5 text-xs font-black text-blue-600 text-center shadow-inner"
                                />
                            </div>

                            {/* Stay Duration - ONLY for 859 and dynamic plans */}
                            {selectedPlan?.name.includes('859') && (
                                <div className="space-y-2 border-t border-gray-50 pt-3">
                                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{t('days_rem')}</span>
                                    <div className="grid grid-cols-5 gap-1">
                                        {[10, 15, 20, 25, 30].map((d) => (
                                            <button
                                                key={d}
                                                onClick={() => setStayDuration(d)}
                                                className={`py-2 rounded-xl text-[9px] font-black transition-all ${stayDuration === d ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-50 text-gray-400'}`}
                                            >
                                                {d}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* SIM Type Selection - Only for 1m */}
                {term === 1 && (
                    <div className="bg-white p-1.5 rounded-full flex gap-1 shadow-sm border border-gray-100 animate-in slide-in-from-top-2">
                        <button
                            onClick={() => setSim('data')}
                            className={`flex-1 py-4 rounded-full text-[11px] font-black uppercase transition-all flex items-center justify-center ${sim === 'data' ? 'bg-blue-50 text-blue-600 border border-blue-100' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            {t('sim_type_data')}
                        </button>
                        <button
                            onClick={() => setSim('voice')}
                            className={`flex-1 py-4 rounded-full text-[11px] font-black uppercase transition-all flex items-center justify-center ${sim === 'voice' ? 'bg-blue-50 text-blue-600 border border-blue-100' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            {t('sim_type_voice')}
                        </button>
                    </div>
                )}
            </div>

            {/* Plans Section */}
            <div className="bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden animate-in zoom-in-95">
                <div className="p-6 space-y-5">
                    <div className="flex justify-between items-center px-1">
                        <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{sim === 'data' ? 'Internet' : 'Voice + Data'}</span>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-[9px] font-black text-gray-400 uppercase tracking-tighter">Verified 2026</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        {currentPlans.map((p, i) => {
                            const displayName = calculateProrated(p.name);
                            return (
                                <button
                                    key={i}
                                    onClick={() => sim === 'data' ? setPlanIdx(i) : setVPlanIdx(i)}
                                    className={`p-4 rounded-3xl text-left transition-all duration-300 border-2 flex flex-col justify-center hover:shadow-md active:scale-95 ${(sim === 'data' ? planIdx : vPlanIdx) === i ? 'border-blue-600 bg-blue-50/50' : 'border-gray-50 bg-gray-50/30 hover:border-blue-200'} ${currentPlans.length % 2 !== 0 && i === currentPlans.length - 1 ? 'col-span-2' : ''}`}
                                >
                                    <div className="flex justify-between items-center mb-1">
                                        <div className="text-[9px] font-black text-gray-400 uppercase truncate pr-1">
                                            {displayName.includes(' + QoS') ? (
                                                <>
                                                    {displayName.split(' + QoS')[0]} <span className="text-blue-500 opacity-60 text-[7px] shrink-0">+{displayName.split(' + QoS')[1]}</span>
                                                </>
                                            ) : displayName}
                                        </div>
                                        {p.provider && (
                                            <span className={`text-[7px] font-black text-white px-1.5 py-0.5 rounded-full shrink-0 ${p.provider === 'KT' ? 'bg-red-500' : (p.provider === 'U+' ? 'bg-pink-500' : 'bg-gradient-to-r from-red-500 to-pink-500')}`}>
                                                {p.provider}
                                            </span>
                                        )}
                                    </div>
                                    <div className="text-xs font-black text-gray-900 uppercase">{calculatePrice(p).split(' ')[0]} <span className="text-[8px] opacity-40 italic">KRW</span></div>
                                </button>
                            );
                        })}
                    </div>

                    <div className="p-6 bg-gray-900 rounded-[32px] text-white shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform"></div>
                        <div className="flex justify-between items-end relative z-10">
                            <div>
                                <div className="text-[9px] font-black opacity-30 uppercase tracking-widest mb-1">Selected Plan</div>
                                <div className="text-xl font-black tracking-tight">{selectedPlan?.name}</div>
                            </div>
                            <div className="text-right">
                                <div className="text-lg font-black text-blue-400">{currentPrice}</div>
                            </div>
                        </div>
                    </div>

                    {selectedPlan?.note && (
                        <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100/50 animate-in slide-in-from-top-1">
                            <p className="text-[10px] font-bold text-blue-800 leading-tight flex gap-2 italic">
                                <span>ℹ️</span> {selectedPlan.note}
                            </p>
                        </div>
                    )}

                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                        <p className="text-[10px] text-gray-500 font-bold leading-tight italic">
                            {sim === 'data'
                                ? t('sim_data_only_note')
                                : doc === 'passport'
                                    ? t('sim_passport_voice_note')
                                    : t('sim_arc_remote_activation')}
                        </p>
                    </div>

                    <div className="flex gap-2">
                        <a
                            href={`tel:${t('sim_consult_phone')}`}
                            className="flex-grow bg-blue-600 text-white py-5 rounded-[24px] font-black text-xs uppercase shadow-xl shadow-blue-100 active:scale-95 transition-all flex items-center justify-center gap-3 group"
                        >
                            <Phone size={18} className="group-hover:animate-shake" />
                            {t('sim_consult_phone')}
                        </a>
                        <button
                            onClick={() => {
                                setIsSimExpertChat(true);
                                setActiveTab('chat');
                            }}
                            className="px-6 bg-gray-900 text-white py-5 rounded-[24px] font-black text-xs uppercase shadow-xl active:scale-95 transition-all flex items-center justify-center gap-3 group"
                        >
                            <MessageSquare size={18} className="text-blue-400 group-hover:rotate-12" />
                            AI
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
