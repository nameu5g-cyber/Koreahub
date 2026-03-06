import attractionsConfig from './attractions.json';
import generalConfig from './general.json';
import visaConfig from './visa.json';
import telecomConfig from './telecom.json';
import medicalConfig from './medical.json';
import jobsConfig from './jobs.json';
import foodConfig from './food.json';
import servicesConfig from './services.json';
import financeConfig from './finance.json';
import { VerticalConfig, RegistryEntity } from './types';

// Import data from L3 JSON files
import visaData from './data/visa.json';
import telecomData from './data/telecom.json';
import attractionsData from './data/attractions.json';
import medicalData from './data/medical.json';
import jobsData from './data/jobs.json';
import foodData from './data/food.json';
import servicesData from './data/services.json';
import financeData from './data/finance.json';
import generalData from './data/general.json';

export const VERTICALS: Record<string, VerticalConfig> = {
    general: { ...generalConfig, icon: 'Info' } as any,
    visa: { ...visaConfig, icon: 'Landmark' } as any,
    telecom: { ...telecomConfig, icon: 'Phone' } as any,
    medical: medicalConfig as any,
    jobs: jobsConfig as any,
    attractions: attractionsConfig as any,
    food: { ...foodConfig, icon: 'Store' } as any,
    services: { ...servicesConfig, icon: 'Globe' } as any,
    finance: { ...financeConfig, icon: 'Landmark' } as any,
};

export const REGISTRY_DATA: RegistryEntity[] = [
    ...(visaData as RegistryEntity[]),
    ...(telecomData as RegistryEntity[]),
    ...(attractionsData as RegistryEntity[]),
    ...(medicalData as RegistryEntity[]),
    ...(jobsData as RegistryEntity[]),
    ...(foodData as RegistryEntity[]),
    ...(servicesData as RegistryEntity[]),
    ...(financeData as RegistryEntity[]),
    ...(generalData as RegistryEntity[]),
];

// For backward compatibility while refactoring
export const MOCK_ENTITIES = REGISTRY_DATA;
