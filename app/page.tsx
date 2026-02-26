"use client";

import React, { useState, useEffect, useRef } from 'react';
import {
  ShieldAlert, Smartphone, MessageSquare, Languages,
  MapPin, QrCode, Zap, ChevronDown, ChevronUp, ChevronRight,
  Send, Phone, Globe, Camera, X, CheckCircle2, Info, Laptop, Users, Loader2, Copy, Trash2,
  Search, ExternalLink, BookOpen
} from 'lucide-react';

import { translations, LANG_LIST } from '../lib/translations';
import { askGeminiAction } from './actions';
import { RESOURCES_DATA } from '../lib/resources';

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [hasAccepted, setHasAccepted] = useState(false);
  const [uiLang, setUiLang] = useState('ru');
  const [activeTab, setActiveTab] = useState('hub');
  const [isLangOpen, setIsLangOpen] = useState(false);

  const [messages, setMessages] = useState<any[]>([]);
  const [sessionCount, setSessionCount] = useState(0);

  // Hydration sync
  useEffect(() => {
    const savedAccepted = localStorage.getItem('kh_accepted') === 'true';
    const savedLang = localStorage.getItem('kh_lang') || 'ru';
    const savedMessages = localStorage.getItem('kh_messages');
    const savedCount = localStorage.getItem('kh_count');

    setHasAccepted(savedAccepted);
    setUiLang(savedLang);
    if (savedMessages) setMessages(JSON.parse(savedMessages));
    else setMessages([{ id: 1, text: (translations as any)[savedLang]?.welcome || translations.ru.welcome, sender: 'bot' }]);

    if (savedCount) setSessionCount(parseInt(savedCount));

    setMounted(true);
  }, []);

  // Persistence hooks
  useEffect(() => { if (mounted) localStorage.setItem('kh_accepted', String(hasAccepted)); }, [hasAccepted, mounted]);
  useEffect(() => { if (mounted) localStorage.setItem('kh_lang', uiLang); }, [uiLang, mounted]);
  useEffect(() => { if (mounted) localStorage.setItem('kh_messages', JSON.stringify(messages)); }, [messages, mounted]);
  useEffect(() => { if (mounted) localStorage.setItem('kh_count', String(sessionCount)); }, [sessionCount, mounted]);

  const t = (key: string) => (translations as any)[uiLang]?.[key] || (translations as any)['en']?.[key] || key;

  if (!mounted) return null;

  if (!hasAccepted) {
    return (
      <div className="fixed inset-0 bg-white z-[999] flex flex-col items-center justify-center p-8 text-center animate-in fade-in">
        <ShieldAlert size={60} className="text-blue-600 mb-6" />
        <h1 className="text-3xl font-black text-blue-600 mb-4 italic uppercase">KoreaHub</h1>
        <p className="text-sm text-gray-500 mb-10 leading-relaxed">{t('disclaimer')}</p>
        <button onClick={() => setHasAccepted(true)} className="w-full py-5 bg-blue-600 text-white rounded-[28px] font-bold shadow-xl active:scale-95 transition-all uppercase">{t('accept')}</button>
      </div>
    );
  }

  return (
    <div className="flex justify-center min-h-screen bg-[#F2F4F7] font-sans antialiased">
      <div className="w-full max-w-lg bg-white min-h-screen shadow-2xl flex flex-col relative overflow-hidden">
        <header className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-[100]">
          <h1 className="text-xl font-extrabold text-blue-600 italic">KoreaHub</h1>
          <div className="relative">
            <button onClick={() => setIsLangOpen(!isLangOpen)} className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-xl border">
              <span className="text-lg leading-none">{LANG_LIST.find(l => l.code === uiLang)?.flag}</span>
              <ChevronDown size={14} className={`text-gray-400 ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>
            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-[24px] shadow-2xl border p-2 z-[110] animate-in slide-in-from-top-2">
                {LANG_LIST.map(l => (
                  <button key={l.code} onClick={() => { setUiLang(l.code); setIsLangOpen(false); }} className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-xl ${uiLang === l.code ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}>
                    <span>{l.flag}</span>{l.code.toUpperCase()}
                  </button>
                ))}
              </div>
            )}
          </div>
        </header>

        <main className="flex-grow overflow-y-auto no-scrollbar bg-gray-50/30 pb-32">
          {activeTab === 'hub' && <LifeHub t={t} />}
          {activeTab === 'chat' && <AssistantScreen t={t} uiLang={uiLang} messages={messages} setMessages={setMessages} sessionCount={sessionCount} setSessionCount={setSessionCount} />}
          {activeTab === 'trans' && <TranslatorScreen t={t} uiLang={uiLang} />}
          {activeTab === 'docs' && <ResourcesRegistry t={t} uiLang={uiLang} />}
        </main>

        <nav className="fixed bottom-0 w-full max-w-lg bg-white border-t border-gray-100 px-6 py-4 pb-8 flex justify-between z-50">
          <NavBtn active={activeTab === 'hub'} onClick={() => setActiveTab('hub')} label={t('hub')} icon={<Zap />} />
          <NavBtn active={activeTab === 'docs'} onClick={() => setActiveTab('docs')} label={t('docs')} icon={<BookOpen />} />
          <NavBtn active={activeTab === 'chat'} onClick={() => setActiveTab('chat')} label={t('chat')} icon={<MessageSquare />} />
          <NavBtn active={activeTab === 'trans'} onClick={() => setActiveTab('trans')} label={t('trans')} icon={<Languages />} />
        </nav>
      </div>
    </div>
  );
}

// --- DATA ---

const DATA_ONLY_PLANS = [
  { price: '15,000', data: '10GB+', qos: '128 Kbps', label: 'Basic' },
  { price: '20,000', data: '20GB+', qos: '128 Kbps', label: 'Standard' },
  { price: '25,000', data: '30GB+', qos: '128 Kbps', label: 'Plus' },
  { price: '33,000', data: '50GB+', qos: '128 Kbps', label: 'Pro' },
  { price: '44,000', data: 'Daily 3GB', qos: '128 Kbps', label: 'Heavy' },
  { price: '54,000', data: 'Daily 1GB', qos: '5 Mbps', label: 'Ultra' },
];

const VOICE_DATA_PLANS = [
  { price: '39,600', data: 'Unlimited', voice: 'Unlimited', qos: '3 Mbps', label: 'Gold' },
  {
    price: '85,900',
    data: '100 GB',
    voice: 'Unlimited',
    qos: '5 Mbps',
    label: 'Full Unlim',
    note: 'Раздача БЕЗ лимитов. 1-го числа каждого месяца трафик обновляется (Reset) до полных 100 Гб заново.'
  },
];

// --- ПОДМОДУЛИ ---

function LifeHub({ t }: { t: any }) {
  const [doc, setDoc] = useState('passport');
  const [sim, setSim] = useState('data');
  const [planIdx, setPlanIdx] = useState(2); // Default for Data
  const [vPlanIdx, setVPlanIdx] = useState(0); // Default for Passport Voice (396)
  const [selectedDays, setSelectedDays] = useState(30);
  const [arrivalDay, setArrivalDay] = useState(new Date().getDate());
  const [showSos, setShowSos] = useState(false);

  const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
  const selectedPlan = (sim === 'data' ? DATA_ONLY_PLANS[planIdx] : (doc === 'passport' ? VOICE_DATA_PLANS[vPlanIdx] : null)) as any;

  // Dynamic price calculation for 859 plan
  const calculatePrice = () => {
    if (doc === 'passport' && sim === 'voice' && vPlanIdx === 1) {
      const basePrice = 85900;
      const rate = basePrice / 30;
      const calculated = Math.round(rate * selectedDays);
      return calculated.toLocaleString();
    }
    return selectedPlan?.price || (doc === 'arc' ? '39,600' : '59,400');
  };

  const calculateProRatedData = () => {
    if (doc === 'passport' && sim === 'voice' && vPlanIdx === 1) {
      const remainingDays = daysInMonth - arrivalDay + 1;
      const proRated = (100 / daysInMonth) * remainingDays;
      return `${Math.round(proRated)} GB`;
    }
    return sim === 'data' || (doc === 'passport' && sim === 'voice') ? selectedPlan?.data : 'Unlimited';
  };

  const totalPrice = calculatePrice();
  const displayData = calculateProRatedData();

  if (showSos) return (
    <div className="p-6 space-y-4 animate-in slide-in-from-bottom-8">
      <div className="flex justify-between items-center mb-2"><h2 className="text-xl font-black text-red-600 uppercase">SOS</h2><button onClick={() => setShowSos(false)} className="p-2 bg-gray-100 rounded-full">✕</button></div>
      {[{ n: '112', l: 'Полиция', i: '👮' }, { n: '119', l: 'Скорая', i: '🚑' }, { n: '1345', l: 'Иммиграция', i: '🛂' }].map(s => (
        <a key={s.n} href={`tel:${s.n}`} className="flex items-center justify-between p-6 bg-white border rounded-[32px] shadow-sm active:bg-red-50">
          <div className="flex items-center gap-4"><span className="text-3xl">{s.i}</span><span className="font-bold text-sm">{s.l}</span></div>
          <span className="text-xl font-black text-blue-600">{s.n}</span>
        </a>
      ))}
    </div>
  );

  return (
    <div className="p-6 space-y-6 animate-in fade-in">
      <button onClick={() => setShowSos(true)} className="w-full bg-red-50 border border-red-100 p-5 rounded-[32px] flex items-center justify-between active:scale-95 shadow-sm shadow-red-50">
        <div className="flex items-center gap-4 text-left"><span className="text-3xl animate-bounce" style={{ animationDuration: '3s' }}>🚨</span><div><p className="text-[10px] font-black text-red-500 uppercase tracking-widest leading-none mb-1">Emergency</p><p className="text-lg font-black text-red-600 leading-tight">SOS Помощь</p></div></div>
        <div className="bg-red-600 text-white rounded-full p-2.5 shadow-lg"><Phone size={20} /></div>
      </button>

      <div className="bg-white p-6 rounded-[32px] border-2 border-blue-600 shadow-xl space-y-6">
        <div className="flex bg-gray-100 p-1.5 rounded-2xl shadow-inner font-bold text-[10px]">
          <button onClick={() => setDoc('passport')} className={`flex-1 py-3 rounded-xl transition-all ${doc === 'passport' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-400'}`}>{t('passport')}</button>
          <button onClick={() => setDoc('arc')} className={`flex-1 py-3 rounded-xl transition-all ${doc === 'arc' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-400'}`}>{t('arc')}</button>
        </div>

        {doc === 'passport' && (
          <div className="flex gap-2 animate-in slide-in-from-top-2">
            <button onClick={() => setSim('data')} className={`flex-1 py-2.5 rounded-xl text-[9px] font-black border-2 ${sim === 'data' ? 'border-blue-600 bg-blue-50 text-blue-600' : 'border-gray-50 text-gray-300'}`}>Data Only</button>
            <button onClick={() => setSim('voice')} className={`flex-1 py-2.5 rounded-xl text-[9px] font-black border-2 ${sim === 'voice' ? 'border-blue-600 bg-blue-50 text-blue-600' : 'border-gray-50 text-gray-300'}`}>Voice + Data</button>
          </div>
        )}

        {/* Tariff Selector */}
        {(sim === 'data' || (doc === 'passport' && sim === 'voice')) && (
          <div className="space-y-3 animate-in fade-in zoom-in-95 duration-300">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Выберите тариф</p>
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 -mx-1 px-1">
              {(sim === 'data' ? DATA_ONLY_PLANS : VOICE_DATA_PLANS).map((p, i) => (
                <button
                  key={i}
                  onClick={() => sim === 'data' ? setPlanIdx(i) : setVPlanIdx(i)}
                  className={`shrink-0 px-5 py-3 rounded-2xl text-[11px] font-black border-2 transition-all shadow-sm ${(sim === 'data' ? planIdx : vPlanIdx) === i ? 'border-blue-600 bg-blue-600 text-white scale-105' : 'border-gray-100 bg-white text-gray-400 opacity-60'}`}
                >
                  {p.price} ₩
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Duration Selector for 859 Plan */}
        {doc === 'passport' && sim === 'voice' && vPlanIdx === 1 && (
          <div className="space-y-4 animate-in fade-in zoom-in-95 duration-300 border-t border-gray-50 pt-1">
            <div className="space-y-2">
              <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest pl-1">Выберите период оплаты</p>
              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 -mx-1 px-1">
                {[10, 15, 20, 25, 30].map((d) => (
                  <button
                    key={d}
                    onClick={() => setSelectedDays(d)}
                    className={`shrink-0 px-4 py-2.5 rounded-xl text-[10px] font-black border-2 transition-all shadow-sm ${selectedDays === d ? 'border-blue-600 bg-blue-50 text-blue-600' : 'border-gray-100 bg-white text-gray-300'}`}
                  >
                    {d} Дней
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest pl-1">Ваш день заезда (число месяца)</p>
              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 -mx-1 px-1">
                {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((d) => (
                  <button
                    key={d}
                    onClick={() => setArrivalDay(d)}
                    className={`shrink-0 w-10 h-10 flex items-center justify-center rounded-xl text-[10px] font-black border-2 transition-all ${arrivalDay === d ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-50 bg-white text-gray-300 hover:border-gray-200'}`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-[24px] border border-gray-100 flex gap-3 text-[11px] font-bold text-slate-700 leading-relaxed shadow-inner">
            <span className="shrink-0 text-lg">💡</span>
            <span>
              {doc === 'passport' && sim === 'data' && t('sim_passport_data')}
              {doc === 'passport' && sim === 'voice' && t('sim_passport_voice')}
              {doc === 'arc' && t('sim_arc_all')}
            </span>
          </div>

          {/* Detailed Tariff Specs */}
          <div className="bg-blue-600/5 rounded-[28px] p-5 border border-blue-50 space-y-3">
            <div className="flex justify-between items-end border-b border-blue-100/50 pb-3">
              <div>
                <p className="text-[10px] font-black text-blue-400 uppercase tracking-tighter mb-1">Total Package</p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black italic tracking-tighter text-blue-600">
                    {totalPrice} ₩
                  </span>
                  <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full font-bold">
                    {selectedPlan?.label || 'Best Value'}
                  </span>
                </div>
              </div>
              <div className="h-10 w-px bg-blue-100 mx-2" />
              <div className="text-right">
                <p className="text-[10px] font-black text-gray-400 uppercase leading-none mb-1">Period</p>
                <p className="text-sm font-black text-blue-900">
                  {doc === 'passport' && sim === 'voice' && vPlanIdx === 1 ? `${selectedDays} Days` : (doc === 'arc' ? 'Monthly' : '30 Days')}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-3 bg-white p-3 rounded-2xl shadow-sm">
                <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600"><Globe size={16} /></div>
                <div>
                  <p className="text-[9px] font-black text-gray-400 uppercase leading-none mb-1">Data</p>
                  <p className="text-xs font-black text-blue-900">
                    {doc === 'passport' && sim === 'voice' && vPlanIdx === 1 ? '100 GB (Base)' : displayData}
                  </p>
                  {doc === 'passport' && sim === 'voice' && vPlanIdx === 1 && (
                    <p className="text-[9px] font-bold text-blue-500 mt-0.5">При заезде: {displayData}</p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white p-3 rounded-2xl shadow-sm">
                <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600"><Zap size={16} /></div>
                <div>
                  <p className="text-[9px] font-black text-gray-400 uppercase leading-none mb-1">QoS (Speed)</p>
                  <p className="text-xs font-black text-blue-900">
                    {sim === 'data' || (doc === 'passport' && sim === 'voice') ? selectedPlan?.qos : '5 Mbps'}
                  </p>
                </div>
              </div>
            </div>

            {selectedPlan?.note && (
              <div className="mt-2 space-y-2">
                <div className="p-3 bg-blue-600/10 rounded-xl border border-blue-100 animate-in slide-in-from-top-1">
                  <p className="text-[10px] font-bold text-blue-800 leading-tight">
                    {vPlanIdx === 1 ? '📅 Режим роутера: ' : 'ℹ️ '}{selectedPlan.note}
                  </p>
                </div>

                {/* Transparency Note for late arrivals */}
                {doc === 'passport' && sim === 'voice' && vPlanIdx === 1 && arrivalDay > 15 && (
                  <div className="p-3 bg-green-50 rounded-xl border border-green-100 animate-in zoom-in-95">
                    <p className="text-[10px] font-black text-green-700 leading-tight">
                      🚀 Бонус: 1-го числа ваш трафик обновится до 100 Гб бесплатно!
                      Вы суммарно получите больше интернета.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          <button className="w-full bg-gray-900 text-white py-5 rounded-[24px] font-black text-xs uppercase shadow-xl active:scale-95 transition-all flex items-center justify-center gap-3 group">
            <Zap size={18} className="text-blue-400 group-hover:animate-bounce" />
            {t('order')}
          </button>
        </div>
      </div>
    </div>
  );
}

import { EXPERT_PROMPT, TRANSLATOR_PROMPT, AGENT_VERSION } from '../lib/agent-config';

function AssistantScreen({ t, uiLang, messages, setMessages, sessionCount, setSessionCount }: { t: any, uiLang: string, messages: any[], setMessages: any, sessionCount: number, setSessionCount: any }) {
  const [val, setVal] = useState('');
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => { scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight); }, [messages]);

  const handleSend = async (customVal?: string) => {
    const textToSend = customVal || val;
    if (!textToSend.trim() || loading || cooldown) return;
    if (sessionCount > 25) {
      setMessages((prev: any[]) => [...prev, { id: Date.now(), text: "⚠️ Системное уведомление: Вы превысили лимит запросов за сессию. Пожалуйста, подождите или обновите страницу для продолжения работы.", sender: 'bot' }]);
      return;
    }

    setMessages((prev: any[]) => [...prev, { id: Date.now(), text: textToSend, sender: 'user' }]);
    setVal('');
    setLoading(true);
    setSessionCount((prev: number) => prev + 1);

    const langNames: Record<string, string> = { ru: 'Russian', en: 'English', uz: 'Oʻzbekcha', kz: 'Қазақша' };
    const currentLangName = langNames[uiLang] || 'Russian';

    const system = EXPERT_PROMPT.replace(/\[USER_LANGUAGE\]/g, currentLangName) + `\nToday is ${new Date().toLocaleDateString()}.`;
    const res = await askGeminiAction(textToSend, system);

    setMessages((prev: any[]) => [...prev, { id: Date.now() + 1, text: res, sender: 'bot' }]);
    setLoading(false);

    // Cooldown 2s
    setCooldown(true);
    setTimeout(() => setCooldown(false), 2000);
  };

  return (
    <div className="flex flex-col h-full bg-gray-50/50">
      {/* Expert Badge */}
      <div className="bg-blue-600/5 px-4 py-2 flex items-center justify-between border-b border-blue-100">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
          <span className="text-[10px] font-black text-blue-800 uppercase tracking-widest">Korea Expert Agent</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[9px] text-blue-400 font-bold">{AGENT_VERSION}</span>
          <button
            onClick={() => {
              if (confirm('Очистить историю чата?')) {
                setMessages([{ id: 1, text: t('welcome'), sender: 'bot' }]);
                setSessionCount(0);
              }
            }}
            className="p-1.5 hover:bg-red-50 text-gray-300 hover:text-red-500 rounded-lg transition-colors"
            title="Очистить чат"
          >
            <Trash2 size={14} />
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="flex-grow space-y-4 p-4 pt-4 overflow-y-auto no-scrollbar">
        {messages.map(m => (
          <div key={m.id} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-4 rounded-[24px] text-[13px] font-medium leading-relaxed max-w-[90%] ${m.sender === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white border border-gray-100 shadow-sm rounded-tl-none font-sans prose prose-sm'}`}>
              {m.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex gap-2 items-center bg-white/50 w-fit px-4 py-2 rounded-full border border-blue-50 ml-2 animate-pulse">
            <Loader2 className="animate-spin text-blue-600" size={16} />
            <span className="text-[10px] font-bold text-blue-400 uppercase">Consulting...</span>
          </div>
        )}
      </div>

      <div className="p-4 space-y-2 pb-4 pt-2 border-t border-gray-100 bg-white/80 backdrop-blur-sm">
        <p className="text-[9px] text-gray-400 text-center italic mb-2 px-4 leading-tight">Expert AI: Для критических решений пользуйтесь 1345. Агент дает информационные советы.</p>
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          <button onClick={() => handleSend(t('explain_prompt'))} className="whitespace-nowrap bg-white border border-blue-100 text-blue-600 px-4 py-2 rounded-full text-[11px] font-bold active:scale-95 shadow-sm">🇰🇷 {t('explain_btn')}</button>
          <button onClick={() => handleSend(t('arc_info_prompt'))} className="whitespace-nowrap bg-white border border-gray-100 text-gray-600 px-4 py-2 rounded-full text-[11px] font-bold active:scale-95 shadow-sm">📝 {t('arc_info_btn')}</button>
        </div>
        <div className="flex gap-2">
          <input
            value={val}
            onChange={(e) => setVal(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            disabled={loading || cooldown}
            className={`flex-grow bg-white border border-gray-200 rounded-[28px] px-6 py-4 text-sm outline-none shadow-sm transition-all ${loading || cooldown ? 'opacity-50 grayscale cursor-not-allowed' : 'focus:border-blue-500'}`}
            placeholder={cooldown ? "Cooling down..." : "..."}
          />
          <button
            onClick={() => handleSend()}
            disabled={loading || cooldown}
            className={`bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all ${loading || cooldown ? 'opacity-50 scale-90 grayscale cursor-not-allowed' : 'active:scale-95'}`}
          >
            {cooldown ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
}

function TranslatorScreen({ t, uiLang }: { t: any, uiLang: string }) {
  const [source, setSource] = useState(uiLang);
  const [target, setTarget] = useState('ko');
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(false);

  const changeSource = (val: string) => {
    if (val === target) setTarget(source);
    setSource(val);
  };
  const changeTarget = (val: string) => {
    if (val === source) setSource(target);
    setTarget(val);
  };

  const handleTrans = async () => {
    if (!text.trim() || loading || cooldown) return;
    setLoading(true);

    const langNames: Record<string, string> = { ru: 'Russian', en: 'English', uz: 'Oʻzbekcha', kz: 'Қазақша', ko: 'Korean' };
    const sourceName = langNames[source] || 'Russian';
    const targetName = langNames[target] || 'Korean';
    const explanationLangCode = source !== 'ko' ? source : (target !== 'ko' ? target : uiLang);
    const explainName = langNames[explanationLangCode] || 'Russian';

    const system = TRANSLATOR_PROMPT
      .replace(/\[SOURCE_LANG\]/g, sourceName)
      .replace(/\[TARGET_LANG\]/g, targetName)
      .replace(/\[EXPLAIN_LANG\]/g, explainName);
    const res = await askGeminiAction(text, system);
    setResult(res);
    setLoading(false);

    // Cooldown 1s
    setCooldown(true);
    setTimeout(() => setCooldown(false), 1000);
  };

  return (
    <div className="p-4 space-y-4 animate-in slide-in-from-right-4">
      <div className="bg-white p-3 rounded-[32px] border border-gray-100 shadow-sm flex items-center justify-between">
        <select value={source} onChange={(e) => changeSource(e.target.value)} className="font-black text-blue-600 bg-transparent outline-none uppercase text-xs">
          {['ru', 'uz', 'kz', 'en', 'ko'].map(l => <option key={l} value={l}>{l.toUpperCase()}</option>)}
        </select>
        <button onClick={() => { let s = source; setSource(target); setTarget(s) }} className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 active:rotate-180 duration-500 transition-all">⇄</button>
        <select value={target} onChange={(e) => changeTarget(e.target.value)} className="font-black text-blue-600 bg-transparent outline-none uppercase text-xs">
          {['ru', 'uz', 'kz', 'en', 'ko'].map(l => <option key={l} value={l}>{l.toUpperCase()}</option>)}
        </select>
      </div>
      <div className="relative">
        <textarea value={text} onChange={(e) => setText(e.target.value)} className="w-full h-20 p-4 bg-white border border-gray-100 rounded-[32px] outline-none shadow-inner text-sm resize-none focus:border-blue-100 placeholder:text-gray-200" placeholder="..."></textarea>
        <button className="absolute bottom-3 right-3 bg-blue-600 text-white px-3 py-2 rounded-2xl font-black text-[9px] uppercase flex items-center gap-2 shadow-lg active:scale-95 transition-all"><Camera size={14} /> {t('scan')}</button>
      </div>
      <button
        onClick={handleTrans}
        disabled={loading || cooldown}
        className={`w-full py-5 bg-gray-900 text-white rounded-[24px] font-black uppercase tracking-widest shadow-xl flex justify-center items-center gap-2 transition-all ${loading || cooldown ? 'opacity-50 cursor-not-allowed' : 'active:scale-95'}`}
      >
        {loading ? <Loader2 className="animate-spin" /> : (cooldown ? "Wait..." : t('trans_btn'))}
      </button>
      {result && (
        <div className="p-8 bg-blue-50/80 border border-blue-100 rounded-[32px] animate-in zoom-in-95 shadow-inner min-h-[256px]">
          <p className="text-sm font-bold text-blue-900 leading-relaxed whitespace-pre-wrap">{result}</p>
          <button onClick={() => navigator.clipboard.writeText(result)} className="mt-4 text-[10px] font-black text-blue-400 uppercase flex items-center gap-2"><Copy size={14} /> Копировать</button>
        </div>
      )}
    </div>
  );
}

function ResourcesRegistry({ t, uiLang }: { t: any, uiLang: string }) {
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
            className={`whitespace-nowrap px-4 py-2 rounded-full text-[11px] font-black uppercase transition-all ${activeCat === 'all' ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-white border border-gray-100 text-gray-400'}`}
          >
            All
          </button>
          {RESOURCES_DATA.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-[11px] font-black uppercase transition-all ${activeCat === cat.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-white border border-gray-100 text-gray-400'}`}
            >
              {(cat.title as any)[uiLang] || cat.title.en}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-grow p-4 space-y-8 overflow-y-auto no-scrollbar">
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
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300">
              <Search size={32} />
            </div>
            <p className="text-gray-400 font-bold text-sm">Ничего не найдено</p>
          </div>
        )}
      </div>
    </div>
  );
}

function NavBtn({ active, label, icon, onClick }: any) {
  return (
    <button onClick={onClick} className={`flex flex-col items-center gap-1 transition-all ${active ? 'text-blue-600 scale-110 font-bold' : 'text-gray-300 grayscale opacity-60'}`}>
      <span className="text-2xl mb-1">{React.cloneElement(icon, { size: 24, strokeWidth: active ? 3 : 2 })}</span>
      <span className="text-[10px] uppercase tracking-tighter">{label}</span>
    </button>
  );
}