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
        termTrans: { ru: 'Unlocked', en: 'Unlocked', uz: 'Qulfksiz', kk: 'Бұғатталмаған' },
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
        category: { ru: 'Сделки', en: 'Deals', uz: 'Kelishuvlar', kk: 'Мәмілелер' },
        termKo: '현완 (ㅎㅇ) (Hyeon-wan)',
        termTrans: { ru: 'Оплата наличными', en: 'Cash Payment', uz: 'Naqd to\'lov', kk: 'Қолма-қол ақша төлеу' },
        meaning: {
            ru: 'Полная оплата за телефон сразу 100% "кэшем". Позволяет избежать огромных процентов по рассрочке (5.9%).',
            en: 'Full payment for the phone in cash. Allows avoiding huge installment rates (5.9%).',
            uz: 'Telefon uchun 100% naqd to\'lov. Katta foizlardan (5.9%) qochish imkonini beradi.',
            kk: 'Телефон үшін 100% қолма-қол төлем. Үлкен пайыздық мөлшерлемелерден (5.9%) аулақ болуға мүмкіндік береді.'
        },
        riskLevel: 'safe',
        riskLabel: { ru: 'Рекомендуется', en: 'Recommended', uz: 'Tavsiya etiladi', kk: 'Ұсынылады' }
    },
    {
        id: 'fin_2',
        category: { ru: 'Сделки', en: 'Deals', uz: 'Kelishuvlar', kk: 'Мәмілелер' },
        termKo: '차비 (Cha-bi)',
        termTrans: { ru: 'Доплата ("На такси")', en: 'Cashback ("Taxi fare")', uz: 'Qo\'shimcha to\'lov', kk: 'Қосымша төлем' },
        meaning: {
            ru: 'Когда субсидии превышают цену. Вы получаете телефон и еще наличные сверху.',
            en: 'When subsidies exceed the price. You receive the phone and extra cash on top.',
            uz: 'Subsidiyalar narxdan oshib ketganda. Telefon va ustidan naqd pul olasiz.',
            kk: 'Жеңілдіктер бағадан асқан кезде. Сіз телефонды және үстіне қолма-қол ақша аласыз.'
        },
        riskLevel: 'warning',
        riskLabel: { ru: 'РИСК ОБМАНА', en: 'SCAM RISK', uz: 'FIRIBGARLIK XAVFI', kk: 'АЛАЯҚТЫҚ ҚАУПІ' }
    },
    {
        id: 'fin_3',
        category: { ru: 'Сделки', en: 'Deals', uz: 'Kelishuvlar', kk: 'Мәмілелер' },
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
        id: 'fin_4',
        category: { ru: 'Сделки', en: 'Deals', uz: 'Kelishuvlar', kk: 'Мәмілелер' },
        termKo: '선약 (Seon-yak)',
        termTrans: { ru: 'Скидка -25%', en: '-25% Discount', uz: '-25% chegirma', kk: '-25% жеңілдік' },
        meaning: {
            ru: 'Выбор скидки на абонентскую плату вместо скидки на сам смартфон (25%).',
            en: 'Choosing a discount on the monthly plan instead of the device (25%).',
            uz: 'Qurilma o\'rniga oylik tarifga 25% chegirma.',
            kk: 'Құрылғы орнына айлық тарифке 25% жеңілдік.'
        },
        riskLevel: 'safe',
        riskLabel: { ru: 'Выгодно долгосрочно', en: 'Long-term Benefit', uz: 'Uzoq muddatli foyda', kk: 'Ұзақ мерзімді пайда' }
    },
    {
        id: 'fin_5',
        category: { ru: 'Сделки', en: 'Deals', uz: 'Kelishuvlar', kk: 'Мәмілелер' },
        termKo: '공시 (Gong-si)',
        termTrans: { ru: 'Скидка на смартфон', en: 'Device Discount', uz: 'Qurilma chegirmasi', kk: 'Құрылғы жеңілдігі' },
        meaning: {
            ru: 'Официальная разовая скидка (субсидия) от оператора на цену "железа" при подписании контракта.',
            en: 'Official one-time subsidy from the carrier on the device price when signing.',
            uz: 'Shartnomani imzolashda operatorning qurilma uchun rasmiy bir martalik subsidiyasi.',
            kk: 'Келісімшарт жасасқан кезде оператордың құрылғыға беретін ресми бір реттік субсидиясы.'
        },
        riskLevel: 'safe',
        riskLabel: { ru: 'Выгодно разово', en: 'One-time Benefit', uz: 'Bir martalik foyda', kk: 'Бір реттік пайда' }
    },
    {
        id: 'fin_6',
        category: { ru: 'Сделки', en: 'Deals', uz: 'Kelishuvlar', kk: 'Мәмілелер' },
        termKo: '할부원금 (Hal-bu-won-geum)',
        termTrans: { ru: 'Остаток долга', en: 'Principal Amount', uz: 'Asosiy qarz miqdori', kk: 'Негізгі қарыз сомасы' },
        meaning: {
            ru: 'Итоговая стоимость телефона после вычета всех скидок. Именно эту сумму вы будете выплачивать.',
            en: 'Final cost of the phone after all discounts. You will pay this exact amount.',
            uz: 'Barcha chegirmalardan keyin telefonning yakuniy narxi. Aynan shu miqdorni to\'laysiz.',
            kk: 'Барлық жеңілдіктерден кейінгі телефонның соңғы бағасы. Сіз дәл осы соманы төлейсіз.'
        },
        riskLevel: 'info',
        riskLabel: { ru: 'Проверять всегда', en: 'Always Check', uz: 'Har doim tekshiring', kk: 'Әрқашан тексеріңіз' }
    },
    {
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
    }
];
