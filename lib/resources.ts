export type ResourceItem = {
    name: string;
    desc: Record<string, string>;
    langs: string[];
    link?: string;
    phone?: string;
    location?: string;
    tags?: Record<string, string[]>;
};

export type ResourceCategory = {
    id: string;
    title: Record<string, string>;
    items: ResourceItem[];
};

export const RESOURCES_DATA: ResourceCategory[] = [
    {
        id: 'gov',
        title: { ru: 'Гос. органы', en: 'Gov Portals' },
        items: [
            { name: 'HiKorea', desc: { ru: 'Главный портал иммиграции (ARC, визы)', en: 'Main immigration portal (ARC, visas)' }, langs: ['ru', 'en', 'ko'], link: 'https://www.hikorea.go.kr', tags: { ru: ['Визы', 'Запись'], en: ['Visas', 'Booking'] } },
            { name: '1345 Contact Center', desc: { ru: 'Справочная иммиграции (есть RU)', en: 'Immigration hotline' }, langs: ['ru', 'en', 'ko', 'uz', 'kz'], phone: '1345', tags: { ru: ['Горячая линия', 'Помощь'], en: ['Hotline', 'Help'] } },
            { name: 'Danuri Helpline', desc: { ru: 'Поддержка мигрантов 24/7 (RU)', en: 'Migrant support (24/7)' }, langs: ['ru', 'en', 'ko', 'uz', 'kz'], phone: '1577-1366', tags: { ru: ['Круглосуточно'], en: ['24/7 Support'] } }
        ]
    },
    {
        id: 'assistance',
        title: { ru: 'Центры помощи', en: 'Assistance Centers' },
        items: [
            { name: 'Seoul Global Center', desc: { ru: 'Консультации (RU), курсы, право, бизнес.', en: 'Law, courses, business support.' }, langs: ['ru', 'en', 'ko'], phone: '02-2075-4180' },
            { name: 'Incheon Foreigners Center', desc: { ru: 'Центр поддержки (Hambak). Обучение, консультации.', en: 'Support in Incheon Area.' }, langs: ['ru', 'en', 'ko'], phone: '1833-6333' },
            { name: 'Busan Counseling Center', desc: { ru: 'Центр поддержки в Пусане (есть RU).', en: 'Support in Busan area.' }, langs: ['ru', 'en', 'ko'], phone: '1577-7716 (нажать 5)' },
            { name: 'Gyeongju Support Center', desc: { ru: 'Центр поддержки рабочих в Кёнджу.', en: 'Foreign Workers Support in Gyeongju.' }, langs: ['ru', 'ko'], phone: '054-778-2518' },
            { name: 'Gimpo Support Center', desc: { ru: 'Центр поддержки мигрантов в Кимпхо.', en: 'Support center in Gimpo.' }, langs: ['ru', 'ko'], phone: '031-986-7660' }
        ]
    },
    {
        id: 'admin_services',
        title: { ru: 'Столы услуг', en: 'Admin Services' },
        items: [
            { name: 'Russian Consulate (Busan)', desc: { ru: 'Генконсульство РФ в Пусане.', en: 'Consulate General in Busan.' }, langs: ['ru'], phone: '051-441-9904', location: 'Busan (Jung-gu)' },
            { name: 'KOMPASS (Дунпо/Инчхон/Синчанг)', desc: { ru: 'Визы, Переводы, Нотариус, Апостиль, Открытие ИП.', en: 'Visas, Apostille, Business registration.' }, langs: ['ru', 'uz', 'kz'], link: 'https://www.tiktok.com/@kompass' },
            { name: 'Siberia Consult', desc: { ru: 'Регистрация ООО/ИП, бухгалтерия, открытие счетов.', en: 'Business registration & accounting.' }, langs: ['ru'], link: 'https://siberiaconsult.ru' }
        ]
    },
    {
        id: 'insurance',
        title: { ru: 'Страхование', en: 'Insurance' },
        items: [
            { name: 'Samsung Life (Елена Иловская)', desc: { ru: 'Частное страхование (Silbi), консультации.', en: 'Private insurance & claims.' }, langs: ['ru'], link: 'https://www.instagram.com/elena.ilovskaya.samsung' },
            { name: 'Mega Center Korea', desc: { ru: 'Страхование (RU): авто, медицина, жизнь.', en: 'Insurance: auto, medical, life 24/7.' }, langs: ['ru'], link: 'https://megacentrekorea.com' }
        ]
    },
    {
        id: 'finance',
        title: { ru: 'Банки', en: 'Banks' },
        items: [
            { name: 'Woori Bank Global', desc: { ru: 'Отделения с поддержкой иностранцев (RU).', en: 'Expat-friendly branches.' }, langs: ['ru', 'en', 'ko'], link: 'https://www.wooribank.com' },
            { name: 'WowPASS', desc: { ru: 'Карта для оплат и транспорта (T-money).', en: 'Payment & T-money card.' }, langs: ['ru', 'en', 'ko'], link: 'https://www.wowpass.io' }
        ]
    },
    {
        id: 'medical',
        title: { ru: 'Больницы', en: 'Medical' },
        items: [
            { name: 'Medical Korea', desc: { ru: 'Гос. инфо-центр для пациентов.', en: 'Global medical information center.' }, langs: ['ru', 'en', 'ko'], link: 'https://www.medicalkorea.or.kr' },
            { name: 'Asan Medical Center', desc: { ru: 'Международный центр (Сеул).', en: 'International Healthcare Center.' }, langs: ['ru', 'en', 'ko'], link: 'https://eng.amc.seoul.kr' }
        ]
    },
    {
        id: 'jobs',
        title: { ru: 'Работа', en: 'Jobs' },
        items: [
            { name: 'Dunpo Samushils', desc: { ru: 'Кадровые бюро в Дунпо.', en: 'Staffing agencies in Dunpo.' }, langs: ['ru'], location: 'Asan/Dunpo' },
            { name: 'KoWork', desc: { ru: 'Вакансии для виз E-7/D-10.', en: 'Job portal for visa holders.' }, langs: ['en', 'ko'], link: 'https://kowork.kr/en' },
            { name: 'Albamon', desc: { ru: 'Поиск подработки (Альба).', en: 'Part-time job portal.' }, langs: ['ko'], link: 'https://www.albamon.com' }
        ]
    },
    {
        id: 'food',
        title: { ru: 'Еда и Доставка', en: 'Food & Delivery' },
        items: [
            { name: 'Baemin (배달의민족)', desc: { ru: '№1 приложение для доставки еды в Корее.', en: 'Main food delivery app in Korea.' }, langs: ['ko'], link: 'https://www.baemin.com', tags: { ru: ['Доставка', 'Топ 1'], en: ['Delivery', 'Top 1'] } },
            { name: 'Coupang Eats', desc: { ru: 'Быстрая доставка еды от Coupang.', en: 'Fast delivery by Coupang.' }, langs: ['ru', 'en', 'ko'], link: 'https://www.coupangeats.com', tags: { ru: ['Быстрая доставка'], en: ['Fast Delivery'] } },
            { name: 'Shuttle Delivery', desc: { ru: 'Доставка из ресторанов (EN).', en: 'Expat-friendly food delivery.' }, langs: ['en'], link: 'https://www.shuttledelivery.co.kr', tags: { ru: ['На английском', 'Доставка'], en: ['English Support', 'Delivery'] } },
            { name: 'Vo, blin! (Во, блин!)', desc: { ru: 'Популярное кафе с корейской и СНГ кухней. Специализируется на блинах.', en: 'CIS-friendly cafe specialized in pancakes.' }, langs: ['ru'], location: 'Incheon', tags: { ru: ['Кафе', 'СНГ Кухня', 'Блины'], en: ['Cafe', 'CIS Food', 'Pancakes'] } },
            { name: 'Pizza Taki (Пицца Таки)', desc: { ru: 'Популярная пиццерия. Доставка по Ансану (Сонбудон, Теколь и др.).', en: 'Popular pizza spot in Ansan.' }, langs: ['ru'], location: 'Ansan', tags: { ru: ['Пицца', 'Фастфуд', 'Доставка'], en: ['Pizza', 'Fast Food', 'Delivery'] } },
            { name: 'Family (Семья)', desc: { ru: 'Ресторан русской кухни в Кванджу (Корё-ин маыль).', en: 'Russian restaurant in Gwangju village.' }, langs: ['ru'], location: 'Gwangju (Wolkok-dong)', tags: { ru: ['Ресторан', 'Русская кухня'], en: ['Restaurant', 'Russian Food'] } },
            { name: 'Samarkand (Кванджу)', desc: { ru: 'Узбекская кухня, лагман и плов.', en: 'Uzbek cuisine in Gwangju.' }, langs: ['ru', 'uz'], location: 'Gwangju (Wolkok-dong)', tags: { ru: ['Узбекская кухня', 'Плов', 'Халяль'], en: ['Uzbek Food', 'Pilaf', 'Halal'] } },
            { name: 'Troika (Итхэвон)', desc: { ru: 'Русская кухня в Сеуле.', en: 'Russian restaurant.' }, langs: ['ru', 'en', 'ko'], location: 'Seoul', tags: { ru: ['Ресторан', 'Сеул'], en: ['Restaurant', 'Seoul'] } }
        ]
    },
    {
        id: 'stores',
        title: { ru: 'Магазины и Пекарни', en: 'CIS Stores & Bakeries' },
        items: [
            { name: 'Melnitsa (Мельница)', desc: { ru: 'Крупнейшая сеть и онлайн-магазин продуктов СНГ.', en: 'Leading CIS grocery chain & online store.' }, langs: ['ru'], link: 'https://melnitsa.store', location: 'Gimhae / Online', tags: { ru: ['Доставка по Корее', 'Онлайн'], en: ['Online Store', 'Delivery'] } },
            { name: 'IMPERIA FOODS', desc: { ru: 'СНГ-продукты, собственное производство.', en: 'CIS grocery & production.' }, langs: ['ru'], link: 'https://www.instagram.com/imperiafoods', location: 'Ansan / Online', tags: { ru: ['Свое производство', 'Доставка'], en: ['Own Production', 'Delivery'] } },
            { name: 'Assorti (Ассорти)', desc: { ru: 'Сеть магазинов «Ассорти»: продукты и опт.', en: 'Assorti chain: groceries & wholesale.' }, langs: ['ru'], location: 'Incheon / Ansan', phone: '010-8001-4470', tags: { ru: ['Опт и розница'], en: ['Wholesale'] } },
            { name: 'Medovik (Медовик)', desc: { ru: 'Гастроном в Сеуле: торты, хлеб, колбасы.', en: 'Seoul gourmet: cakes & bread.' }, langs: ['ru'], location: 'Seoul (Jung-gu)', phone: '02-2285-4700', tags: { ru: ['Кондитерские изделия', 'Колбасы'], en: ['Sweets', 'Sausages'] } },
            { name: 'Maria Bakery (Dream Bakery)', desc: { ru: 'Популярная пекарня в Хамбаке (Инчхон).', en: 'Famous bakery in Hambak district.' }, langs: ['ru'], location: 'Incheon (Hambak)', tags: { ru: ['Выпечка', 'Хлеб'], en: ['Bakery'] } },
            { name: 'Lepeshka (Лепёшка)', desc: { ru: 'Сеть узбекских пекарен: свежие лепешки и самса.', en: 'Uzbek bakery network: fresh bread & samsa.' }, langs: ['ru'], location: 'Gimhae / Incheon / Ansan', tags: { ru: ['Узбекская кухня', 'Самса'], en: ['Uzbek', 'Samsa'] } },
            { name: 'Master\'s (Ансан)', desc: { ru: 'Российские продукты и выпечка в районе Вонгок.', en: 'CIS products & bakery in Wongok.' }, langs: ['ru'], location: 'Ansan (Wongok)', tags: { ru: ['Магазин'], en: ['Store'] } },
            { name: 'Raduga (Радуга)', desc: { ru: 'Продуктовый магазин в районе Хамбак.', en: 'Grocery store in Hambak district.' }, langs: ['ru'], location: 'Incheon (Hambak)', tags: { ru: ['Рядом с домом'], en: ['Local Store'] } },
            { name: 'Tandyr (Тандыр)', desc: { ru: 'Узбекские продукты, свежие лепешки и мясо.', en: 'Uzbek groceries & fresh bread.' }, langs: ['ru'], location: 'Gimhae (Gwangmyeong)', tags: { ru: ['Мясо', 'Халяль'], en: ['Halal', 'Meat'] } }
        ]
    },
    {
        id: 'logistics',
        title: { ru: 'Логистика и Карго', en: 'Logistics & Cargo' },
        items: [
            { name: 'CDEK Korea', desc: { ru: 'Посылки и документы в СНГ.', en: 'Express delivery to CIS.' }, langs: ['ru'], link: 'http://www.cdek.co.kr' },
            { name: 'Cargo Alliance', desc: { ru: 'Международные перевозки (обычные грузы).', en: 'International cargo services.' }, langs: ['ru'], link: 'https://cargoalliance.ru/korea' }
        ]
    },
    {
        id: 'sights',
        title: { ru: 'Достопримечательности', en: 'Attractions' },
        items: [
            { name: 'Gyeongbokgung', desc: { ru: 'Королевский дворец.', en: 'Royal Palace.' }, langs: ['en', 'ko'] },
            { name: 'Lotte World', desc: { ru: 'Парк аттракционов.', en: 'Theme park.' }, langs: ['en', 'ko'] }
        ]
    }
];
