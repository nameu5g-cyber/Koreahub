/**
 * Multilingual dictionary and language list for KoreaHub.
 */

export const translations = {
    ru: {
        welcome: "Привет. Я мультиязычный ассистент. Не стесняйтесь обращаться ко мне на вашем языке.",
        disclaimer: "Внимание: Это справочное приложение на базе ИИ. Мы не являемся государственным органом.",
        accept: "Я согласен", hub: "Сервисы", chat: "Чат", trans: "Перевод", docs: "Реестр",
        search: "Поиск компаний...", categories: "Категории", call: "Позвонить", visit: "Перейти",
        sos: "SOS", conn: "Связь", order: "Консультация", scan: "Сканировать",
        explain_btn: "Объяснить корейский текст", from: "С языка", to: "На язык",
        sim_passport_data: "✅ Паспорт: не нужен.",
        sim_passport_voice: "⚠️ Паспорт: ОБЯЗАТЕЛЕН визит в офис для Face ID/сканирования (2026).",
        sim_arc_all: "✅ ARC: онлайн, у дилера (планшет) или в салоне. При ошибке верификации (인증) обратитесь в ближайший официальный офис оператора (직영점).",
        loading: "ИИ думает...", trans_btn: "Перевести",
        passport: "Паспорт", arc: "ID-карта (ARC)",
        explain_prompt: "Объясни, что написано на этом корейском скриншоте или тексте.",
        arc_info_btn: "Оформление ARC",
        arc_info_prompt: "Как оформить регистрационную карту иностранца (ARC)?"
    },
    kz: {
        welcome: "Сәлем. Мен көптілді ассистентпін. Маған өз тіліңізде хабарласудан тартынбаңыз.",
        disclaimer: "Назар аударыңыз: Бұл ИИ негізіндегі анықтамалық қосымша. Ресми мәселелер бойынша мемлекеттік органдарға хабарласыңыз.",
        accept: "Келісемін", hub: "Хаб", chat: "Чат", trans: "Аудару", docs: "Тізілім",
        search: "Компанияларды іздеу...", categories: "Санаттар", call: "Қоңырау шалу", visit: "Өту",
        sos: "SOS", conn: "Байланыс", order: "Консультация", scan: "Тану",
        explain_btn: "Корей мәтінін түсіндіру", from: "Қай тілден", to: "Қай тілге",
        sim_passport_data: "✅ Паспорт: қажет емес.",
        sim_passport_voice: "⚠️ Паспорт: Face ID/сканерлеу үшін кеңсеге бару МІНДЕТТІ (2026).",
        sim_arc_all: "✅ ARC: онлайн, дилерде (планшет) немесе салонда. Егер растау (인증) өтпесе — жақын жердегі оператордың ресми кеңсесіне (직영점) хабарласыңыз.",
        loading: "ИИ ойлануда...", trans_btn: "Аудару",
        passport: "Паспорт", arc: "ID-карта (ARC)",
        explain_prompt: "Осы корей скриншотында немесе мәтінінде не жазылғанын түсіндіріңіз.",
        arc_info_btn: "ARC ресімдеу",
        arc_info_prompt: "Шетелдіктің тіркеу картасын (ARC) қалай алуға болады?"
    },
    uz: {
        welcome: "Salom. Men ko'p tilli yordamchiman. Menga o'z tilingizda murojaat qilishdan tortinmang.",
        disclaimer: "Diqqat: Bu AI-ga asoslangan ma'lumot ilovasi. Rasmiy masalalar bo'yicha davlat xizmatlariga murojaat qiling.",
        accept: "Roziman", hub: "Xizmatlar", chat: "Chat", trans: "Tarjima", docs: "Reestr",
        search: "Qidiruv...", categories: "Kategoriyalar", call: "Qo'ng'iroq", visit: "O’tish",
        sos: "SOS", conn: "Aloqa", order: "Konsultatsiya", scan: "Skaner",
        explain_btn: "Koreyscha matnni tushuntirish", from: "Qaysi tildan", to: "Qaysi tilga",
        sim_passport_data: "✅ Pasport: shart emas.",
        sim_passport_voice: "⚠️ Pasport: Face ID/skanerlash uchun ofisga borish MAJBURIY (2026).",
        sim_arc_all: "✅ ARC: onlayn, dilerda (planshet) yoki salonda. Agar tasdiqlash (인증) o'tmasa — eng yaqin rasmiy operator ofisiga (직영점) murojaat qiling.",
        loading: "AI o'ylamoqda...", trans_btn: "Tarjima",
        passport: "Pasport", arc: "ID-karta (ARC)",
        explain_prompt: "Ushbu koreyscha matnda nima deb yozilganligini tushuntiring.",
        arc_info_btn: "ARC rasmiylashtirish",
        arc_info_prompt: "Chet ellikning ro'yxatdan o'tish kartasini (ARC) qanday olish mumkin?"
    },
    en: {
        welcome: "Hello. I am a multilingual assistant. Feel free to contact me in your language.",
        disclaimer: "Notice: This is an AI-based reference app. For critical issues, contact official services.",
        accept: "I Agree", hub: "Hub", chat: "AI Chat", trans: "Translate", docs: "Registry",
        search: "Search services...", categories: "Categories", call: "Call", visit: "Visit",
        sos: "SOS", conn: "SIM", order: "Consult", scan: "Scan",
        explain_btn: "Explain Korean text", from: "From", to: "To",
        sim_passport_data: "✅ Passport: Not required.",
        sim_passport_voice: "⚠️ Passport: Office visit REQUIRED for Face ID/Scanning (2026 Rules).",
        sim_arc_all: "✅ ARC holders: Online, via dealer (tablet), or at any salon. If auth (인증) fails — contact the nearest official operator office (직영점).",
        loading: "AI thinking...", trans_btn: "Translate",
        passport: "Passport", arc: "ARC Card",
        explain_prompt: "Explain what is written on this Korean screenshot or text.",
        arc_info_btn: "ARC Registration",
        arc_info_prompt: "How to register an Alien Registration Card (ARC)?"
    }
};

export const LANG_LIST = [
    { code: 'ru', flag: '🇷🇺' }, { code: 'kz', flag: '🇰🇿' },
    { code: 'uz', flag: '🇺🇿' }, { code: 'en', flag: '🇺🇸' }
];
