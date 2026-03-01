import { LexiconTerm } from './types';

export const medicalData: LexiconTerm[] = [
    {
        id: 'med_1',
        domain: 'medical',
        category: {
            ru: 'Страхование',
            en: 'Insurance',
            uz: 'Sug\'urta',
            kk: 'Сақтандыру'
        },
        termKo: '건강보험 (Geon-gang-bo-heom)',
        termTrans: {
            ru: 'Государственная медицинская страховка',
            en: 'National Health Insurance',
            uz: 'Davlat tibbiy sug\'urtasi',
            kk: 'Мемлекеттік медициналық сақтандыру'
        },
        meaning: {
            ru: 'Обязательная страховка для всех жителей Кореи (включая иностранцев через 6 месяцев). Покрывает до 70-90% стоимости лечения.',
            en: 'Mandatory health insurance for all residents. Covers 70-90% of medical costs.',
            uz: 'Barcha aholi uchun majburiy sug\'urta. Davolanish xarajatlarining 70-90% qismini qoplaydi.',
            kk: 'Барлық тұрғындар үшін міндетті сақтандыру. Емдеу шығындарының 70-90% қамтиды.'
        },
        riskLevel: 'safe',
        riskLabel: {
            ru: 'Важно оформить',
            en: 'Must have',
            uz: 'Rasmiylashtirish muhim',
            kk: 'Тіркелу маңызды'
        }
    }
];
