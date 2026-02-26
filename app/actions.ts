'use server';

/**
 * Server Action to securely communicate with Gemini API.
 */
export async function askGeminiAction(prompt: string, system: string) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
        console.error("GEMINI_API_KEY is missing in environment variables.");
        return "Ошибка: Сервер не сконфигурирован (API ключ не найден).";
    }

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
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
