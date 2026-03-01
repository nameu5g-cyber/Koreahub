export type DomainType = 'telecom' | 'medical' | 'legal' | 'all';

export interface LexiconTerm {
    id: string;
    domain: DomainType;
    category: {
        ru: string;
        en: string;
        uz: string;
        kk: string;
    };
    termKo: string;
    termTrans: {
        ru: string;
        en: string;
        uz: string;
        kk: string;
    };
    meaning: {
        ru: string;
        en: string;
        uz: string;
        kk: string;
    };
    riskLevel: 'safe' | 'neutral' | 'warning' | 'danger' | 'info';
    riskLabel: {
        ru: string;
        en: string;
        uz: string;
        kk: string;
    };
}
