"use client";

import React, { useState, useRef, useCallback } from 'react';
import { Camera, Copy, Loader2, ArrowLeftRight, X } from 'lucide-react';
import { askGeminiAction, askGeminiVisionAction } from '../actions';
import { TRANSLATOR_PROMPT } from '../../lib/agent-config';

interface TranslatorScreenProps {
    t: (key: string) => string;
    uiLang: string;
}

type ScanStatus = 'idle' | 'ocr' | 'translating';

/**
 * Helper to compress and resize image using Canvas
 */
const resizeImage = (file: File, maxWidth = 1024, quality = 0.7): Promise<{ base64: string; mimeType: string }> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;

                if (width > height) {
                    if (width > maxWidth) {
                        height *= maxWidth / width;
                        width = maxWidth;
                    }
                } else {
                    if (height > maxWidth) {
                        width *= maxWidth / height;
                        height = maxWidth;
                    }
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx?.drawImage(img, 0, 0, width, height);

                const dataUrl = canvas.toDataURL('image/jpeg', quality);
                const [meta, base64] = dataUrl.split(',');
                const mimeType = meta.match(/:(.*?);/)?.[1] || 'image/jpeg';
                resolve({ base64, mimeType });
            };
            img.onerror = reject;
            img.src = e.target?.result as string;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};

export function TranslatorScreen({ t, uiLang }: TranslatorScreenProps) {
    const [source, setSource] = useState(uiLang);
    const [target, setTarget] = useState('ko');
    const [text, setText] = useState('');
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);
    const [scanStatus, setScanStatus] = useState<ScanStatus>('idle');
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [cooldown, setCooldown] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const changeSource = (val: string) => {
        if (val === target) setTarget(source);
        setSource(val);
    };
    const changeTarget = (val: string) => {
        if (val === source) setSource(target);
        setTarget(val);
    };

    // ─── Shared translate logic (reusable) ──────────────────────────────────
    const runTranslate = useCallback(async (inputText: string, src: string, tgt: string) => {
        if (!inputText.trim()) return;
        setLoading(true);

        const langNames: Record<string, string> = { ru: 'Russian', en: 'English', uz: 'Oʻzbekcha', kz: 'Қазақша', ko: 'Korean' };
        const sourceName = langNames[src] || 'Russian';
        const targetName = langNames[tgt] || 'Korean';
        const explanationLangCode = src !== 'ko' ? src : (tgt !== 'ko' ? tgt : uiLang);
        const explainName = langNames[explanationLangCode] || 'Russian';

        const system = TRANSLATOR_PROMPT
            .replace(/\[SOURCE_LANG\]/g, sourceName)
            .replace(/\[TARGET_LANG\]/g, targetName)
            .replace(/\[EXPLAIN_LANG\]/g, explainName);

        try {
            const res = await askGeminiAction(inputText, system);
            setResult(res);
        } catch {
            setResult("Error translation.");
        } finally {
            setLoading(false);
            setCooldown(true);
            setTimeout(() => setCooldown(false), 1000);
        }
    }, [uiLang]);

    // ─── Manual translate button ─────────────────────────────────────────────
    const handleTrans = async () => {
        if (!text.trim() || loading || cooldown) return;
        await runTranslate(text, source, target);
    };

    // ─── Scan: OCR ONLY ────────────────────────────────────────────────────
    const handleScan = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const objectUrl = URL.createObjectURL(file);
        setPreviewUrl(objectUrl);
        setScanStatus('ocr');
        setResult(''); // Clear previous results
        setText('');   // Clear previous text

        try {
            // Step 1: Client-side compression & resizing
            const { base64, mimeType } = await resizeImage(file);

            // Step 2: OCR Request (no translation yet)
            const extracted = await askGeminiVisionAction(base64, mimeType);

            setText(extracted);
            // We do NOT call translation here anymore, 
            // the user will edit the text and click "Translate" manually.
        } catch (err) {
            console.error("Scan error:", err);
            setResult("Error reading text from image.");
        } finally {
            setScanStatus('idle');
        }

        e.target.value = '';
    };

    const clearPreview = () => {
        if (previewUrl) URL.revokeObjectURL(previewUrl);
        setPreviewUrl(null);
        setText('');
        setResult('');
        setScanStatus('idle');
    };

    const scanning = scanStatus !== 'idle';

    return (
        <div className="h-full overflow-y-auto no-scrollbar p-5 space-y-4 animate-in slide-in-from-right-4 pb-12">

            {/* Lang switcher */}
            <div className="bg-white p-2 rounded-[32px] border border-gray-100 shadow-sm flex items-center justify-between">
                <select
                    value={source}
                    onChange={(e) => changeSource(e.target.value)}
                    className="flex-1 font-black text-blue-600 bg-transparent outline-none uppercase text-xs text-center cursor-pointer"
                >
                    {['ru', 'uz', 'kz', 'en', 'ko'].map(l => <option key={l} value={l}>{l.toUpperCase()}</option>)}
                </select>

                <button
                    onClick={() => { const s = source; setSource(target); setTarget(s); }}
                    className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 active:rotate-180 duration-500 transition-all shadow-inner"
                >
                    <ArrowLeftRight size={18} />
                </button>

                <select
                    value={target}
                    onChange={(e) => changeTarget(e.target.value)}
                    className="flex-1 font-black text-blue-600 bg-transparent outline-none uppercase text-xs text-center cursor-pointer"
                >
                    {['ru', 'uz', 'kz', 'en', 'ko'].map(l => <option key={l} value={l}>{l.toUpperCase()}</option>)}
                </select>
            </div>

            {/* Image preview thumbnail */}
            {previewUrl && (
                <div className="relative animate-in zoom-in-95">
                    <img
                        src={previewUrl}
                        alt="scan preview"
                        className="w-full h-36 object-cover rounded-[24px] border border-gray-100 shadow-sm"
                    />
                    {/* Scan progress overlay */}
                    {scanning && (
                        <div className="absolute inset-0 bg-black/40 rounded-[24px] flex flex-col items-center justify-center gap-2">
                            <Loader2 size={24} className="animate-spin text-white" />
                            <span className="text-white text-[10px] font-black uppercase tracking-widest">
                                {scanStatus === 'ocr' ? t('scan_reading') || 'Читаю текст...' : t('scan_translating') || 'Перевожу...'}
                            </span>
                        </div>
                    )}
                    {/* Close button */}
                    {!scanning && (
                        <button
                            onClick={clearPreview}
                            className="absolute top-2 right-2 w-7 h-7 bg-gray-900/70 rounded-full flex items-center justify-center text-white active:scale-90 transition-all"
                        >
                            <X size={14} />
                        </button>
                    )}
                </div>
            )}

            {/* Text input area */}
            <div className="relative group">
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    disabled={scanning}
                    className={`w-full h-32 p-6 bg-white border border-gray-100 rounded-[32px] outline-none shadow-sm text-sm resize-none focus:border-blue-500 transition-all font-medium ${scanning ? 'opacity-50' : ''}`}
                    placeholder={t('trans_placeholder')}
                />
                {/* Hidden file input */}
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    capture="environment"
                    onChange={handleScan}
                    className="hidden"
                />
                <button
                    onClick={() => fileInputRef.current?.click()}
                    disabled={scanning}
                    className={`absolute bottom-4 right-4 bg-gray-900 text-white px-4 py-2.5 rounded-2xl font-black text-[9px] uppercase flex items-center gap-2 shadow-lg active:scale-95 transition-all ${scanning ? 'opacity-60 cursor-not-allowed' : ''}`}
                >
                    {scanning
                        ? <Loader2 size={14} className="animate-spin text-blue-400" />
                        : <Camera size={14} className="text-blue-400" />
                    }
                    {scanning
                        ? (scanStatus === 'ocr' ? (t('scan_reading') || '...OCR') : (t('scan_translating') || '...'))
                        : t('scan')
                    }
                </button>
            </div>

            {/* Manual translate button */}
            <button
                onClick={handleTrans}
                disabled={loading || cooldown || scanning}
                className={`w-full py-5 bg-blue-600 text-white rounded-[24px] font-black uppercase tracking-widest shadow-xl shadow-blue-100 flex justify-center items-center gap-2 transition-all ${loading || cooldown || scanning ? 'opacity-50 cursor-not-allowed' : 'active:scale-95'}`}
            >
                {loading ? <Loader2 className="animate-spin" size={20} /> : (cooldown ? t('trans_wait') : t('trans_btn'))}
            </button>

            {/* Translation result */}
            {result && (
                <div className="p-8 bg-blue-50/50 border border-blue-100 rounded-[40px] animate-in zoom-in-95 shadow-inner min-h-[200px] relative">
                    <p className="text-sm font-bold text-blue-900 leading-relaxed whitespace-pre-wrap">{result}</p>
                    <button
                        onClick={() => navigator.clipboard.writeText(result)}
                        className="mt-6 text-[10px] font-black text-blue-400 hover:text-blue-600 uppercase flex items-center gap-2 transition-colors"
                    >
                        <Copy size={14} /> {t('trans_copy')}
                    </button>
                </div>
            )}
        </div>
    );
}
