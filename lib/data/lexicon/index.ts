import { LexiconTerm } from './types';
import { telecomData } from './telecom';
import { medicalData } from './medical';

// Агрегатор всех доменов
export const allTerms: LexiconTerm[] = [
    ...telecomData,
    ...medicalData,
    // Добавьте новые домены здесь
];

export * from './types';
export { telecomData } from './telecom';
export { medicalData } from './medical';
