export const LIFE_HUB_DATA = {
    doc_types: [
        { id: 'passport', icon: '🎫' },
        { id: 'arc', icon: '💳' }
    ],
    sim_categories: [
        { id: 'data', icon: '📶' },
        { id: 'voice', icon: '📞' }
    ]
};

export const PLANS_DATA = {
    data_only: [
        { name: 'Data 10GB+ (128k)', price: '15,000 KRW', note: 'sim_note_500mb', provider: 'KT/U+' },
        { name: 'Data 20GB+ (128k)', price: '20,000 KRW', note: 'sim_note_15gb', provider: 'KT/U+' },
        { name: 'Data 30GB+ (128k)', price: '25,000 KRW', note: 'sim_note_30gb', provider: 'KT/U+' },
        { name: 'Data 50GB+ (128k)', price: '33,000 KRW', note: 'sim_note_arc_basic', provider: 'KT/U+' },
        { name: '90GB (3GB/Day+128k)', price: '44,000 KRW', note: 'sim_note_100gb', provider: 'KT/U+' },
        { name: '30GB (1GB/Day+5M)', price: '54,000 KRW', note: '1GB Daily + 5Mbps Unlimited', provider: 'KT/U+' },
    ],
    voice_passport: [
        { name: 'Ntelecom 396 (10.3GB+3M)', price: '39,600 KRW', note: 'sim_note_396', provider: 'KT' },
        { name: 'Ntelecom 859 (100GB+5M)', price: '85,900 KRW', note: 'sim_note_859', provider: 'KT' },
    ],
    voice_arc: [
        { name: 'Ntelecom 396 (10.3GB+3M)', price: '39,600 KRW', note: 'sim_note_396', provider: 'KT/U+' },
        { name: 'Ntelecom 459 (20.3GB+3M)', price: '45,900 KRW', note: '20.3 GB + Unlimited', provider: 'KT/U+' },
        { name: 'Ntelecom 770 (100GB+5M)', price: '77,000 KRW', note: 'sim_note_arc_super', provider: 'KT/U+' },
        { name: 'Ntelecom 859 (100GB+5M)', price: '85,900 KRW', note: 'sim_note_859', provider: 'KT' },
    ]
};
