"use client";

import React, { useState } from 'react';
import {
  ShieldAlert, Smartphone, MessageSquare, Languages,
  MapPin, QrCode, Zap, ChevronDown, ChevronUp, ChevronRight,
  Send, Phone, Globe, Camera, X, CheckCircle2, Info, HeartHandshake, Laptop, Users
} from 'lucide-react';

// --- ДАННЫЕ ЛОКАЛИЗАЦИИ ---
const translations = {
  ru: {
    welcome: "Привет. Я мультиязычный ассистент. Не стесняйтесь обращаться ко мне на вашем языке.",
    disclaimer: "Внимание: Это справочное приложение на базе ИИ. Мы не являемся государственным органом. По критическим вопросам всегда обращайтесь в официальные службы (1345, 119).",
    accept: "Я согласен", hub: "Сервисы", chat: "Чат", trans: "Перевод",
    sos: "SOS", conn: "Связь", order: "Консультация", scan: "Сканировать",
    explain_btn: "Объяснить корейский текст", explain_prompt: "Объясни, что здесь написано: ",
    from: "С языка", to: "На язык"
  },
  kz: {
    welcome: "Сәлем. Мен көптілді ассистентпін. Маған өз тіліңізде хабарласудан тартынбаңыз.",
    disclaimer: "Назар аударыңыз: Бұл ИИ негізіндегі анықтамалық қосымша. Ресми мәселелер бойынша 1345 немесе 119-ға хабарласыңыз.",
    accept: "Келісемін", hub: "Хаб", chat: "Чат", trans: "Аудару",
    sos: "SOS Көмек", conn: "Байланыс", order: "Тапсырыс", scan: "Тану",
    explain_btn: "Корей мәтінін түсіндіру", explain_prompt: "Мұнда не жазылғанын түсіндіріңіз: ",
    from: "Қай тілден", to: "Қай тілге"
  },
  uz: {
    welcome: "Salom. Men ko'p tilli yordamchiman. Menga o'z tilingizda murojaat qilishdan tortinmang.",
    disclaimer: "Diqqat: Bu AI-ga asoslangan ma'lumot ilovasi. Rasmiy masalalar bo'yicha davlat xizmatlariga murojaat qiling (1345, 119).",
    accept: "Roziman", hub: "Xizmatlar", chat: "AI Chat", trans: "Tarjima",
    sos: "SOS", conn: "Aloqa", order: "Buyurtma", scan: "Skaner",
    explain_btn: "Koreyscha matnni tushuntirish", explain_prompt: "Bu yerda nima yozilganini tushuntiring: ",
    from: "Qaysi tildan", to: "Qaysi tilga"
  },
  en: {
    welcome: "Hello. I am a multilingual assistant. Feel free to contact me in your language.",
    disclaimer: "Notice: This is an AI-based reference app. For critical issues, always contact official services (1345, 119).",
    accept: "I Agree", hub: "Services", chat: "AI Chat", trans: "Translate",
    sos: "SOS Help", conn: "SIM", order: "Consult", scan: "Scan",
    explain_btn: "Explain Korean text", explain_prompt: "Explain what is written here: ",
    from: "From", to: "To"
  }
};

const LANG_LIST = [
  { code: 'ru', flag: '🇷🇺' }, { code: 'kz', flag: '🇰🇿' },
  { code: 'uz', flag: '🇺🇿' }, { code: 'en', flag: '🇺🇸' }
];

export default function KoreaHub() {
  const [hasAccepted, setHasAccepted] = useState(false);
  const [uiLang, setUiLang] = useState('ru');
  const [activeTab, setActiveTab] = useState('hub');
  const [isLangOpen, setIsLangOpen] = useState(false);

  const t = (key: string) => (translations as any)[uiLang]?.[key] || (translations as any)['en']?.[key] || key;

  if (!hasAccepted) {
    return (
      <div className="fixed inset-0 bg-white z-[999] flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-white to-blue-50">
        <ShieldAlert size={60} className="text-blue-600 mb-6" />
        <h1 className="text-3xl font-black text-blue-600 mb-4 italic tracking-tighter">KoreaHub</h1>
        <p className="text-sm text-gray-500 mb-10 leading-relaxed max-w-sm">{t('disclaimer')}</p>
        <button onClick={() => setHasAccepted(true)} className="w-full py-5 bg-blue-600 text-white rounded-[28px] font-bold shadow-xl active:scale-95 transition-all">
          {t('accept')}
        </button>
      </div>
    );
  }

  return (
    <div className="flex justify-center min-h-screen bg-[#F2F4F7]">
      <div className="w-full max-w-md bg-white shadow-2xl flex flex-col h-screen overflow-hidden relative border-x border-gray-200">

        {/* HEADER */}
        <header className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-[100]">
          <div className="flex flex-col">
            <h1 className="text-xl font-extrabold text-blue-600 italic">KoreaHub</h1>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">AI Active</span>
            </div>
          </div>
          <div className="relative">
            <button onClick={() => setIsLangOpen(!isLangOpen)} className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-xl border transition-all active:scale-95">
              <span className="text-lg leading-none">{LANG_LIST.find(l => l.code === uiLang)?.flag}</span>
              <ChevronDown size={14} className={`text-gray-400 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
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

        {/* CONTENT */}
        <main className="flex-grow overflow-y-auto no-scrollbar bg-gray-50/30 pb-32" onClick={() => setIsLangOpen(false)}>
          {activeTab === 'hub' && <LifeHub t={t} />}
          {activeTab === 'chat' && <AssistantModule t={t} />}
          {activeTab === 'trans' && <TranslatorModule t={t} uiLang={uiLang} />}
        </main>

        {/* NAVIGATION */}
        <nav className="fixed bottom-0 w-full max-w-md bg-white/95 backdrop-blur-md border-t border-gray-100 px-6 py-4 pb-8 flex justify-between z-50">
          <NavBtn active={activeTab === 'hub'} onClick={() => setActiveTab('hub')} label={t('hub')} icon={<Smartphone />} />
          <NavBtn active={activeTab === 'chat'} onClick={() => setActiveTab('chat')} label={t('chat')} icon={<MessageSquare />} />
          <NavBtn active={activeTab === 'trans'} onClick={() => setActiveTab('trans')} label={t('trans')} icon={<Languages />} />
        </nav>
      </div>
    </div>
  );
}

// --- ПОДМОДУЛИ ---

function NavBtn({ active, label, icon, onClick }: any) {
  return (
    <button onClick={onClick} className={`flex flex-col items-center gap-1 transition-all ${active ? 'text-blue-600 scale-110 font-bold' : 'text-gray-300 grayscale opacity-60'}`}>
      <span className="text-2xl mb-1">{React.cloneElement(icon, { size: 24, strokeWidth: active ? 3 : 2 })}</span>
      <span className="text-[10px] font-black uppercase tracking-tighter">{label}</span>
    </button>
  );
}

function LifeHub({ t }: { t: any }) {
  const [doc, setDoc] = useState('passport');
  const [sim, setSim] = useState('data');
  const [showSos, setShowSos] = useState(false);

  if (showSos) return (
    <div className="p-6 space-y-4 animate-in slide-in-from-bottom-8">
      <div className="flex justify-between items-center mb-2"><h2 className="text-xl font-black uppercase tracking-widest text-red-600">SOS</h2><button onClick={() => setShowSos(false)} className="p-2 bg-gray-100 rounded-full">✕</button></div>
      {[{ n: '112', l: 'Полиция', i: '👮' }, { n: '119', l: 'Скорая', i: '🚑' }, { n: '1345', l: 'Иммиграция', i: '🛂' }].map(s => (
        <a key={s.n} href={`tel:${s.n}`} className="flex items-center justify-between p-6 bg-white border rounded-[32px] shadow-sm active:bg-red-50 transition-all">
          <div className="flex items-center gap-4"><span className="text-3xl">{s.i}</span><span className="font-bold text-sm">{s.l}</span></div>
          <span className="text-xl font-black text-blue-600 tracking-tighter">{s.n}</span>
        </a>
      ))}
    </div>
  );

  return (
    <div className="p-6 space-y-6 animate-in fade-in">
      <button onClick={() => setShowSos(true)} className="w-full bg-red-50 border-2 border-red-100 p-5 rounded-[32px] flex items-center justify-between active:scale-95 transition-all shadow-sm">
        <div className="flex items-center gap-4 text-left"><span className="text-3xl animate-bounce" style={{ animationDuration: '3s' }}>🚨</span><div><p className="text-[10px] font-black text-red-500 uppercase tracking-widest leading-none mb-1">Emergency</p><p className="text-lg font-black text-red-600 leading-tight">SOS Помощь</p></div></div>
        <div className="bg-red-600 text-white rounded-full p-2.5 shadow-lg shadow-red-200"><Phone size={20} /></div>
      </button>

      <div className="bg-white p-6 rounded-[32px] border-2 border-blue-600 shadow-xl space-y-6 relative overflow-hidden">
        <div className="flex bg-gray-100 p-1 rounded-2xl shadow-inner font-bold text-[10px]">
          <button onClick={() => setDoc('passport')} className={`flex-1 py-3 rounded-xl transition-all ${doc === 'passport' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-400'}`}>PASSPORT</button>
          <button onClick={() => setDoc('arc')} className={`flex-1 py-3 rounded-xl transition-all ${doc === 'arc' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-400'}`}>ARC (ID CARD)</button>
        </div>

        {doc === 'passport' && (
          <div className="flex gap-2">
            <button onClick={() => setSim('data')} className={`flex-1 py-2.5 rounded-xl text-[9px] font-black uppercase border-2 ${sim === 'data' ? 'border-blue-600 bg-blue-50 text-blue-600' : 'border-gray-50 text-gray-300'}`}>Data Only</button>
            <button onClick={() => setSim('voice')} className={`flex-1 py-2.5 rounded-xl text-[9px] font-black uppercase border-2 ${sim === 'voice' ? 'border-blue-600 bg-blue-50 text-blue-600' : 'border-gray-50 text-gray-300'}`}>Voice + Data</button>
          </div>
        )}

        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-[24px] border border-gray-100 flex gap-3">
            {doc === 'arc' || sim === 'data' ? <CheckCircle2 className="text-green-500 shrink-0" size={18} /> : <Info className="text-amber-500 shrink-0" size={18} />}
            <p className="text-[11px] font-bold text-slate-700 leading-snug">
              {doc === 'passport' && sim === 'data' && "✅ Покупка онлайн/дилер. Офис НЕ нужен. Активация онлайн."}
              {doc === 'passport' && sim === 'voice' && "⚠️ Обязательный визит в офис для Face ID по паспорту (Закон 2026)."}
              {doc === 'arc' && "✅ Резиденты: Любой способ. Помощь дилера, если 인증 не проходит."}
            </p>
          </div>
          <div className="grid gap-2">
            {doc === 'arc' && (
              <>
                <div className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-2xl text-[10px] font-bold"><div className="flex items-center gap-2 text-blue-600"><Laptop size={14} /> Платформа</div><ChevronRight size={14} className="text-gray-200" /></div>
                <div className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-2xl text-[10px] font-bold"><div className="flex items-center gap-2 text-purple-600"><Users size={14} /> Помощь дилера</div><ChevronRight size={14} className="text-gray-200" /></div>
              </>
            )}
          </div>
          <div className="flex justify-between items-center pt-2">
            <span className="text-2xl font-black italic tracking-tighter text-blue-600 leading-none">59,400 ₩</span>
            <button className="bg-gray-900 text-white px-6 py-4 rounded-[20px] font-black text-[10px] uppercase tracking-widest shadow-lg active:scale-95 transition-all italic">{t('order')}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AssistantModule({ t }: { t: any }) {
  const [val, setVal] = useState('');
  return (
    <div className="flex flex-col h-full bg-gray-50/50 p-4">
      <div className="flex-grow flex flex-col justify-end pb-4 space-y-4">
        <div className="flex items-start gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px] font-black shadow-md shrink-0">AI</div>
          <div className="bg-white p-5 rounded-[28px] rounded-tl-none border border-gray-100 shadow-sm text-sm font-medium leading-relaxed max-w-[90%]">
            {t('welcome')}
          </div>
        </div>
        <button onClick={() => setVal(t('explain_prompt'))} className="ml-10 w-fit bg-white border border-blue-100 text-blue-600 px-4 py-2 rounded-full text-[11px] font-bold shadow-sm active:scale-95 transition-all">🇰🇷 {t('explain_btn')}</button>
      </div>
      <div className="pb-4 flex gap-2 pt-2">
        <input value={val} onChange={(e) => setVal(e.target.value)} className="flex-grow bg-white border border-gray-200 rounded-[28px] px-6 py-4 text-sm outline-none shadow-sm focus:border-blue-500 transition-all" placeholder="..." />
        <button className="bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shrink-0 transition-all active:scale-90"><Send size={20} /></button>
      </div>
    </div>
  );
}

function TranslatorModule({ t, uiLang }: { t: any, uiLang: string }) {
  return (
    <div className="p-6 space-y-6 animate-in slide-in-from-right-4 duration-500">
      <div className="bg-white p-4 rounded-[32px] border border-gray-100 shadow-sm flex items-center justify-between">
        <span className="font-black text-blue-600 uppercase text-sm px-4">{uiLang}</span>
        <button className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 active:rotate-180 transition-all duration-500"><Languages size={20} /></button>
        <span className="font-black text-blue-600 uppercase text-sm px-4">KO</span>
      </div>
      <div className="relative group">
        <textarea className="w-full h-52 p-6 bg-white border border-gray-100 rounded-[32px] outline-none shadow-inner text-lg resize-none focus:border-blue-100 transition-all" placeholder="..."></textarea>
        <button className="absolute bottom-4 right-4 bg-blue-600 text-white px-5 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg flex items-center gap-2 active:scale-90 transition-all"><Camera size={18} /> {t('scan')}</button>
      </div>
      <button className="w-full py-5 bg-gray-900 text-white rounded-[24px] font-black text-lg uppercase tracking-widest shadow-xl active:scale-95 transition-all italic">{t('trans')}</button>
    </div>
  );
}