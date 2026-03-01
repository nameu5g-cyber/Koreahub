export type RiskLevel = 'safe' | 'neutral' | 'warning' | 'danger' | 'info';

export type LocalizedString = {
    ru: string;
    en: string;
    uz: string;
    kk: string;
};

export interface LexiconTerm {
    id: string;
    category: LocalizedString;
    termKo: string;
    termTrans: LocalizedString;
    meaning: LocalizedString;
    riskLevel: RiskLevel;
    riskLabel: LocalizedString;
}

export const telecomLexicon: LexiconTerm[] = [
    // --- Состояние телефона ---
    {
        id: 'dev_1',
        category: { ru: 'Устройства', en: 'Devices', uz: 'Qurilmalar', kk: 'Құрылғылар' },
        termKo: '자급제 (Ja-geup-je)',
        termTrans: { ru: 'Аппарат без контракта и привязки к оператору (разлоченный)', en: 'Factory Unlocked (Carrier-free)', uz: "Shartnomasiz / Operatorga bog'lanmagan", kk: 'Келісімшартсыз және операторға байланбаған' },
        meaning: {
            ru: 'Официально разблокированный смартфон, купленный напрямую у Apple, Samsung. Без привязки к оператору. 100% безопасен.',
            en: 'Officially unlocked smartphone bought directly from Apple, Samsung. No carrier locks. 100% safe.',
            uz: 'To\'g\'ridan-to\'g\'ri Apple, Samsung dan sotib olingan rasmiy qulfdan chiqarilgan smartfon. Tarmoqqa bog\'lanmagan. 100% xavfsiz.',
            kk: 'Тікелей Apple, Samsung-тан сатып алынған ресми құлыптан босатылған смартфон. Операторға байланбаған. 100% қауіпсіз.'
        },
        riskLevel: 'safe',
        riskLabel: { ru: 'Полностью безопасен', en: 'Completely Safe', uz: 'To\'liq xavfsiz', kk: 'Толық қауіпсіз' }
    },
    {
        id: 'dev_2',
        category: { ru: 'Устройства', en: 'Devices', uz: 'Qurilmalar', kk: 'Құрылғылар' },
        termKo: '정상해지 (Jeong-sang-hae-ji)',
        termTrans: { ru: 'Контракт закрыт', en: 'Contract Closed', uz: 'Shartnoma yopilgan', kk: 'Келісімшарт жабылды' },
        meaning: {
            ru: 'Б/У телефон, контракт по которому полностью выплачен. IMEI чист, полностью отвязан от прошлого владельца.',
            en: 'Used phone with fully paid contract. Clean IMEI, completely unlinked from the previous owner.',
            uz: 'Shartnomasi to\'liq to\'langan ishlatilgan telefon. IMEI toza, oldingi egasidan to\'liq uzilgan.',
            kk: 'Келісімшарты толық төленген қолданыстағы телефон. IMEI таза, өткен иесінен толық ажыратылған.'
        },
        riskLevel: 'safe',
        riskLabel: { ru: 'Переоформление прав', en: 'Ownership Transfer', uz: 'Egalik huquqini o\'tkazish', kk: 'Құқықтарды беру' }
    },
    {
        id: 'dev_3',
        category: { ru: 'Устройства', en: 'Devices', uz: 'Qurilmalar', kk: 'Құрылғылар' },
        termKo: '미개봉 (Mi-gae-bong)',
        termTrans: { ru: 'Не вскрыт', en: 'Unopened', uz: 'Ochishmagan', kk: 'Ашылмаған' },
        meaning: {
            ru: 'Абсолютно новый аппарат в заводской пленке или пломбах.',
            en: 'Brand new device in factory wrap or seals.',
            uz: 'Zavod plyonkasi yoki plombalaridagi butunlay yangi qurilma.',
            kk: 'Зауыттық қаптамадағы немесе пломбадағы мүлдем жаңа құрылғы.'
        },
        riskLevel: 'safe',
        riskLabel: { ru: 'Как новый', en: 'Like New', uz: 'Yangi kabi', kk: 'Жаңа сияқты' }
    },
    {
        id: 'dev_4',
        category: { ru: 'Устройства', en: 'Devices', uz: 'Qurilmalar', kk: 'Құрылғылар' },
        termKo: '가개통 (Ga-gae-tong)',
        termTrans: { ru: 'Пред-активирован', en: 'Pre-activated', uz: 'Oldindan faollashtirilgan', kk: 'Алдын ала іске қосылған' },
        meaning: {
            ru: 'Активирован до продажи. Юридически чужой аппарат. Вы не сможете перенести на него полные права владения.',
            en: 'Activated before sale. Legally belongs to someone else. You cannot transfer full ownership rights.',
            uz: 'Sotishdan oldin faollashtirilgan. Qonuniy jihatdan birovning qurilmasi. To\'liq egalik huquqini o\'tkaza olmaysiz.',
            kk: 'Сату алдында іске қосылған. Заңды түрде басқа адамның құрылғысы. Толық меншік құқығын ауыстыра алмайсыз.'
        },
        riskLevel: 'danger',
        riskLabel: { ru: 'КРИТИЧЕСКИЙ РИСК', en: 'CRITICAL RISK', uz: 'KRITIK XAVF', kk: 'АСА ҚАУІПТІ' }
    },
    {
        id: 'dev_5',
        category: { ru: 'Устройства', en: 'Devices', uz: 'Qurilmalar', kk: 'Құрылғылар' },
        termKo: '유심기변 (U-sim-gi-byeon)',
        termTrans: { ru: 'Смена SIM', en: 'SIM Change', uz: 'SIM almashtirish', kk: 'SIM ауыстыру' },
        meaning: {
            ru: 'Легально чужой телефон. В случае долгов прошлого владельца аппарат заблокируют.',
            en: 'Legally somewhat else\'s phone. In case of previous owner\'s debts, the device will be blocked.',
            uz: 'Qonuniy birovning telefoni. Oldingi egasining qarzlarida apparat bloklanadi.',
            kk: 'Заңды түрде бөтен телефон. Өткен иесінің қарыздары болған жағдайда құрылғы бұғатталады.'
        },
        riskLevel: 'warning',
        riskLabel: { ru: 'ВЫСОКИЙ РИСК', en: 'HIGH RISK', uz: 'YUQORI XAVF', kk: 'ЖОҒАРЫ ҚАУІП' }
    },
    {
        id: 'dev_6',
        category: { ru: 'Устройства', en: 'Devices', uz: 'Qurilmalar', kk: 'Құрылғылар' },
        termKo: '분실·도난 (Bun-shil·Do-nan)',
        termTrans: { ru: 'Утерян / Украден', en: 'Lost / Stolen', uz: 'Yo\'qolgan / O\'g\'irlangan', kk: 'Жоғалған / Ұрланған' },
        meaning: {
            ru: 'Аппарат числится в розыске. Риск уголовного дела. Проверяется на сайте IMEI.kr.',
            en: 'Device is reported missing. Risk of criminal charges. Check on IMEI.kr.',
            uz: 'Apparat qidiruvda. Jinoiy ish xavfi mavjud. IMEI.kr da tekshiriladi.',
            kk: 'Құрылғы іздеуде. Қылмыстық іс қаупі. IMEI.kr сайтында тексеріледі.'
        },
        riskLevel: 'danger',
        riskLabel: { ru: 'ОПАСНОСТЬ', en: 'DANGER', uz: 'XAVF', kk: 'ҚАУІПТІ' }
    },
    {
        id: 'dev_7',
        category: { ru: 'Устройства', en: 'Devices', uz: 'Qurilmalar', kk: 'Құрылғылар' },
        termKo: '공기계 (Gong-gi-gye)',
        termTrans: { ru: 'Чистый аппарат (без линии)', en: 'Contract-free / Clean IMEI', uz: 'Ro\'yxatdan o\'tmagan apparat', kk: 'Тіркелмеген құрылғы' },
        meaning: {
            ru: 'Смартфон, не привязанный ни к одному номеру. "Пустой" здесь означает, что в базе оператора за ним не числится активная линия. Он полностью готов к вашей SIM-карте и регистрации на ваше имя.',
            en: 'Smartphones not tied to any number. "Empty" here means no active line is registered for it. Ready for your SIM card and registration.',
            uz: 'Hech qanday raqamga bog\'lanmagan smartfon. "Bo\'sh" bu yerda operator bazasida faol liniya yo\'qligini anglatadi. SIM-kartangizga va o\'z nomingizga ro\'yxatdan o\'tishga tayyor.',
            kk: 'Ешқандай нөмірге байланбаған смартфон. "Бос" мұнда оператор базасында белсенді желі жоқтығын білдіреді. Сіздің SIM-картаңызға және өз атыңызға тіркелуге дайын.'
        },
        riskLevel: 'safe',
        riskLabel: { ru: 'Готов к работе', en: 'Ready to Use', uz: 'Ishga tayyor', kk: 'Жұмысқа дайын' }
    },
    {
        id: 'dev_8',
        category: { ru: 'Устройства', en: 'Devices', uz: 'Qurilmalar', kk: 'Құрылғылар' },
        termKo: '미사용 (Mi-sa-yong)',
        termTrans: { ru: 'Неиспользованный', en: 'Unused', uz: 'Ishlatilmagan', kk: 'Қолданылмаған' },
        meaning: {
            ru: 'Телефон, который не использовался. Коробка может быть вскрыта, но сам аппарат не включали и не активировали.',
            en: 'A phone that has not been used. The box may be opened, but the device itself has not been turned on or activated.',
            uz: 'Ishlatilmagan telefon. Quti ochilgan bo\'lishi mumkin, lekin apparatning o\'zi yoqilmagan va faollashtirilmagan.',
            kk: 'Қолданылмаған телефон. Қорап ашылған болуы мүмкін, бірақ құрылғының өзі қосылмаған және іске қосылмаған.'
        },
        riskLevel: 'safe',
        riskLabel: { ru: 'Состояние нового', en: 'New Condition', uz: 'Yangi holatda', kk: 'Жаңа күйде' }
    },
    {
        id: 'dev_9',
        category: { ru: 'Устройства', en: 'Devices', uz: 'Qurilmalar', kk: 'Құрылғылар' },
        termKo: '새제품 (Sae-je-pum)',
        termTrans: { ru: 'Новый товар', en: 'New Product', uz: 'Yangi mahsulot', kk: 'Жаңа өнім' },
        meaning: {
            ru: 'Абсолютно новый товар. Обычно подразумевает заводскую запечатку и полный комплект.',
            en: 'Brand new product. Usually implies factory sealing and a full set of accessories.',
            uz: 'Butunlay yangi mahsulot. Odatda zavod muhri va to\'liq to\'plamni anglatadi.',
            kk: 'Мүлдем жаңа өнім. Әдетте зауыттық мөр мен толық жиынтықты білдіреді.'
        },
        riskLevel: 'safe',
        riskLabel: { ru: 'Заводской сбор', en: 'Factory Sealed', uz: 'Zavod muhrlangan', kk: 'Зауыттық мөр' }
    },
    {
        id: 'dev_10',
        category: { ru: 'Устройства', en: 'Devices', uz: 'Qurilmalar', kk: 'Құрылғылар' },
        termKo: '신상품 (Sin-sang-pum)',
        termTrans: { ru: 'Свежая модель', en: 'Latest Model', uz: 'Yangi model', kk: 'Жаңа модель' },
        meaning: {
            ru: 'Новинка на рынке. Самая актуальная модель в линейке производителя.',
            en: 'New arrival on the market. The most current model in the manufacturer\'s lineup.',
            uz: 'Bozordagi yangilik. Ishlab chiqaruvchi qatoridagi eng so\'nggi model.',
            kk: 'Нарықтағы жаңалық. Өндіруші қатарындағы ең соңғы модель.'
        },
        riskLevel: 'safe',
        riskLabel: { ru: 'Актуально', en: 'Current', uz: 'Dolzarb', kk: 'Өзекті' }
    },

    // --- Состояние экрана ---
    {
        id: 'scr_1',
        category: { ru: 'Экраны', en: 'Screens', uz: 'Ekranlar', kk: 'Экрандар' },
        termKo: '약잔상 (Yak-jan-sang)',
        termTrans: { ru: 'Легкое выгорание', en: 'Light Burn-in', uz: 'Yengil kuyish', kk: 'Әлсіз күю' },
        meaning: {
            ru: 'Едва заметные тени на дисплее (видны только на белом фоне).',
            en: 'Barely noticeable shadows on the display (visible only on a white background).',
            uz: 'Ekrandagi deyarli sezilmas soyalar (faqat oq fonda ko\'rinadi).',
            kk: 'Дисплейдегі әрең көрінетін көлеңкелер (ақ фонда ғана көрінеді).'
        },
        riskLevel: 'neutral',
        riskLabel: { ru: 'Допустимо', en: 'Acceptable', uz: 'Qabul qilinadi', kk: 'Рұқсат етіледі' }
    },
    {
        id: 'scr_2',
        category: { ru: 'Экраны', en: 'Screens', uz: 'Ekranlar', kk: 'Экрандар' },
        termKo: '강잔상 (Gang-jan-sang)',
        termTrans: { ru: 'Сильное выгорание', en: 'Heavy Burn-in', uz: 'Kuchli kuyish', kk: 'Қатты күю' },
        meaning: {
            ru: 'Отчетливое выгорание дисплея, часто с розоватым оттенком.',
            en: 'Distinct screen burn-in, often with a pinkish tint.',
            uz: 'Ko\'p hollarda pushtirang bilan ajralib turadigan aniq displey kuyishi.',
            kk: 'Жиі қызғылт реңкпен көрінетін айқын экран жануы.'
        },
        riskLevel: 'warning',
        riskLabel: { ru: 'Внимание', en: 'Caution', uz: 'Diqqat', kk: 'Назар аударыңыз' }
    },
    {
        id: 'scr_3',
        category: { ru: 'Экраны', en: 'Screens', uz: 'Ekranlar', kk: 'Экрандар' },
        termKo: '흑잔상 (Heuk-jan-sang)',
        termTrans: { ru: 'Черные пятна', en: 'Black Spots', uz: 'Qora dog\'lar', kk: 'Қара дақтар' },
        meaning: {
            ru: 'Битые пиксели или вытекшая матрица в виде черных пятен. Критический дефект.',
            en: 'Dead pixels or leaked matrix in the form of black spots. Critical defect.',
            uz: 'O\'lik piksellar yoki qora dog\'lar shaklidagi yorilgan matrisa. Kritik nuqson.',
            kk: 'Өлі пиксельдер немесе қара дақтар түріндегі ағу матрицасы. Критикалық ақау.'
        },
        riskLevel: 'danger',
        riskLabel: { ru: 'Избегать', en: 'Avoid', uz: 'Saqlaning', kk: 'Аулақ болыңыз' }
    },
    {
        id: 'scr_4',
        category: { ru: 'Экраны', en: 'Screens', uz: 'Ekranlar', kk: 'Экрандар' },
        termKo: '백잔상 (Baek-jan-sang)',
        termTrans: { ru: 'Белые засветы', en: 'White Spots', uz: 'Oq dog\'lar', kk: 'Ақ дақтар' },
        meaning: {
            ru: 'Светлые пятна или ореолы на экране, часто появляются после некачественного ремонта или влаги.',
            en: 'Light spots or halos on the screen, often appear after poor quality repair or moisture.',
            uz: 'Ekrandagi yorug\' dog\'lar, odatda sifatsiz ta\'mirlash yoki namlikdan keyin paydo bo\'ladi.',
            kk: 'Экрандағы жарық дақтар, сапасыз жөндеуден немесе ылғалдан кейін жиі пайда болады.'
        },
        riskLevel: 'warning',
        riskLabel: { ru: 'Внимание', en: 'Caution', uz: 'Diqqat', kk: 'Назар аударыңыз' }
    },

    // --- Сделки и Скидки ---
    {
        id: 'fin_1',
        category: { ru: 'Оплата и Скидки', en: 'Payments & Discounts', uz: 'To\'lovlar va chegirmalar', kk: 'Төлемдер мен жеңілдіктер' },
        termKo: '완납 (현금완납)',
        termTrans: { ru: 'Оплата наличными (Сразу)', en: 'Full Cash Payment', uz: 'To\'liq naqd to\'lov', kk: 'Толық қолма-қол төлем' },
        meaning: {
            ru: 'Полная оплата за телефон сразу 100%. Позволяет избежать огромных процентов по рассрочке (5.9%).',
            en: 'Full payment for the phone upfront. Allows avoiding huge installment rates (5.9%).',
            uz: 'Telefon uchun 100% oldindan naqd to\'lov. Katta foizlardan (5.9%) qochish imkonini beradi.',
            kk: 'Телефон үшін 100% алдын ала қолма-қол төлем. Үлкен пайыздық мөлшерлемелерден (5.9%) аулақ болуға мүмкіндік береді.'
        },
        riskLevel: 'safe',
        riskLabel: { ru: 'Рекомендуется', en: 'Recommended', uz: 'Tavsiya etiladi', kk: 'Ұсынылады' }
    },
    {
        id: 'fin_2',
        category: { ru: 'Оплата и Скидки', en: 'Payments & Discounts', uz: 'To\'lovlar va chegirmalar', kk: 'Төлемдер мен жеңілдіктер' },
        termKo: '할부 (Hal-bu)',
        termTrans: { ru: 'Рассрочка (Кредит)', en: 'Installment', uz: 'Muddatli to\'lov', kk: 'Бөліп төлеу' },
        meaning: {
            ru: 'Покупка телефона в рассрочку (обычно на 24, 36 или 48 месяцев). У операторов ставка составляет 5.9% годовых.',
            en: 'Buying a phone in installments (usually 24, 36, or 48 months). Carrier interest rate is 5.9% APR.',
            uz: 'Telefonni muddatli to\'lovga sotib olish. Operatorlar foizi yillik 5.9% ni tashkil qiladi.',
            kk: 'Телефонды бөліп төлеуге сатып алу (әдетте 24, 36 немесе 48 айға). Операторлардың пайыздық мөлшерлемесі жылдық 5.9% құрайды.'
        },
        riskLevel: 'neutral',
        riskLabel: { ru: '+5.9% годовых', en: '+5.9% APR', uz: '+5.9% yillik', kk: '+5.9% жылдық' }
    },
    {
        id: 'fin_3',
        category: { ru: 'Оплата и Скидки', en: 'Payments & Discounts', uz: 'To\'lovlar va chegirmalar', kk: 'Төлемдер мен жеңілдіктер' },
        termKo: '잔액 / 할부잔액',
        termTrans: { ru: 'Остаток долга', en: 'Remaining Balance', uz: 'Qoldiq qarz', kk: 'Қалдық қарыз' },
        meaning: {
            ru: 'Оставшаяся сумма долга за телефон. Эту сумму нужно будет закрыть при досрочном расторжении контракта.',
            en: 'The remaining balance owed on the phone. This must be paid off if the contract is terminated early.',
            uz: 'Telefon uchun qolgan qarz summasi. Shartnoma bekor qilinganda to\'lanishi kerak.',
            kk: 'Телефон үшін қалған қарыз сомасы. Келісімшарт бұзылған жағдайда өтелуі керек.'
        },
        riskLevel: 'info',
        riskLabel: { ru: 'Долг за аппарат', en: 'Device Debt', uz: 'Qurilma qarzi', kk: 'Құрылғы қарызы' }
    },
    {
        id: 'fin_4',
        category: { ru: 'Оплата и Скидки', en: 'Payments & Discounts', uz: 'To\'lovlar va chegirmalar', kk: 'Төлемдер мен жеңілдіктер' },
        termKo: '선택약정 (선약)',
        termTrans: { ru: 'Скидка на тариф (-25%)', en: 'Plan Discount (-25%)', uz: 'Tarif chegirmasi (-25%)', kk: 'Тарифке жеңілдік (-25%)' },
        meaning: {
            ru: 'Выбор скидки в размере 25% на вашу ежемесячную абонентскую плату вместо скидки на сам смартфон.',
            en: 'Choosing a 25% discount on your monthly plan fee instead of a discount on the device itself.',
            uz: 'Qurilma o\'rniga oylik tarifga 25% chegirma tanlash.',
            kk: 'Құрылғы орнына айлық тарифке 25% жеңілдік таңдау.'
        },
        riskLevel: 'safe',
        riskLabel: { ru: 'Длительная выгода', en: 'Long-term Benefit', uz: 'Uzoq muddatli foyda', kk: 'Ұзақ мерзімді пайда' }
    },
    {
        id: 'fin_5',
        category: { ru: 'Оплата и Скидки', en: 'Payments & Discounts', uz: 'To\'lovlar va chegirmalar', kk: 'Төлемдер мен жеңілдіктер' },
        termKo: '공시지원금 (지원금)',
        termTrans: { ru: 'Субсидия (на телефон)', en: 'Device Subsidy', uz: 'Qurilma subsidiyasi', kk: 'Құрылғы субсидиясы' },
        meaning: {
            ru: 'Официальная разовая скидка от оператора на стоимость самого смартфона. Зависит от тарифа.',
            en: 'Official one-time subsidy from the carrier on the price of the smartphone. Depends on the plan.',
            uz: 'Smartfon narxi uchun operatordan rasmiy bir martalik chegirma. Tarifga bog\'liq.',
            kk: 'Смартфон бағасына оператордың ресми бір реттік жеңілдігі. Тарифке байланысты.'
        },
        riskLevel: 'safe',
        riskLabel: { ru: 'Разовая скидка', en: 'One-time Discount', uz: 'Bir martalik chegirma', kk: 'Бір реттік жеңілдік' }
    },
    {
        id: 'fin_6',
        category: { ru: 'Оплата и Скидки', en: 'Payments & Discounts', uz: 'To\'lovlar va chegirmalar', kk: 'Төлемдер мен жеңілдіктер' },
        termKo: '할인 (Hal-in)',
        termTrans: { ru: 'Скидка', en: 'Discount', uz: 'Chegirma', kk: 'Жеңілдік' },
        meaning: {
            ru: 'Общий термин для любых скидок: от оператора, от дилера, по кредитным картам и т.д.',
            en: 'General term for any discounts: from carrier, dealer, credit cards, etc.',
            uz: 'Har qanday chegirmalar uchun umumiy atama: operatordan, dilerdan, kredit kartalardan.',
            kk: 'Кез келген жеңілдіктерге арналған жалпы термин: оператордан, дилерден, несие карталарынан.'
        },
        riskLevel: 'info',
        riskLabel: { ru: 'Общий термин', en: 'General Term', uz: 'Umumiy atama', kk: 'Жалпы термин' }
    },
    {
        id: 'fin_6a',
        category: { ru: 'Оплата и Скидки', en: 'Payments & Discounts', uz: 'To\'lovlar va chegirmalar', kk: 'Төлемдер мен жеңілдіктер' },
        termKo: '후불 (Hu-bul)',
        termTrans: { ru: 'Постоплата (Postpaid)', en: 'Postpaid', uz: 'Keyin to\'lash', kk: 'Кейін төлеу' },
        meaning: {
            ru: 'Обычная контрактная система оплаты: сначала пользуетесь связью месяц, потом оплачиваете счет.',
            en: 'Standard contract billing: use services for a month, pay the bill afterwards.',
            uz: 'Standart shartnoma tizimi: aloqadan bir oy foydalanasiz, so\'ngra hisobni to\'laysiz.',
            kk: 'Стандартты келісімшарт жүйесі: байланысты бір ай пайдаланасыз, содан кейін шотты төлейсіз.'
        },
        riskLevel: 'safe',
        riskLabel: { ru: 'Стандарт', en: 'Standard', uz: 'Standart', kk: 'Стандартты' }
    },
    {
        id: 'fin_6b',
        category: { ru: 'Оплата и Скидки', en: 'Payments & Discounts', uz: 'To\'lovlar va chegirmalar', kk: 'Төлемдер мен жеңілдіктер' },
        termKo: '충전 (Chung-jeon)',
        termTrans: { ru: 'Пополнение баланса', en: 'Recharge / Top-up', uz: 'Balansni to\'ldirish', kk: 'Теңгерімді толтыру' },
        meaning: {
            ru: 'Закинуть деньги на счет. Чаще всего используется для 선불폰 (предоплатных сим-карт).',
            en: 'Adding money to your account balance. Mostly used for prepaid SIM cards.',
            uz: 'Hisobga pul kiritish. Asosan oldindan to\'lovli SIM kartalar uchun ishlatiladi.',
            kk: 'Шотқа ақша салу. Көбінесе алдын ала төлейтін SIM карталар үшін қолданылады.'
        },
        riskLevel: 'info',
        riskLabel: { ru: 'Для предоплаты', en: 'For Prepaid', uz: 'Oldindan to\'lov uchun', kk: 'Алдын ала төлеуге арналған' }
    },
    {
        id: 'fin_6c',
        category: { ru: 'Оплата и Скидки', en: 'Payments & Discounts', uz: 'To\'lovlar va chegirmalar', kk: 'Төлемдер мен жеңілдіктер' },
        termKo: '환불 (Hwan-bul)',
        termTrans: { ru: 'Возврат средств', en: 'Refund', uz: 'Pulni qaytarish', kk: 'Ақшаны қайтару' },
        meaning: {
            ru: 'Возврат ваших денег при отмене сделки, возврате товара или ошибочном списании.',
            en: 'Getting your money back for a canceled deal, returned product, or billing error.',
            uz: 'Bitim bekor qilinganda, mahsulot qaytarilganda yoki xato yechib olinganda pulni qaytarish.',
            kk: 'Мәміле бұзылғанда, тауар қайтарылғанда немесе қате шегерілгенде ақшаңызды қайтару.'
        },
        riskLevel: 'info',
        riskLabel: { ru: 'Знать свои права', en: 'Know Your Rights', uz: 'Huquqlarni bilish', kk: 'Құқықтарды білу' }
    },
    {
        id: 'fin_6d',
        category: { ru: 'Оплата и Скидки', en: 'Payments & Discounts', uz: 'To\'lovlar va chegirmalar', kk: 'Төлемдер мен жеңілдіктер' },
        termKo: '가상계좌 (Ga-sang-gye-jwa)',
        termTrans: { ru: 'Виртуальный счет', en: 'Virtual Account', uz: 'Virtual hisob', kk: 'Виртуалды шот' },
        meaning: {
            ru: 'Специальный временный номер банковского счета, который выдают только для оплаты конкретной услуги или телефона.',
            en: 'A temporary bank account number issued only for paying a specific service or phone bill.',
            uz: 'Faqat ma\'lum bir xizmat yoki telefon uchun to\'lashga beriladigan maxsus vaqtinchalik bank hisobi raqami.',
            kk: 'Тек белгілі бір қызмет немесе телефон үшін төлеуге берілетін арнайы уақытша банктік шот нөмірі.'
        },
        riskLevel: 'info',
        riskLabel: { ru: 'Для оплаты', en: 'For Payment', uz: 'To\'lov uchun', kk: 'Төлем үшін' }
    },
    {
        id: 'fin_6e',
        category: { ru: 'Оплата и Скидки', en: 'Payments & Discounts', uz: 'To\'lovlar va chegirmalar', kk: 'Төлемдер мен жеңілдіктер' },
        termKo: '입금 (Ip-geum)',
        termTrans: { ru: 'Депозит / Внесение денег', en: 'Deposit / Payment', uz: 'Pul kiritish', kk: 'Ақша салу' },
        meaning: {
            ru: 'Процесс внесения или перевода денег на счет (например, оплата за телефон).',
            en: 'The act of depositing or transferring money into an account (e.g., paying for a phone).',
            uz: 'Hisobga pul kiritish yoki o\'tkazish jarayoni.',
            kk: 'Шотқа ақша салу немесе аудару процесі.'
        },
        riskLevel: 'safe',
        riskLabel: { ru: 'Оплата', en: 'Payment', uz: 'To\'lov', kk: 'Төлем' }
    },
    {
        id: 'fin_6f',
        category: { ru: 'Оплата и Скидки', en: 'Payments & Discounts', uz: 'To\'lovlar va chegirmalar', kk: 'Төлемдер мен жеңілдіктер' },
        termKo: '납부 (Nap-bu)',
        termTrans: { ru: 'Уплата / Погашение', en: 'Payment / Settlement', uz: 'To\'lash / Qoplash', kk: 'Төлеу / Өтеу' },
        meaning: {
            ru: 'Процесс оплаты счетов, налогов или долгов (например, 방통비 납부 - оплата связи).',
            en: 'The process of paying bills, taxes, or debts (e.g., paying the telecom bill).',
            uz: 'Hisoblar, soliqlar yoki qarzlarni to\'lash jarayoni.',
            kk: 'Шоттарды, салықтарды немесе қарыздарды төлеу процесі.'
        },
        riskLevel: 'info',
        riskLabel: { ru: 'Оплата счетов', en: 'Bill Payment', uz: 'Hisob to\'lovi', kk: 'Шот төлемі' }
    },
    {
        id: 'fin_6g',
        category: { ru: 'Оплата и Скидки', en: 'Payments & Discounts', uz: 'To\'lovlar va chegirmalar', kk: 'Төлемдер мен жеңілдіктер' },
        termKo: '결제 (Gyeol-je)',
        termTrans: { ru: 'Оплата (Картой/Со счета)', en: 'Payment / Checkout', uz: 'To\'lov (Karta bilan)', kk: 'Төлем (Картамен)' },
        meaning: {
            ru: 'Списание средств за покупку или услугу, чаще всего безналичным расчетом.',
            en: 'Processing a transaction for a purchase or service, usually electronic.',
            uz: 'Xarid yoki xizmat uchun pul yechish, ko\'pincha naqd pulsiz.',
            kk: 'Сатып алу немесе қызмет үшін ақшаны шегеру, көбінесе қолма-қол ақшасыз.'
        },
        riskLevel: 'safe',
        riskLabel: { ru: 'Безналичный расчет', en: 'Electronic Payment', uz: 'Naqd pulsiz to\'lov', kk: 'Қолма-қол ақшасыз төлем' }
    },
    {
        id: 'fin_6h',
        category: { ru: 'Оплата и Скидки', en: 'Payments & Discounts', uz: 'To\'lovlar va chegirmalar', kk: 'Төлемдер мен жеңілдіктер' },
        termKo: '내역 (Nae-yeok)',
        termTrans: { ru: 'История / Детализация', en: 'History / Breakdown', uz: 'Tarix / Tafsilotlar', kk: 'Тарих / Бөлшектеу' },
        meaning: {
            ru: 'История ваших платежей, звонков или детализация счета. Очень важно проверять 소액결제 내역 (историю микроплатежей).',
            en: 'Your payment or call history/breakdown. Crucial to check microtransaction history.',
            uz: 'Sizning to\'lovlar, qo\'ng\'iroqlar tarixi yoki hisob tafsilotlari.',
            kk: 'Сіздің төлемдер, қоңыраулар тарихыңыз немесе шоттың бөлшектері.'
        },
        riskLevel: 'info',
        riskLabel: { ru: 'Проверка истории', en: 'Check History', uz: 'Tarixni tekshirish', kk: 'Тарихты тексеру' }
    },
    {
        id: 'bas_1a',
        category: { ru: 'База', en: 'Basics', uz: 'Asosiy', kk: 'Негізгі' },
        termKo: '잔액조회 (Jan-aek-jo-hoe)',
        termTrans: { ru: 'Проверка баланса', en: 'Balance Inquiry', uz: 'Balansni tekshirish', kk: 'Теңгерімді тексеру' },
        meaning: {
            ru: 'Проверка оставшихся денег на счету (для 가상계좌 или 선불폰).',
            en: 'Checking the remaining money in your account or prepaid phone.',
            uz: 'Hisobdagi qolgan pulni tekshirish.',
            kk: 'Шоттағы қалған ақшаны тексеру.'
        },
        riskLevel: 'info',
        riskLabel: { ru: 'Полезная команда', en: 'Useful Command', uz: 'Foydali buyruq', kk: 'Пайдалы пәрмен' }
    },
    {
        id: 'bas_1b',
        category: { ru: 'База', en: 'Basics', uz: 'Asosiy', kk: 'Негізгі' },
        termKo: '잔액이동 (Jan-aek-i-dong)',
        termTrans: { ru: 'Перевод баланса', en: 'Balance Transfer', uz: 'Balansni o\'tkazish', kk: 'Теңгерімді аудару' },
        meaning: {
            ru: 'Перенос оставшихся средств с одного номера/счета на другой.',
            en: 'Transferring remaining funds from one number/account to another.',
            uz: 'Qolgan mablag\'larni bir raqamdan/hisobdan boshqasiga o\'tkazish.',
            kk: 'Қалған қаражатты бір нөмірден/шоттан екіншісіне аудару.'
        },
        riskLevel: 'safe',
        riskLabel: { ru: 'Перевод средств', en: 'Fund Transfer', uz: 'Mablag\' o\'tkazish', kk: 'Қаражат аудару' }
    },
    {
        id: 'bas_1c',
        category: { ru: 'База', en: 'Basics', uz: 'Asosiy', kk: 'Негізгі' },
        termKo: '제공 (Je-gong)',
        termTrans: { ru: 'Предоставление (объем)', en: 'Provided (Allowance)', uz: 'Taqdim etish (Hajm)', kk: 'Беру (Көлем)' },
        meaning: {
            ru: 'Объем интернета, минут или смс, который оператор предоставляет вам каждый месяц по тарифу.',
            en: 'The amount of data, minutes, or SMS the carrier provides you monthly.',
            uz: 'Operator har oy tarif bo\'yicha taqdim etadigan internet, daqiqalar yoki SMS hajmi.',
            kk: 'Оператор ай сайын тариф бойынша беретін интернет, минут немесе SMS көлемі.'
        },
        riskLevel: 'info',
        riskLabel: { ru: 'Объем тарифа', en: 'Plan Allowance', uz: 'Tarif hajmi', kk: 'Тариф көлемі' }
    },
    {
        id: 'bas_1d',
        category: { ru: 'База', en: 'Basics', uz: 'Asosiy', kk: 'Негізгі' },
        termKo: '사용량 (Sa-yong-ryang)',
        termTrans: { ru: 'Использованный объем', en: 'Usage Amount', uz: 'Foydalanilgan hajm', kk: 'Пайдаланылған көлем' },
        meaning: {
            ru: 'Сколько из 제공 (предоставленного лимита) вы уже потратили в этом месяце.',
            en: 'How much of your provided limit you have already used this month.',
            uz: 'Bu oyda qancha limitni ishlatganligingiz.',
            kk: 'Осы айда берілген лимиттің қаншасын пайдаланғаныңыз.'
        },
        riskLevel: 'info',
        riskLabel: { ru: 'Контроль лимита', en: 'Usage Control', uz: 'Limit nazorati', kk: 'Лимитті бақылау' }
    },
    {
        id: 'bas_1e',
        category: { ru: 'База', en: 'Basics', uz: 'Asosiy', kk: 'Негізгі' },
        termKo: '무제한 (Mu-je-han)',
        termTrans: { ru: 'Безлимит', en: 'Unlimited', uz: 'Cheksiz', kk: 'Шексіз' },
        meaning: {
            ru: 'Отсутствие лимита. В Корее 완전 무제한 (полный безлимит на высокой скорости) стоит очень дорого.',
            en: 'No limits. In Korea, true full-speed unlimited is very expensive.',
            uz: 'Limitning yo\'qligi. Koreyada yuqori tezlikdagi to\'liq cheksiz internet juda qimmat.',
            kk: 'Лимиттің жоқтығы. Кореяда жоғары жылдамдықтағы толық шексіздік өте қымбат тұрады.'
        },
        riskLevel: 'safe',
        riskLabel: { ru: 'Без ограничений', en: 'No Limits', uz: 'Cheklovsiz', kk: 'Шектеусіз' }
    },
    {
        id: 'bas_1f',
        category: { ru: 'База', en: 'Basics', uz: 'Asosiy', kk: 'Негізгі' },
        termKo: '통신사 (Tong-sin-sa)',
        termTrans: { ru: 'Оператор связи', en: 'Telecom Carrier', uz: 'Aloqa operatori', kk: 'Байланыс операторы' },
        meaning: {
            ru: 'Компания, предоставляющая услуги связи (SKT, KT, LGU+ или Al-tteul-pon).',
            en: 'The telecommunications company providing service (SKT, KT, LGU+).',
            uz: 'Aloqa xizmatlarini ko\'rsatuvchi kompaniya.',
            kk: 'Байланыс қызметтерін көрсететін компания.'
        },
        riskLevel: 'safe',
        riskLabel: { ru: 'Провайдер', en: 'Provider', uz: 'Provayder', kk: 'Провайдер' }
    },
    {
        id: 'fin_7',
        category: { ru: 'Оплата и Скидки', en: 'Payments & Discounts', uz: 'To\'lovlar va chegirmalar', kk: 'Төлемдер мен жеңілдіктер' },
        termKo: '징 (Jing)',
        termTrans: { ru: 'Субсидия дилера', en: 'Dealer Subsidy', uz: 'Diler subsidiyasi', kk: 'Дилерлік субсидия' },
        meaning: {
            ru: 'Скрытая "серая" скидка от дилера из его собственных комиссионных.',
            en: 'Hidden "gray" discount from the dealer out of their own commission.',
            uz: 'Dilerning o\'z komissiyasidan yashirin chegirmasi.',
            kk: 'Дилердің өз комиссиялық маржасымен жасайтын жасырын жеңілдігі.'
        },
        riskLevel: 'warning',
        riskLabel: { ru: 'Скрытая скидка', en: 'Hidden Discount', uz: 'Yashirin chegirma', kk: 'Жасырын жеңілдік' }
    },
    {
        id: 'fin_8',
        category: { ru: 'Оплата и Скидки', en: 'Payments & Discounts', uz: 'To\'lovlar va chegirmalar', kk: 'Төлемдер мен жеңілдіктер' },
        termKo: '차비 (Cha-bi)',
        termTrans: { ru: 'Доплата ("На такси")', en: 'Cashback ("Taxi fare")', uz: 'Qo\'shimcha to\'lov', kk: 'Қосымша төлем' },
        meaning: {
            ru: 'Когда субсидии превышают цену телефона. Вы получаете аппарат и наличные сверху.',
            en: 'When subsidies exceed the phone price. You receive the device and extra cash.',
            uz: 'Subsidiyalar telefon narxidan oshib ketganda. Telefon va qo\'shimcha naqd pul olasiz.',
            kk: 'Жеңілдіктер телефон бағасынан асқан кезде. Сіз құрылғыны және қолма-қол ақшаны аласыз.'
        },
        riskLevel: 'warning',
        riskLabel: { ru: 'РИСК ОБМАНА', en: 'SCAM RISK', uz: 'FIRIBGARLIK XAVFI', kk: 'АЛАЯҚТЫҚ ҚАУПІ' }
    },
    id: 'fin_7',
    category: { ru: 'Сделки', en: 'Deals', uz: 'Kelishuvlar', kk: 'Мәмілелер' },
    termKo: '페이백 (Payback)',
    termTrans: { ru: 'Возврат наличных', en: 'Cashback', uz: 'Keshbek', kk: 'Кэшбэк' },
    meaning: {
        ru: 'Обещание продавца перевести вам субсидию на счет после оформления. Часто обманывают.',
        en: 'Seller promises to transfer subsidy after closing the deal. Often a scam.',
        uz: 'Sotuvchi subsidiyani hisobga o\'tkazishni va\'da qiladi. Ko\'pincha firibgarlik.',
        kk: 'Сатушы жеңілдікті шотқа аударуға уәде береді. Жиі алдайды.'
    },
    riskLevel: 'warning',
    riskLabel: { ru: 'РИСК ОБМАНА', en: 'SCAM RISK', uz: 'FIRIBGARLIK XAVFI', kk: 'АЛАЯҚТЫҚ ҚАУПІ' }
    },

// --- Ловушки и Развод ---
{
    id: 'trap_1',
        category: { ru: 'Развод', en: 'Traps & Scams', uz: 'Tuzoq va firib', kk: 'Тұзақтар' },
    termKo: '실구매가 (Sil-gu-mae-ga)',
        termTrans: { ru: 'Цена владения', en: 'Cost of Ownership', uz: 'Egalik narxi', kk: 'Иелену құны' },
    meaning: {
        ru: 'Уловка: вычитают 25% скидку на связь и говорят, что это скидка на сам телефон. В итоге вы платите полную цену.',
            en: 'Scam: deducting the 25% plan discount and claiming it\'s a device discount.',
                uz: 'Hiyla: 25% tarif chegirmasini chiqarib tashlab, buni telefon uchun chegirma deyish.',
                    kk: 'Айла: 25% тарифтік жеңілдікті шегеріп, оны телефон жеңілдігі деп айту.'
    },
    riskLevel: 'danger',
        riskLabel: { ru: 'МАРКЕТИНГОВЫЙ РАЗВОД', en: 'MARKETING SCAM', uz: 'MARKETING FIRIB', kk: 'МАРКЕТИНГ АЛАЯҚТЫҒЫ' }
},
{
    id: 'trap_2',
        category: { ru: 'Развод', en: 'Traps & Scams', uz: 'Tuzoq va firib', kk: 'Тұзақтар' },
    termKo: '48개월 할부 (48-gae-wol)',
        termTrans: { ru: 'Рассрочка на 48', en: '48M Installment', uz: '48M To\'lov', kk: '48A Бөліп төлеу' },
    meaning: {
        ru: 'Разбивают платеж на 4 года с 5.9% годовыми, делая вас "рабом" контракта.',
            en: 'Splitting payment into 4 years with 5.9% interest, making you a contract "slave".',
                uz: 'To\'lovni 5.9% foiz bilan 4 yilga bo\'lish, shartnoma quliga aylantiradi.',
                    kk: 'Төлемді 5.9% пайызбен 4 жылға бөлу, келісімшарт құлына айналдырады.'
    },
    riskLevel: 'danger',
        riskLabel: { ru: 'ДОЛГОВОЙ КАПКАН', en: 'DEBT TRAP', uz: 'QARZ TUZOG\'I', kk: 'ҚАРЫЗ ТҰЗАҒЫ' }
},
{
    id: 'trap_3',
        category: { ru: 'Развод', en: 'Traps & Scams', uz: 'Tuzoq va firib', kk: 'Тұзақтар' },
    termKo: '반납조건 (Ban-nap-jo-geon)',
        termTrans: { ru: 'Обмен через 2 года', en: 'Return Setup', uz: '2 yildan keyin qaytarish', kk: '2 жылдан соң қайтару' },
    meaning: {
        ru: 'Нужно вернуть телефон через 2 года в идеальном состоянии для списания долга. На практике находят царапины и не списывают.',
            en: 'Must return device in perfect condition in 2 years to waive debt. They usually find scratches.',
                uz: 'Qarzni o\'chirish uchun yomonsiz telefonni 2 yildan keyin qaytarish kerak. Odatda tirnalgan joylarni topib, o\'chirmaydilar.',
                    kk: 'Қарызды өшіру үшін мінсіз телефонды 2 жылдан кейін қайтару керек. Көбінесе сызаттар тауып, өшірмейді.'
    },
    riskLevel: 'danger',
        riskLabel: { ru: 'ОБМАН (FRAUD)', en: 'FRAUD Risk', uz: 'FIRIBGAR QILISH', kk: 'АЛАЯҚТЫҚ' }
},
{
    id: 'trap_4',
        category: { ru: 'Развод', en: 'Traps & Scams', uz: 'Tuzoq va firib', kk: 'Тұзақтар' },
    termKo: '카드결합 (Card-gyeol-hap)',
        termTrans: { ru: 'Кредитная карта', en: 'Credit Card Link', uz: 'Kredit karta', kk: 'Несие картасы' },
    meaning: {
        ru: 'Скидка действительна только если вы откроете новую кредитную карту и будете тратить от 300к вон ежемесячно.',
            en: 'Discount is only valid if you open a new credit card and spend ~300k KRW monthly.',
                uz: 'Chegirma faqat yangi kredit karta ochib, oylik kamida 300k KRW ishlatsangiz ishlaydi.',
                    kk: 'Жеңілдік тек жаңа несие картасын ашып, ай сайын кемінде 300k KRW жұмсасаңыз ғана жарамды.'
    },
    riskLevel: 'warning',
        riskLabel: { ru: 'ЛОВУШКА', en: 'FINANCIAL TRAP', uz: 'MOLIYAVIY TUZOQ', kk: 'ҚАРЖЫЛЫҚ ТҰЗАҚ' }
},
{
    id: 'trap_5',
        category: { ru: 'Развод', en: 'Traps & Scams', uz: 'Tuzoq va firib', kk: 'Тұзақтар' },
    termKo: '부가서비스 (Bu-ga-seo-bi-seu)',
        termTrans: { ru: 'Навязанные опции', en: 'Add-on Services', uz: 'Qo\'shimcha xizmatlar', kk: 'Қосымша қызметтер' },
    meaning: {
        ru: 'Дорогие подписки и страховки, которые продавец заставляет держать 3-6 месяцев для скидки.',
            en: 'Expensive subscriptions and insurance that the seller forces you to keep for 3-6 months.',
                uz: 'Sotuvchi sizni 3-6 oy ushlab turishga majbur qiladigan qimmat obunalar.',
                    kk: 'Сатушы сізді 3-6 ай ұстауға мәжбүр ететін қымбат жазылымдар.'
    },
    riskLevel: 'warning',
        riskLabel: { ru: 'Скрытые расходы', en: 'Hidden Costs', uz: 'Yashirin xarajatlar', kk: 'Жасырын шығындар' }
},
{
    id: 'trap_6',
        category: { ru: 'Развод', en: 'Traps & Scams', uz: 'Tuzoq va firib', kk: 'Тұзақтар' },
    termKo: '폰테크 (Phone-tech)',
        termTrans: { ru: 'Мобильная пирамида', en: 'Phone-tech Scam', uz: 'Telefon-firibgarligi', kk: 'Телефон алаяқтығы' },
    meaning: {
        ru: 'Опасная схема обнала. Берут телефоны на ваше имя в обмен на "наличные" и исчезают.',
            en: 'Dangerous scam. Fraudsters open phone lines in your name for cash and disappear.',
                uz: 'Xavfli sxem. Firibgarlar nomingizga naqd pul uchun telefonlar ochadi va yo\'qoladi.',
                    kk: 'Қауіпті алаяқтық. Алаяқтар қолма-қол ақша үшін сіздің атыңызға телефондар ашады да, жоғалады.'
    },
    riskLevel: 'danger',
        riskLabel: { ru: 'КРИМИНАЛ / ДОЛГИ', en: 'CRIMINAL / DEBT', uz: 'JINOYAT / QARZ', kk: 'ҚЫЛМЫС / ҚАРЫЗ' }
},

// --- Связь и Операторы ---
{
    id: 'op_1',
        category: { ru: 'Операторы', en: 'Carriers', uz: 'Operatorlar', kk: 'Операторлар' },
    termKo: '번호이동 (번이)',
        termTrans: { ru: 'Перенос (MNP)', en: 'Porting (MNP)', uz: 'Raqamni o\'tkazish', kk: 'Нөмірді көшіру' },
    meaning: {
        ru: 'Переход к другому оператору связи с полным сохранением вашего текущего номера.',
            en: 'Moving to another carrier while keeping your current phone number.',
                uz: 'Hozirgi telefon raqamingizni saqlab, boshqa operatorga o\'tish.',
                    kk: 'Ағымдағы телефон нөміріңізді сақтай отырып, басқа операторға ауысу.'
    },
    riskLevel: 'safe',
        riskLabel: { ru: 'Наибольшая выгода', en: 'Max Benefit', uz: 'Eng katta foyda', kk: 'Максималды пайда' }
},
{
    id: 'op_2',
        category: { ru: 'Операторы', en: 'Carriers', uz: 'Operatorlar', kk: 'Операторлар' },
    termKo: '기기변경 (기변)',
        termTrans: { ru: 'Смена телефона', en: 'Device Upgrade', uz: 'Qurilmani o\'zgartirish', kk: 'Құрылғыны ауыстыру' },
    meaning: {
        ru: 'Покупка нового телефона без смены оператора. Субсидии обычно меньше.',
            en: 'Buying a new phone without changing carrier. Subsidies are usually lower.',
                uz: 'Operatoringizni o\'zgartirmasdan yangi telefon sotib olish. Subsidiyalar kichikroq.',
                    kk: 'Операторды өзгертпей жаңа телефон сатып алу. Жеңілдіктер әдетте төмен болады.'
    },
    riskLevel: 'neutral',
        riskLabel: { ru: 'Сохранение скидок', en: 'Keep Discounts', uz: 'Chegirmalarni saqlash', kk: 'Жеңілдіктерді сақтау' }
},
{
    id: 'op_3',
        category: { ru: 'Операторы', en: 'Carriers', uz: 'Operatorlar', kk: 'Операторлар' },
    termKo: '알뜰폰 (Al-tteul-pon)',
        termTrans: { ru: 'Виртуальный (MVNO)', en: 'Budget MVNO', uz: 'Byudjet operatori', kk: 'Бюджеттік оператор' },
    meaning: {
        ru: 'Бюджетные операторы. Арендуют вышки у большой тройки. Качество 1-в-1, цена в 3 раза ниже.',
            en: 'Budget carriers using top 3 networks. Exact same quality, 3x cheaper.',
                uz: 'Byudjetli operatorlar. Kalta tarmoqli sifat, 3 baravar arzon.',
                    kk: 'Бюджеттік операторлар. Сапасы бірдей, 3 есе арзан.'
    },
    riskLevel: 'safe',
        riskLabel: { ru: 'Выбор для экономии', en: 'Budget Choice', uz: 'Tejamkor tanlov', kk: 'Үнемдеу үшін таңдау' }
},
{
    id: 'op_4',
        category: { ru: 'Операторы', en: 'Carriers', uz: 'Operatorlar', kk: 'Операторлар' },
    termKo: '신규가입 (Sin-gyu)',
        termTrans: { ru: 'Новый номер', en: 'New Number', uz: 'Yangi raqam', kk: 'Жаңа нөмір' },
    meaning: {
        ru: 'Покупка полностью новой сим-карты с новым номером. На нее дают меньше всего бонусов.',
            en: 'Purchasing a completely new SIM with a new number. Smallest bonuses.',
                uz: 'Yangi raqam bilan mutlaqo yangi SIM lita olish. Eng kam bonus beriladi.',
                    kk: 'Жаңа нөмірмен мүлдем жаңа SIM картаны сатып алу. Ең аз бонустар беріледі.'
    },
    riskLevel: 'neutral',
        riskLabel: { ru: 'Меньше скидок', en: 'Fewer Discounts', uz: 'Kam chegirmalar', kk: 'Аз жеңілдіктер' }
},

// --- Базовые Понятия ---
{
    id: 'bas_1',
        category: { ru: 'База', en: 'Basics', uz: 'Asosiy', kk: 'Негізгі' },
    termKo: '요금제 (Yo-geum-je)',
        termTrans: { ru: 'Тарифный план', en: 'Tariff Plan', uz: 'Tarif rejasi', kk: 'Тарифтік жоспар' },
    meaning: {
        ru: 'Ваш ежемесячный тариф на связь и интернет. Обычно оплачивается в конце месяца.',
            en: 'Your monthly cell and data plan. Usually billed at the end of the month.',
                uz: 'Sizning oylik aloqa va internet tarifi. Odatda oy oxirida to\'lanadi.',
                    kk: 'Сіздің ай сайынғы байланыс және интернет тарифіңіз. Әдетте айдың соңында төленеді.'
    },
    riskLevel: 'safe',
        riskLabel: { ru: 'Основа', en: 'Foundation', uz: 'Asos', kk: 'Негіз' }
},
{
    id: 'bas_2',
        category: { ru: 'База', en: 'Basics', uz: 'Asosiy', kk: 'Негізгі' },
    termKo: '약정 (Yak-jeong)',
        termTrans: { ru: 'Договор (Срок)', en: 'Contract Period', uz: 'Shartnoma (Muddat)', kk: 'Келісімшарт (Мерзім)' },
    meaning: {
        ru: 'Обязательный срок контракта (обычно 1 или 2 года), за который вам дают скидку на телефон или тариф.',
            en: 'Mandatory contract period (usually 1/2 years) in exchange for device or plan discounts.',
                uz: 'Telefon yoki tarifga chegirma beriladigan majburiy shartnoma muddati (odatda 1-2 yil).',
                    kk: 'Телефонға немесе тарифке жеңілдік берілетін міндетті келісімшарт мерзімі (әдетте 1 немесе 2 жыл).'
    },
    riskLevel: 'neutral',
        riskLabel: { ru: 'Срок контракта', en: 'Contract Length', uz: 'Shartnoma muddati', kk: 'Келісімшарт мерзімі' }
},
{
    id: 'bas_3',
        category: { ru: 'База', en: 'Basics', uz: 'Asosiy', kk: 'Негізгі' },
    termKo: '위약금 (Wi-yak-geum)',
        termTrans: { ru: 'Неустойка (Штраф)', en: 'Cancellation Penalty', uz: 'Jarima (Bekor qilish uchun)', kk: 'Айыппұл (Шартты бұзғаны үшін)' },
    meaning: {
        ru: 'Штраф, который вы платите оператору, если расторгаете контракт (약정) раньше оговоренного срока.',
            en: 'Penalty fee you must pay to the carrier if you cancel your contract early.',
                uz: 'Shartnomani belgilangan muddatdan oldin bekor qilsangiz, operatorga to\'lanadigan jarima.',
                    kk: 'Келісімшарт мерзімінен бұрын бұзылған жағдайда операторға төленетін айыппұл.'
    },
    riskLevel: 'warning',
        riskLabel: { ru: 'Дополнительные расходы', en: 'Extra Costs', uz: 'Qo\'shimcha xarajatlar', kk: 'Қосымша шығындар' }
},
{
    id: 'bas_4',
        category: { ru: 'База', en: 'Basics', uz: 'Asosiy', kk: 'Негізгі' },
    termKo: '부가세 (Bu-ga-se)',
        termTrans: { ru: 'НДС (Налог 10%)', en: 'VAT (10% Tax)', uz: 'QQS (10% Soliq)', kk: 'ҚҚС (10% Салық)' },
    meaning: {
        ru: 'Налог на добавленную стоимость. Часто продавцы называют сумму тарифа "до" налога. Всегда прибавляйте 10%.',
            en: 'Value Added Tax. Sellers often quote prices without it. Always add 10%.',
                uz: 'Qo\'shilgan qiymat solig\'i. Ko\'pincha soliqsiz narx aytiladi. Doim 10% qo\'shing.',
                    kk: 'Қосылған құн салығы. Сатушылар жиі салықсыз бағаны атайды. Әрқашан 10% қосыңыз.'
    },
    riskLevel: 'info',
        riskLabel: { ru: 'Обратите внимание', en: 'Take Note', uz: 'E\'tibor bering', kk: 'Назар аударыңыз' }
},
{
    id: 'bas_5',
        category: { ru: 'База', en: 'Basics', uz: 'Asosiy', kk: 'Негізгі' },
    termKo: '데이터 무제한 (De-i-teo Mu-je-han)',
        termTrans: { ru: 'Безлимитный интернет', en: 'Unlimited Data', uz: 'Cheksiz internet', kk: 'Шексіз интернет' },
    meaning: {
        ru: 'Тариф, где после исчерпания основного трафика на высокой скорости, скорость падает (например до 1Mbps-5Mbps), но интернет не отключается и доплаты нет.',
            en: 'Plan where after high-speed data runs out, speed drops but internet remains free and unlimited.',
                uz: 'Asosiy trafik tugagach tezlik pasayadi, lekin internet o\'chmaydi va bepul qoladi.',
                    kk: 'Негізгі трафик таусылғаннан кейін жылдамдық төмендейтін, бірақ интернет өшпейтін және тегін қалатын тариф.'
    },
    riskLevel: 'safe',
        riskLabel: { ru: 'Без доплат', en: 'No Extra Fees', uz: 'Qo\'shimcha to\'lovsiz', kk: 'Қосымша төлемсіз' }
},
{
    id: 'bas_6',
        category: { ru: 'База', en: 'Basics', uz: 'Asosiy', kk: 'Негізгі' },
    termKo: '선불폰 (Seon-bul-pon)',
        termTrans: { ru: 'Предоплата (Prepaid)', en: 'Prepaid Phone', uz: 'Oldindan to\'lov (Prepaid)', kk: 'Күні бұрын төлеу (Prepaid)' },
    meaning: {
        ru: 'Вы кладете деньги на счет заранее (как дорожный билет). Идеально для туристов, нелегалов или людей с плохой кредиткой.',
            en: 'You pay upfront for texts/data. Ideal for tourists, or people without credit history.',
                uz: 'Siz oldindan pul kiritasiz. Turistlar, vizasizlar yoki kredit tarixi yomonlar uchun mos.',
                    kk: 'Ақшаны алдын ала саласыз. Туристерге, заңсыз жүргендерге немесе несие тарихы нашар адамдарға қолайлы.'
    },
    riskLevel: 'neutral',
        riskLabel: { ru: 'Всем доступно', en: 'Accessible to All', uz: 'Barchaga ochiq', kk: 'Барлығына қолжетімді' }
},
{
    id: 'bas_7',
        category: { ru: 'База', en: 'Basics', uz: 'Asosiy', kk: 'Негізгі' },
    termKo: '가족결합 (Ga-jok-gyeol-hap)',
        termTrans: { ru: 'Семейная скидка', en: 'Family Discount', uz: 'Oila chegirmasi', kk: 'Отбасылық жеңілдік' },
    meaning: {
        ru: 'Привязка номеров и интернета членов семьи к одному оператору (SK, KT, LG). Дает мощную скидку (до 50%) всем участникам.',
            en: 'Linking family lines/internet to one carrier for huge combined discounts (up to 50%).',
                uz: 'Oila a\'zolari raqamlarini bitta operatorga bog\'lash orqali barchaga katta chegirma (50% gacha).',
                    kk: 'Отбасы мүшелерінің телефондары мен интернеттерін бір операторға біріктіру (SK, KT, LG). Бәріне үлкен жеңілдік береді (50%-ға дейін).'
    },
    riskLevel: 'safe',
        riskLabel: { ru: 'Очень выгодно', en: 'Highly Profitable', uz: 'Juda foydali', kk: 'Өте тиімді' }
}
];
