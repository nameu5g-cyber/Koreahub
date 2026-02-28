import { translations } from '../translations';

export function getTranslation(lang: string) {
    return (translations as any)[lang] || translations.ru;
}

export const LANG_LIST = [
    { code: 'ru', flag: '🇷🇺' },
    { code: 'kz', flag: '🇰🇿' },
    { code: 'uz', flag: '🇺🇿' },
    { code: 'en', flag: '🇺🇸' }
];
