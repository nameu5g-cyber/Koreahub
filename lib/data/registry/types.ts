export type FieldType =
    | 'string'
    | 'translated_string'
    | 'translated_text'
    | 'multiselect'
    | 'select'
    | 'boolean'
    | 'geopoint'
    | 'url'
    | 'phone'
    | 'email'
    | 'date'
    | 'timestamp'
    | 'number'
    | 'salary_range'
    | 'korean_schedule';

export interface FieldConfig {
    code: string;
    type: FieldType;
    required?: boolean;
    showInCard?: boolean;
    showInDetail?: boolean;
    filterable?: boolean;
    highlight?: boolean;
    highlightIf?: any;
    label?: string | Record<string, string>;
    options?: string[];
    display?: 'chips' | 'flags' | 'default';
    callable?: boolean;
    default?: any;
    currency?: string;
    period?: string;
    format?: string;
}

export interface VerticalConfig {
    code: string;
    name: Record<string, string>;
    icon: string;
    color: string;
    entityName: Record<string, string>;
    koreaSpecific?: Record<string, any>;
    fields: FieldConfig[];
    filters: string[];
    sortOptions: { code: string; label: string; default?: boolean }[];
    actions: string[];
    infoArticles?: { slug: string; title: string; icon: string }[];
}

export interface RegistryEntity {
    id: string;
    verticalCode: string; // medical, jobs, etc.
    data: Record<string, any>;
}
