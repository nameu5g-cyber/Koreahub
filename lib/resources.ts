export type ResourceItem = {
    name: string;
    desc: Record<string, string>;
    langs: string[]; // ['ru', 'en', 'ko', 'uz', 'kz']
    link?: string;
    phone?: string;
    location?: string;
};

export type ResourceCategory = {
    id: string;
    title: Record<string, string>;
    items: ResourceItem[];
};

export const RESOURCES_DATA: ResourceCategory[] = [
    {
        id: 'gov',
        title: { ru: 'Гос. порталы', en: 'Gov Portals' },
        items: [
            {
                name: 'HiKorea',
                desc: {
                    ru: 'Главный портал иммиграции (ARC, визы)',
                    en: 'Main immigration portal (ARC, visas, extensions)'
                },
                langs: ['ru', 'en', 'ko'],
                link: 'https://www.hikorea.go.kr'
            },
            {
                name: 'Visa.go.kr',
                desc: {
                    ru: 'Официальный портал корейских виз',
                    en: 'Official Korean Visa Portal'
                },
                langs: ['ru', 'en', 'ko'],
                link: 'https://www.visa.go.kr'
            },
            {
                name: '1345 Contact Center',
                desc: {
                    ru: 'Справочная иммиграции (есть RU)',
                    en: 'Immigration hotline (Support in 20+ languages)'
                },
                langs: ['ru', 'en', 'ko', 'uz', 'kz'],
                phone: '1345'
            },
            {
                name: 'Gov.kr (정부24)',
                desc: {
                    ru: 'Государственные услуги для иностранцев',
                    en: 'Government services portal for foreigners'
                },
                langs: ['ru', 'en', 'ko'],
                link: 'https://www.gov.kr/portal/forForeignerGuidance'
            }
        ]
    },
    {
        id: 'emergency',
        title: { ru: 'Экстренная помощь', en: 'Emergency' },
        items: [
            {
                name: 'Danuri Helpline',
                desc: {
                    ru: 'Поддержка семей и мигрантов (RU 24/7)',
                    en: 'Family & migrant support (24/7, multi-language)'
                },
                langs: ['ru', 'en', 'ko', 'uz', 'kz'],
                phone: '1577-1366'
            },
            {
                name: 'BGC Call Center',
                desc: {
                    ru: 'Переводчики для гос. органов (Пусан)',
                    en: 'Busan interpretation for public services'
                },
                langs: ['ru', 'en', 'ko'],
                phone: '1577-7716'
            }
        ]
    },
    {
        id: 'support',
        title: { ru: 'Центры поддержки', en: 'Support Centers' },
        items: [
            {
                name: 'Incheon Foreigners Center',
                desc: {
                    ru: 'Главный офис (Saemaul Centre)',
                    en: 'Intercultural association (Counseling, classes)'
                },
                langs: ['ru', 'en', 'ko'],
                phone: '1833-6333'
            },
            {
                name: 'Seoul Global Center',
                desc: {
                    ru: 'Консультации (RU), курсы, бизнес',
                    en: 'Comprehensive support (Law, business, daily life)'
                },
                langs: ['ru', 'en', 'ko'],
                phone: '02-2075-4180'
            },
            {
                name: 'Asan Foreigner Center',
                desc: {
                    ru: 'Поддержка в Дунпо',
                    en: 'Regional center in Dunpo area'
                },
                langs: ['ru', 'en'],
                link: 'https://vseokoree.com'
            },
            {
                name: 'Global Gangnam',
                desc: {
                    ru: 'Центр поддержки в Каннаме',
                    en: 'Support center for Gangnam residents'
                },
                langs: ['en', 'ko'],
                link: 'https://www.globalgangnam.com'
            }
        ]
    },
    {
        id: 'legal',
        title: { ru: 'Юр. помощь и визы', en: 'Legal & Visas' },
        items: [
            {
                name: 'СТОЛ УСЛУГ В КОРЕЕ | KOMPASS (Дунпо/Синчанг/Инчхон)',
                desc: {
                    ru: 'Устные и письменные переводы, Нотариус/Апостиль, Открытие ИП, Бухгалтерия, Визы (F4, H2, F1, F2, F5), Продление ID, Смена адреса, Регистрация в школу.',
                    en: 'Translation, Apostille, Business registration, Accounting, Visas (F4, H2, F1, F2, F5), ARC extension, School registration.'
                },
                langs: ['ru', 'uz', 'kz'],
                location: 'Дунпо/Синчанг/Инчхон',
                link: 'https://www.tiktok.com/@kompass'
            },
            {
                name: 'Advokatorium',
                desc: {
                    ru: 'Адвокаты: уголовка, депорт, споры',
                    en: 'Legal services: criminal, labor, deportation'
                },
                langs: ['ru'],
                link: 'https://www.advokatorium.com'
            },
            {
                name: 'Siberia Consult',
                desc: {
                    ru: 'Регистрация ООО/ИП, счета',
                    en: 'Business registration & accounting'
                },
                langs: ['ru'],
                link: 'https://siberiaconsult.ru'
            },
            {
                name: 'Pearson & Partners',
                desc: {
                    ru: 'Визы E-7/D-8, бизнес-сопровождение',
                    en: 'Business-consulting & visa experts'
                },
                langs: ['en', 'ko'],
                link: 'https://pearsonkorea.com'
            }
        ]
    },
    {
        id: 'jobs',
        title: { ru: 'Работа', en: 'Jobs' },
        items: [
            {
                name: 'Dunpo (Тунпхо)',
                desc: {
                    ru: 'Кадровые бюро (самушили) в Дунпо',
                    en: 'Staffing agencies (samushil) in Dunpo'
                },
                langs: ['ru'],
                location: 'г. Асан'
            },
            {
                name: 'KoWork',
                desc: {
                    ru: 'Вакансии для профессионалов (E-7)',
                    en: 'Job portal for skilled professionals'
                },
                langs: ['en', 'ko'],
                link: 'https://kowork.kr/en'
            }
        ]
    },
    {
        id: 'auto',
        title: { ru: 'Автомобили', en: 'Auto Sector' },
        items: [
            {
                name: 'PROKOREA',
                desc: {
                    ru: 'Доставка автомобилей под ключ',
                    en: 'Car export and delivery services'
                },
                langs: ['ru'],
                link: 'https://prokorea.trading'
            },
            {
                name: 'Autowini',
                desc: {
                    ru: 'B2B авто-площадка (RU)',
                    en: '№1 Global B2B marketplace for used cars'
                },
                langs: ['ru', 'en'],
                link: 'https://www.autowini.com'
            },
            {
                name: 'KOMPASS | Автострахование',
                desc: {
                    ru: 'Автострахование, страхование водителя, сопровождение при обмене прав.',
                    en: 'Auto insurance, driver insurance, driver\'s license exchange support.'
                },
                langs: ['ru'],
                location: 'Дунпо/Синчанг/Инчхон',
                link: 'https://www.tiktok.com/@kompass'
            },
            {
                name: 'Елена Иловская | Samsung Life',
                desc: {
                    ru: 'Частное страхование (Самсунг), автострахование, консультации по выплатам.',
                    en: 'Private insurance (Samsung), car insurance, claims consultation.'
                },
                langs: ['ru'],
                link: 'https://www.instagram.com/elena.ilovskaya.samsung'
            }
        ]
    },
    {
        id: 'logistics',
        title: { ru: 'Логистика/Карго', en: 'Logistics' },
        items: [
            {
                name: 'CDEK Korea',
                desc: {
                    ru: 'Посылки, документы, личные вещи',
                    en: 'Express delivery to CIS countries'
                },
                langs: ['ru'],
                link: 'http://www.cdek.co.kr'
            },
            {
                name: 'Карго Альянс',
                desc: {
                    ru: 'Контейнерные перевозки',
                    en: 'Sea & Air freight services'
                },
                langs: ['ru'],
                link: 'https://cargoalliance.ru/korea'
            }
        ]
    },
    {
        id: 'medical',
        title: { ru: 'Медицина', en: 'Medical' },
        items: [
            {
                name: 'Medical Korea',
                desc: {
                    ru: 'Гос. инфо-центр для пациентов СНГ',
                    en: 'Global medical information center'
                },
                langs: ['ru', 'en', 'ko'],
                link: 'https://www.medicalkorea.or.kr'
            },
            {
                name: 'Asan Medical Center',
                desc: {
                    ru: 'Russian Desk (Каннам)',
                    en: 'International Healthcare Center (English)'
                },
                langs: ['ru', 'en', 'ko'],
                link: 'https://eng.amc.seoul.kr'
            },
            {
                name: 'KOMPASS | Медстрахование и Сопровождение',
                desc: {
                    ru: 'Медстрахование, медсопровождение, частное страхование, страхование имущества/недвижимости.',
                    en: 'Medical insurance, medical escort, private insurance, property insurance.'
                },
                langs: ['ru'],
                location: 'Дунпо/Синчанг/Инчхон',
                link: 'https://www.tiktok.com/@kompass'
            },
            {
                name: 'Mega Center Korea',
                desc: {
                    ru: 'Крупный центр страхования: медицина, жизнь, авто. Поддержка 24/7.',
                    en: 'Large insurance center: medical, life, auto. 24/7 Russian support.'
                },
                langs: ['ru'],
                link: 'https://megacentrekorea.com'
            }
        ]
    },
    {
        id: 'food',
        title: { ru: 'Еда/Ритейл', en: 'Food & Retail' },
        items: [
            {
                name: 'IMPERIA FOODS',
                desc: {
                    ru: 'Сеть супермаркетов и производство',
                    en: 'CIS/Russian grocery network'
                },
                langs: ['ru'],
                link: 'https://www.instagram.com/imperiafoods'
            },
            {
                name: 'Troika',
                desc: {
                    ru: 'Русская кухня',
                    en: 'Authentic Russian restaurant in Itaewon'
                },
                langs: ['ru', 'en', 'ko'],
                location: 'Сеул (Итхэвон)',
                link: 'https://www.instagram.com/troika_seoul'
            }
        ]
    },
    {
        id: 'community',
        title: { ru: 'Сообщества', en: 'Communities' },
        items: [
            {
                name: 'Всё о Корее',
                desc: {
                    ru: 'База знаний, объявления',
                    en: 'Russian-speaking knowledge base'
                },
                langs: ['ru'],
                link: 'https://vseokoree.com'
            },
            {
                name: 'K-Life',
                desc: {
                    ru: 'Сообщество экспатов №1',
                    en: '#1 expat community platform'
                },
                langs: ['en'],
                link: 'https://k-life.co'
            },
            {
                name: '90 Day Korean',
                desc: {
                    ru: 'Курсы языка и адаптации',
                    en: 'Korean language & culture courses'
                },
                langs: ['en'],
                link: 'https://www.90daykorean.com'
            }
        ]
    },
    {
        id: 'finance',
        title: { ru: 'Финансы и Карты', en: 'Finance & Cards' },
        items: [
            {
                name: 'Woori Bank Global Desk',
                desc: {
                    ru: 'Отделения с поддержкой иностранцев (Ансан, Инчхон и др.). Помощь с картами.',
                    en: 'Branches with expat support (Ansan, Incheon, etc.). Card assistance.'
                },
                langs: ['ru', 'en', 'ko'],
                link: 'https://www.wooribank.com'
            },
            {
                name: 'WowPASS',
                desc: {
                    ru: 'Универсальная карта для туристов и экспатов (оплата + транспорт).',
                    en: 'All-in-one card for tourists & expats (Payment + T-money).'
                },
                langs: ['ru', 'en', 'ko'],
                link: 'https://www.wowpass.io'
            }
        ]
    }
];
