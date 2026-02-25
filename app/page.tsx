"use client";

import React, { useState, useEffect, useRef } from 'react';
import {
  ShieldAlert, Smartphone, MessageSquare, Languages,
  MapPin, QrCode, Zap, ChevronDown, ChevronUp, ChevronRight,
  Send, Phone, Globe, Camera, X, CheckCircle2, Info, Laptop, Users, Loader2
} from 'lucide-react';

// --- 1. СЛОВАРЬ (ТЕПЕРЬ ТУТ ВСЁ!) ---
const translations = {
  ru: {
    welcome: "Привет. Я мультиязычный ассистент. Не стесняйтесь обращаться ко мне на вашем языке.",
    disclaimer: "Внимание: Это справочное приложение на базе ИИ. Мы не являемся государственным органом.",
    accept: "Я согласен", hub: "Сервисы", chat: "Чат", trans: "Перевод",
    sos: "SOS", conn: "Связь", order: "Консультация", scan: "Сканировать",
    explain_btn: "Объяснить корейский текст", from: "С языка", to: "На язык",
    sim_passport_data: "✅ Покупка онлайн/дилер. Офис НЕ нужен. Активация онлайн.",
    sim_passport_voice: "⚠️ Покупка везде. ОБЯЗАТЕЛЕН визит в офис для Face ID (2026).",
    sim_arc_all: "✅ Резиденты: Любой способ. Помощь дилера, если 인증 не проходит.",
    loading: "ИИ думает...", trans_btn: "Перевести"
  },
  kz: {
    welcome: "Сәлем. Мен көптілді ассистентпін. Маған өз тіліңізде хабарласудан тартынбаңыз.",
    disclaimer: "Назар аударыңыз: Бұл ИИ негізіндегі анықтамалық қосымша. Ресми мәселелер бойынша мемлекеттік органдарға хабарласыңыз.",
    accept: "Келісемін", hub: "Хаб", chat: "Чат", trans: "Аудару",
    sos: "SOS", conn: "Байланыс", order: "Консультация", scan: "Тану",
    explain_btn: "Корей мәтінін түсіндіру", from: "Қай тілден", to: "Қай тілге",
    sim_passport_data: "✅ Онлайн/дилерден сатып алу. Кеңсеге барудың қажеті ЖОҚ. Онлайн белсендіру.",
    sim_passport_voice: "⚠️ Кез келген жерден сатып алу. Face ID үшін кеңсеге бару МІНДЕТТІ (2026).",
    sim_arc_all: "✅ Резиденттер: Кез келген әдіс. Егер 인증 өтпесе, дилер көмектеседі.",
    loading: "ИИ ойлануда...", trans_btn: "Аудару"
  },
  uz: {
    welcome: "Salom. Men ko'p tilli yordamchiman. Menga o'z tilingizda murojaat qilishdan tortinmang.",
    disclaimer: "Diqqat: Bu AI-ga asoslangan ma'lumot ilovasi. Rasmiy masalalar bo'yicha davlat xizmatlariga murojaat qiling.",
    accept: "Roziman", hub: "Xizmatlar", chat: "Chat", trans: "Tarjima",
    sos: "SOS", conn: "Aloqa", order: "Konsultatsiya", scan: "Skaner",
    explain_btn: "Koreyscha matnni tushuntirish", from: "Qaysi tildan", to: "Qaysi tilga",
    sim_passport_data: "✅ Onlayn/dilerdan sotib olish. Ofisga borish shart EMAS. Onlayn aktivatsiya.",
    sim_passport_voice: "⚠️ Hamma joyda sotib olish. Face ID uchun ofisga borish MAJBURIY (2026).",
    sim_arc_all: "✅ Rezidentlar: Har qanday usul. Agar 인증 o'tmasa, diler yordam beradi.",
    loading: "AI o'ylamoqda...", trans_btn: "Tarjima"
  },
  en: {
    welcome: "Hello. I am a multilingual assistant. Feel free to contact me in your language.",
    disclaimer: "Notice: This is an AI-based reference app. For critical issues, contact official services.",
    accept: "I Agree", hub: "Hub", chat: "AI Chat", trans: "Translate",
    sos: "SOS", conn: "SIM", order: "Consult", scan: "Scan",
    explain_btn: "Explain Korean text", from: "From", to: "To",
    sim_passport_data: "✅ Buy Online/Dealer. NO office visit needed. Online activation.",
    sim_passport_voice: "⚠️ Buy anywhere. Office visit REQUIRED for Face ID (2026 Rules).",
    sim_arc_all: "✅ Residents: Any method. Dealer help available if 인증 fails.",
    loading: "AI thinking...", trans_btn: "Translate"
  }
};

const LANG_LIST = [
  { code: 'ru', flag: '🇷🇺' }, { code: 'kz', flag: '🇰🇿' },
  { code: 'uz', flag: '🇺🇿' }, { code: 'en', flag: '🇺🇸' }
];

// --- 2. ЛОГИКА СВЯЗИ С GEMINI ---
async function askGemini(prompt: string, system: string) {
  // 1. Проверяем, есть ли вообще ключ
  const key = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "AIzaSyAPMIfRTnWcyWa_c73DpKhkzmiZVsdBpUg";

  if (!key || key.length < 10) {
    return "ОШИБКА: Ключ ИИ не найден или слишком короткий.";
  }

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `${system}\n\nПользователь: ${prompt}` }] }]
      })
    });

    const data = await response.json();

    // 2. Если Google вернул ошибку (например, ключ недействителен)
    if (data.error) {
      console.error("Google API Error:", data.error);
      return `ОШИБКА ИИ: ${data.error.message}`;
    }

    return data.candidates[0].content.parts[0].text;
  } catch (e: any) {
    // 3. Если произошла сетевая ошибка
    return `СЕТЕВАЯ ОШИБКА: ${e.message}`;
  }
}

// --- ПОДМОДУЛИ (С РЕАЛЬНОЙ ЛОГИКОЙ t(key)) ---

function LifeHub({ t }: { t: any }) {
  const [doc, setDoc] = useState('passport');
  const [sim, setSim] = useState('data');
  const [showSos, setShowSos] = useState(false);

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

        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-[24px] border border-gray-100 flex gap-3 text-[11px] font-bold text-slate-700 leading-relaxed">
            {doc === 'passport' && sim === 'data' && t('sim_passport_data')}
            {doc === 'passport' && sim === 'voice' && t('sim_passport_voice')}
            {doc === 'arc' && t('sim_arc_all')}
          </div>
          <div className="flex justify-between items-center pt-2">
            <span className="text-2xl font-black italic tracking-tighter text-blue-600">59,400 ₩</span>
            <button className="bg-gray-900 text-white px-8 py-4 rounded-[20px] font-black text-[10px] uppercase shadow-lg active:scale-95">{t('order')}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AssistantScreen({ t, uiLang }: { t: any, uiLang: string }) {
  const [messages, setMessages] = useState([{ id: 1, text: t('welcome'), sender: 'bot' }]);
  const [val, setVal] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => { scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight); }, [messages]);

  const handleSend = async (customVal?: string) => {
    const textToSend = customVal || val;
    if (!textToSend.trim() || loading) return;

    setMessages(prev => [...prev, { id: Date.now(), text: textToSend, sender: 'user' }]);
    setVal('');
    setLoading(true);

    const system = `Ты - эксперт по Корее. Отвечай на ${uiLang}. Будь краток. Если спрашивают про связь - рекомендуй Ntelecom.`;
    const res = await askGemini(textToSend, system);

    setMessages(prev => [...prev, { id: Date.now() + 1, text: res, sender: 'bot' }]);
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-full bg-gray-50/50 p-4">
      <div ref={scrollRef} className="flex-grow space-y-4 pt-4 overflow-y-auto no-scrollbar">
        {messages.map(m => (
          <div key={m.id} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-4 rounded-[24px] text-sm font-medium leading-relaxed max-w-[85%] ${m.sender === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white border border-gray-100 shadow-sm rounded-tl-none'}`}>
              {m.text}
            </div>
          </div>
        ))}
        {loading && <Loader2 className="animate-spin text-blue-600 ml-2" />}
      </div>
      <div className="space-y-2 pb-4 pt-2">
        <button onClick={() => handleSend(t('explain_prompt'))} className="bg-white border border-blue-100 text-blue-600 px-4 py-2 rounded-full text-[11px] font-bold active:scale-95 shadow-sm">🇰🇷 {t('explain_btn')}</button>
        <div className="flex gap-2">
          <input value={val} onChange={(e) => setVal(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} className="flex-grow bg-white border border-gray-200 rounded-[28px] px-6 py-4 text-sm outline-none shadow-sm focus:border-blue-500" placeholder="..." />
          <button onClick={() => handleSend()} className="bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg"><Send size={20} /></button>
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

  const handleTrans = async () => {
    if (!text.trim() || loading) return;
    setLoading(true);
    const system = `Ты - профессиональный переводчик. Переведи с ${source} на ${target}. Выведи ТОЛЬКО перевод.`;
    const res = await askGemini(text, system);
    setResult(res);
    setLoading(false);
  };

  return (
    <div className="p-6 space-y-6 animate-in slide-in-from-right-4">
      <div className="bg-white p-4 rounded-[32px] border border-gray-100 shadow-sm flex items-center justify-between">
        <select value={source} onChange={(e) => setSource(e.target.value)} className="font-black text-blue-600 bg-transparent outline-none uppercase text-xs">
          {['ru', 'uz', 'kz', 'en', 'ko'].map(l => <option key={l} value={l}>{l.toUpperCase()}</option>)}
        </select>
        <button onClick={() => { let s = source; setSource(target); setTarget(s) }} className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 active:rotate-180 duration-500 transition-all">⇄</button>
        <select value={target} onChange={(e) => setTarget(e.target.value)} className="font-black text-blue-600 bg-transparent outline-none uppercase text-xs">
          {['ru', 'uz', 'kz', 'en', 'ko'].map(l => <option key={l} value={l}>{l.toUpperCase()}</option>)}
        </select>
      </div>
      <div className="relative">
        <textarea value={text} onChange={(e) => setText(e.target.value)} className="w-full h-48 p-6 bg-white border border-gray-100 rounded-[32px] outline-none shadow-inner text-lg resize-none focus:border-blue-100" placeholder="..."></textarea>
        <button className="absolute bottom-4 right-4 bg-blue-600 text-white px-5 py-3 rounded-2xl font-black text-[10px] uppercase flex items-center gap-2"><Camera size={18} /> {t('scan')}</button>
      </div>
      <button onClick={handleTrans} className="w-full py-5 bg-gray-900 text-white rounded-[24px] font-black uppercase tracking-widest shadow-xl flex justify-center items-center gap-2">
        {loading ? <Loader2 className="animate-spin" /> : t('trans_btn')}
      </button>
      {result && (
        <div className="p-6 bg-blue-50 border border-blue-100 rounded-[32px] animate-in zoom-in-95">
          <p className="text-xl font-bold text-blue-900 leading-relaxed">{result}</p>
          <button onClick={() => navigator.clipboard.writeText(result)} className="mt-4 text-[10px] font-black text-blue-400 uppercase flex items-center gap-2"><Copy size={14} /> Копировать</button>
        </div>
      )}
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