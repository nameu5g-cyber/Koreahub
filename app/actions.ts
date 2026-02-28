'use server';

/**
 * Server Action to securely communicate with Gemini API.
 */
export async function askGeminiAction(prompt: string, system: string, history: any[] = []) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
        console.error("GEMINI_API_KEY is missing in environment variables.");
        return "Ошибка: Сервер не сконфигурирован (API ключ не найден).";
    }

    // Map history to Gemini format
    const contents = history.map(m => ({
        role: m.sender === 'bot' ? 'model' : 'user',
        parts: [{ text: m.text }]
    }));

    // Add current prompt
    contents.push({ role: 'user', parts: [{ text: prompt }] });

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents,
                system_instruction: { parts: [{ text: system }] }
            })
        });

        const data = await response.json();

        if (!response.ok) {
            console.error("Gemini API Error details:", data);
            return `Ошибка ИИ (${response.status}): ${data.error?.message || 'Неизвестная ошибка'}`;
        }

        if (!data.candidates || data.candidates.length === 0) {
            console.error("No candidates in Gemini response:", data);
            return "ИИ не смог сгенерировать ответ. Возможно, сработали фильтры безопасности.";
        }

        return data.candidates[0].content.parts[0].text;
    } catch (e: any) {
        console.error("Server Action Gemini Error:", e);
        return "Сбой на стороне сервера при запросе к ИИ. Пожалуйста, попробуйте позже.";
    }
}

/**
 * Server Action for image OCR using Gemini Vision API.
 * Accepts a base64-encoded image and returns the extracted text.
 */
export async function askGeminiVisionAction(imageBase64: string, mimeType: string): Promise<string> {
    const key = process.env.GEMINI_API_KEY;
    if (!key) return "Error: API key missing.";

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [
                        { inline_data: { mime_type: mimeType, data: imageBase64 } },
                        { text: "Extract ALL visible text from this image exactly as it appears. Output only the raw text, no explanations, no formatting." }
                    ]
                }]
            })
        });

        const data = await response.json();
        if (!response.ok || !data.candidates?.length) return "Could not extract text from image.";
        return data.candidates[0].content.parts[0].text;
    } catch (e: any) {
        console.error("Vision Action Error:", e);
        return "Error processing image.";
    }
}

/**
 * Комбинированный action: OCR + перевод в ОДНОМ запросе к Gemini Vision.
 * Вдвое быстрее двух последовательных вызовов.
 */
export async function askGeminiScanAndTranslateAction(
    imageBase64: string,
    mimeType: string,
    sourceLang: string,
    targetLang: string,
    explainLang: string
): Promise<{ extracted: string; translated: string }> {
    const key = process.env.GEMINI_API_KEY;
    if (!key) return { extracted: '', translated: 'Error: API key missing.' };

    const prompt = `You are an expert OCR and translation system. Do TWO tasks:

TASK 1 - OCR: Extract ALL visible text from this image exactly as it appears.
TASK 2 - TRANSLATE: Translate the extracted text from ${sourceLang} to ${targetLang}.
For each word/phrase with multiple meanings, list each on a new line.
Explanation language: ${explainLang}.
FORMAT: Word [Pronunciation] (${explainLang}: Brief context)
Add 1 short example under each variant.
NO markdown, NO asterisks.

Respond in this EXACT format:
ORIGINAL:
[extracted text]

TRANSLATION:
[translation]`;

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [
                        { inline_data: { mime_type: mimeType, data: imageBase64 } },
                        { text: prompt }
                    ]
                }]
            })
        });

        const data = await response.json();
        if (!response.ok || !data.candidates?.length) {
            console.error("Gemini API Error:", {
                status: response.status,
                statusText: response.statusText,
                data: JSON.stringify(data)
            });
            return { extracted: '', translated: 'Could not process image. (Error: ' + (data.error?.message || 'Empty response') + ')' };
        }

        const raw: string = data.candidates[0].content.parts[0].text;
        const origMatch = raw.match(/ORIGINAL:\s*([\s\S]*?)(?=TRANSLATION:|$)/i);
        const transMatch = raw.match(/TRANSLATION:\s*([\s\S]*)/i);

        return {
            extracted: origMatch?.[1]?.trim() || '',
            translated: transMatch?.[1]?.trim() || raw,
        };
    } catch (e: any) {
        console.error("Scan+Translate Action Error:", e);
        return { extracted: '', translated: 'Error processing image.' };
    }
}

