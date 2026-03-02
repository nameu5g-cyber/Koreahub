import attractions from './attractions.json';
import general from './general.json';
import visa from './visa.json';
import telecom from './telecom.json';
import medical from './medical.json';
import jobs from './jobs.json';
import { VerticalConfig, RegistryEntity } from './types';

export const VERTICALS: Record<string, VerticalConfig> = {
    general: { ...general, icon: 'Info' } as any,
    visa: { ...visa, icon: 'Landmark' } as any,
    telecom: { ...telecom, icon: 'Phone' } as any,
    medical: medical as any,
    jobs: jobs as any,
    attractions: attractions as any,
};

export const REGISTRY_DATA: RegistryEntity[] = [
    {
        id: 'visa_seoul_mokdong',
        verticalCode: 'visa',
        data: {
            name: {
                ru: 'Иммиграционный центр (Сеул - Mokdong)',
                en: 'Seoul Immigration Office (Main)',
                ko: '서울출입국·외국인청',
                kk: 'Сеул иммиграциялық орталығы (Мокдон)',
                uz: 'Seul immigratsiya markazi (Mokdong)'
            },
            nameKo: '서울출입국·외국인청',
            region: 'seoul',
            address: {
                ru: 'Сеул, Янчхон-гу, Мокдондон-ро 151',
                en: '151 Mokdongdong-ro, Yangcheon-gu, Seoul',
                kk: 'Сеул, Янчхон-гу, Мокдондон-ро 151',
                uz: 'Seul, Yangcheon-gu, Mokdongdong-ro 151'
            },
            addressKo: '서울특별시 양천구 목동동로 151',
            phone: '02-2650-6211',
            website: 'https://www.hikorea.go.kr',
            bookingRequired: true,
            services: ['extension', 'registration', 'change'],
            languages: ['ko', 'en'],
            tips: { ru: 'Главный офис. Обязательно записывайтесь за 2-3 недели.', en: 'Main office. Booking 2-3 weeks in advance is mandatory.' },
            naverMapUrl: 'https://naver.me/GGh7K4vE'
        }
    },
    {
        id: 'visa_seoul_sejong',
        verticalCode: 'visa',
        data: {
            name: {
                ru: 'Иммиграционный центр (Jongno - Sejongno)',
                en: 'Seoul Immigration (Sejongno Branch)',
                ko: '서울출입국 세종로출장소',
                kk: 'Сеул иммиграциялық кеңсесі (Седжонно)',
                uz: 'Seul immigratsiya ofisi (Sejongno)'
            },
            nameKo: '서울출입국·외국인청 세종로출장소',
            region: 'seoul',
            address: {
                ru: 'Сеул, Чонно-гу, Чон-ро 38',
                en: '38 Jong-ro, Jongno-gu, Seoul',
                kk: 'Сеул, Чонно-гу, Чон-ро 38',
                uz: 'Seul, Jongno-gu, Jong-ro 38'
            },
            addressKo: '서울특별시 종로구 종로 38 (서린동)',
            phone: '02-731-1799',
            website: 'https://www.hikorea.go.kr',
            bookingRequired: true,
            services: ['extension', 'registration'],
            languages: ['ko', 'en', 'zh'],
            tips: { ru: 'Удобно для тех, кто живет в центре. Очереди могут быть меньше.', en: 'Convenient for central residents. Often slightly faster.' },
            naverMapUrl: 'https://naver.me/FBwP8vWf'
        }
    },
    {
        id: 'visa_ansan',
        verticalCode: 'visa',
        data: {
            name: {
                ru: 'Иммиграционный центр (Ансан)',
                en: 'Ansan Immigration Office',
                ko: '수원출입국 안산출장소',
                kk: 'Ансан иммиграциялық кеңсесі',
                uz: 'Ansan immigratsiya ofisi'
            },
            nameKo: '수원출입국·외국인청 안산출장소',
            region: 'gyeonggi',
            address: {
                ru: 'Ансан, Данвон-гу, Гвангдек 4-ро 96',
                en: '96 Gwangdeok 4-ro, Danwon-gu, Ansan',
                kk: 'Ансан, Данвон-гу, Гвангдек 4-ро 96',
                uz: 'Ansan, Danwon-gu, Gwangdeok 4-ro 96'
            },
            addressKo: '경기도 안산시 단원구 광덕4로 96',
            phone: '031-364-5700',
            website: 'https://www.hikorea.go.kr',
            bookingRequired: true,
            services: ['extension', 'change', 'registration'],
            languages: ['ko', 'ru', 'uz'],
            tips: { ru: 'Работает с русскоговорящими. Очень загружен, записывайтесь заранее!', en: 'High volume office. Booking is essential!' },
            naverMapUrl: 'https://naver.me/FpX1C3nZ'
        }
    },
    {
        id: 'visa_incheon',
        verticalCode: 'visa',
        data: {
            name: {
                ru: 'Иммиграционный центр (Инчхон)',
                en: 'Incheon Immigration Office',
                ko: '인천출입국·외국인청',
                kk: 'Инчхон иммиграциялық орталығы',
                uz: 'Incheon immigratsiya markazi'
            },
            nameKo: '인천출입국·외국인청',
            region: 'incheon',
            address: {
                ru: 'Инчхон, Чжун-гу, Сохэ-дэро 393',
                en: '393 Seohae-daero, Jung-gu, Incheon',
                kk: 'Инчхон, Чжун-гу, Сохэ-дэро 393',
                uz: 'Incheon, Jung-gu, Seohae-daero 393'
            },
            addressKo: '인천광역시 중구 서해대로 393',
            phone: '032-890-6300',
            website: 'https://www.hikorea.go.kr',
            bookingRequired: true,
            services: ['extension', 'change'],
            languages: ['ko', 'en'],
            tips: { ru: 'Находится рядом с портом. Огромное здание.', en: 'Located near the port area. Large facility.' },
            naverMapUrl: 'https://naver.me/G8UtD9z0'
        }
    },
    {
        id: 'visa_seoul_nambu',
        verticalCode: 'visa',
        data: {
            name: {
                ru: 'Иммиграционный офис (Сеул - Nambu)',
                en: 'Seoul Nambu Immigration Office',
                ko: '서울남부출입국·외국인사무소',
                kk: 'Сеул оңтүстік иммиграциялық кеңсесі',
                uz: 'Seul janubiy immigratsiya ofisi'
            },
            nameKo: '서울남부출입국·외국인사무소',
            region: 'seoul',
            address: {
                ru: 'Сеул, Гангсео-гу, Магок-со 1-ро 48',
                en: '48 Magokseo 1-ro, Gangseo-gu, Seoul',
                kk: 'Сеул, Кансо-гу, Магок-со 1-ро 48',
                uz: 'Seul, Gangseo-gu, Magok-so 1-ro 48'
            },
            addressKo: '서울특별시 강서구 마곡서1로 48',
            phone: '02-6980-4813',
            bookingRequired: true,
            services: ['extension', 'registration'],
            naverMapUrl: 'https://naver.me/seoul_nambu'
        }
    },
    {
        id: 'visa_suwon',
        verticalCode: 'visa',
        data: {
            name: {
                ru: 'Иммиграционный центр (Сувон)',
                en: 'Suwon Immigration Office',
                ko: '수원출입국·외국인청',
                kk: 'Сувон иммиграциялық орталығы',
                uz: 'Suwon immigratsiya markazi'
            },
            nameKo: '수원출입국·외국인청',
            region: 'gyeonggi',
            address: {
                ru: 'Сувон, Йонтонг-гу, Бандаль-ро 39',
                en: '39 Bandal-ro, Yeongtong-gu, Suwon',
                kk: 'Сувон, Йонтонг-гу, Бандаль-ро 39',
                uz: 'Suwon, Yeongtong-gu, Bandal-ro 39'
            },
            addressKo: '경기도 수원시 영통구 반달로 39',
            phone: '031-695-3817',
            bookingRequired: true,
            naverMapUrl: 'https://naver.me/suwon_visa'
        }
    },
    {
        id: 'visa_busan',
        verticalCode: 'visa',
        data: {
            name: {
                ru: 'Иммиграционный центр (Пусан)',
                en: 'Busan Immigration Office',
                ko: '부산출입국·외국인청',
                kk: 'Пусан иммиграциялық орталығы',
                uz: 'Busan immigratsiya markazi'
            },
            nameKo: '부산출입국·외국인청',
            region: 'gyeongsang',
            address: {
                ru: 'Пусан, Чжун-гу, Чунгджанг-дэро 22-1',
                en: '22-1 Chungjang-daero, Jung-gu, Busan',
                kk: 'Пусан, Чжун-гу, Чунгджанг-дэро 22-1',
                uz: 'Busan, Jung-gu, Chungjang-daero 22-1'
            },
            addressKo: '부산광역시 중구 충장대로 22-1',
            phone: '051-461-3091',
            bookingRequired: true,
            naverMapUrl: 'https://naver.me/busan_visa'
        }
    },
    {
        id: 'visa_daegu',
        verticalCode: 'visa',
        data: {
            name: {
                ru: 'Иммиграционный центр (Тэгу)',
                en: 'Daegu Immigration Office',
                ko: '대구출입국·외국인사무소',
                kk: 'Тэгу иммиграциялық орталығы',
                uz: 'Daegu immigratsiya markazi'
            },
            nameKo: '대구출입국·외국인사무소',
            region: 'gyeongsang',
            address: {
                ru: 'Тэгу, Дон-гу, Инновенли-ро 345',
                en: '345 Innovalley-ro, Dong-gu, Daegu',
                kk: 'Тэгу, Дон-гу, Инновенли-ро 345',
                uz: 'Daegu, Dong-gu, Innovalley-ro 345'
            },
            addressKo: '대구광역시 동구 이노밸리로 345',
            phone: '053-980-3512',
            bookingRequired: true,
            naverMapUrl: 'https://naver.me/daegu_visa'
        }
    },
    {
        id: 'visa_yangju',
        verticalCode: 'visa',
        data: {
            name: {
                ru: 'Иммиграционный центр (Янджу)',
                en: 'Yangju Immigration Office',
                ko: '양주출입국·외국인사무소',
                kk: 'Янджу иммиграциялық орталығы',
                uz: 'Yangju immigratsiya markazi'
            },
            nameKo: '양주출입국·외국인사무소',
            region: 'gyeonggi',
            address: {
                ru: 'Янджу, Пхенхва-ро 1475-23',
                en: '23 Pyeonghwa-ro 1475beon-gil, Yangju',
                kk: 'Янджу, Пхенхва-ро 1475-23',
                uz: 'Yangju, Pyeonghwa-ro 1475-23'
            },
            addressKo: '경기도 양주시 평화로 1475번길 23',
            phone: '031-828-9301',
            bookingRequired: true,
            naverMapUrl: 'https://naver.me/yangju_visa'
        }
    },
    {
        id: 'visa_gwangju',
        verticalCode: 'visa',
        data: {
            name: {
                ru: 'Иммиграционный центр (Кванджу)',
                en: 'Gwangju Immigration Office',
                ko: '광주출입국·외국인사무소',
                kk: 'Кванджу иммиграциялық орталығы',
                uz: 'Gwangju immigratsiya markazi'
            },
            nameKo: '광주출입국·외국인사무소',
            region: 'jeolla',
            address: {
                ru: 'Кванджу, Со-гу, Сангму-дэро 911',
                en: '911 Sangmu-daero, Seo-gu, Gwangju',
                kk: 'Кванджу, Со-гу, Сангму-дэро 911',
                uz: 'Gwangju, Seo-gu, Sangmu-daero 911'
            },
            addressKo: '광주광역시 서구 상무대로 911',
            phone: '062-605-5206',
            bookingRequired: true,
            naverMapUrl: 'https://naver.me/gwangju_visa'
        }
    },
    {
        id: 'visa_daejeon',
        verticalCode: 'visa',
        data: {
            name: {
                ru: 'Иммиграционный центр (Тэджон)',
                en: 'Daejeon Immigration Office',
                ko: '대전출입국·외국인사무소',
                kk: 'Тэджон иммиграциялық орталығы',
                uz: 'Daejeon immigratsiya markazi'
            },
            nameKo: '대전출입국·외국인사무소',
            region: 'chungcheong',
            address: {
                ru: 'Тэджон, Чжун-гу, Чжунгчхон-донг 16-8',
                en: '16-8 Jungchon-dong, Jung-gu, Daejeon',
                kk: 'Тэджон, Чжун-гу, Чжунгчхон-донг 16-8',
                uz: 'Daejeon, Jung-gu, Jungchon-dong 16-8'
            },
            addressKo: '대전광역시 중구 중촌동 16-8',
            phone: '042-220-2101',
            bookingRequired: true,
            naverMapUrl: 'https://naver.me/daejeon_visa'
        }
    },
    {
        id: 'visa_jeonju',
        verticalCode: 'visa',
        data: {
            name: {
                ru: 'Иммиграционный центр (Чонджу)',
                en: 'Jeonju Immigration Office',
                ko: '전주출입국·외국인사무소',
                kk: 'Чонджу иммиграциялық орталығы',
                uz: 'Jeonju immigratsiya markazi'
            },
            nameKo: '전주출입국·외국인사무소',
            region: 'jeolla',
            address: {
                ru: 'Чонджу, Докджин-гу, Хосон-ро 213',
                en: '213 Hoseong-ro, Deokjin-gu, Jeonju',
                kk: 'Чонджу, Докджин-гу, Хосон-ро 213',
                uz: 'Jeonju, Dokjin-gu, Xoson-ro 213'
            },
            addressKo: '전라북도 전주시 덕진구 호성로 213',
            phone: '063-245-6164',
            bookingRequired: true,
            naverMapUrl: 'https://naver.me/jeonju_visa'
        }
    },
    {
        id: 'visa_cheongju',
        verticalCode: 'visa',
        data: {
            name: {
                ru: 'Иммиграционный центр (Чхонджу)',
                en: 'Cheongju Immigration Office',
                ko: '청주출입국·외국인사무소',
                kk: 'Чхонджу иммиграциялық орталығы',
                uz: 'Cheongju immigratsiya markazi'
            },
            nameKo: '청주출입국·외국인사무소',
            region: 'chungcheong',
            address: {
                ru: 'Чхонджу, Санг당-гу, Бивон-ро 1',
                en: '1 Biwon-ro, Sangdang-gu, Cheongju',
                kk: 'Чхонджу, Санг당-гу, Бивон-ро 1',
                uz: 'Cheongju, Sangdang-gu, Biwon-ro 1'
            },
            addressKo: '충청북도 청주시 상당구 비원로 1',
            phone: '043-230-9000',
            bookingRequired: true,
            naverMapUrl: 'https://naver.me/cheongju_visa'
        }
    },
    {
        id: 'visa_jeju',
        verticalCode: 'visa',
        data: {
            name: {
                ru: 'Иммиграционный центр (Чеджу)',
                en: 'Jeju Immigration Office',
                ko: '제주출입국·외국인서비스',
                kk: 'Чеджу иммиграциялық орталығы',
                uz: 'Jeju immigratsiya markazi'
            },
            nameKo: '제주출입국·외국인서비스센터',
            region: 'jeju',
            address: {
                ru: 'Чеджу, Йондам-ро 3',
                en: '3 Yongdam-ro, Jeju-si, Jeju-do',
                kk: 'Чеджу, Йондам-ро 3',
                uz: 'Jeju, Yongdam-ro 3'
            },
            addressKo: '제주특별자치도 제주시 용담로 3',
            phone: '064-722-3494',
            bookingRequired: true,
            naverMapUrl: 'https://naver.me/jeju_visa'
        }
    },
    {
        id: 'visa_pyeongtaek',
        verticalCode: 'visa',
        data: {
            name: {
                ru: 'Иммиграционный офис (Пхёнтхэк)',
                en: 'Pyeongtaek Immigration Office',
                ko: '수원출입국 평택출장소',
                kk: 'Пхёнтхэк иммиграциялық кеңсесі',
                uz: 'Pyeongtaek immigratsiya ofisi'
            },
            nameKo: '수원출입국·외국인청 평택출장소',
            region: 'gyeonggi',
            address: {
                ru: 'Пхёнтхэк, Би전 5-ро 16',
                en: '16 Bijeon 5-ro, Pyeongtaek',
                kk: 'Пхёнтхэк, Би전 5-ро 16',
                uz: 'Pyeongtaek, Bijeon 5-ro 16'
            },
            addressKo: '경기도 평택시 비전5로 16',
            phone: '031-8053-7000',
            bookingRequired: true,
            naverMapUrl: 'https://naver.me/pyeongtaek_visa'
        }
    },
    {
        id: 'visa_cheonan',
        verticalCode: 'visa',
        data: {
            name: {
                ru: 'Иммиграционный офис (Чхонан)',
                en: 'Cheonan Immigration Office',
                ko: '대전출입국 천안출장소',
                kk: 'Чхонан иммиграциялық кеңсесі',
                uz: 'Cheonan immigratsiya ofisi'
            },
            nameKo: '대전출입국·외국인사무소 천안출장소',
            region: 'chungcheong',
            address: {
                ru: 'Чхонан, Собу-дэро 82',
                en: '82 Seobu-daero, Seobuk-gu, Cheonan',
                kk: 'Чхонан, Собу-дэро 82',
                uz: 'Cheonan, Sobu-daero 82'
            },
            addressKo: '충청남도 천안시 서북구 서부대로 82',
            phone: '041-621-1347',
            bookingRequired: true,
            naverMapUrl: 'https://naver.me/cheonan_visa'
        }
    },
    {
        id: 'visa_pohang',
        verticalCode: 'visa',
        data: {
            name: {
                ru: 'Иммиграционный офис (Пхохан)',
                en: 'Pohang Immigration Office',
                ko: '대구출입국 포항출장소',
                kk: 'Пхохан иммиграциялық кеңсесі',
                uz: 'Poxan immigratsiya ofisi'
            },
            nameKo: '대구출입국·외국인사무소 포항출장소',
            region: 'gyeongsang',
            address: {
                ru: 'Пхохан, Учхангдонг-ро 135',
                en: '135 Uchangdong-ro, Buk-gu, Pohang',
                kk: 'Пхохан, Учхангдонг-ро 135',
                uz: 'Poxan, Ushengdong-ro 135'
            },
            addressKo: '경상북도 포항시 북구 우창동로 135',
            phone: '054-247-2971',
            bookingRequired: true,
            naverMapUrl: 'https://naver.me/pohang_visa'
        }
    },
    {
        id: 'visa_gimhae',
        verticalCode: 'visa',
        data: {
            name: {
                ru: 'Иммиграционный офис (Кимхэ)',
                en: 'Gimhae Immigration Office',
                ko: '부산출입국 김해출장소',
                kk: 'Кимхэ иммиграциялық кеңсесі',
                uz: 'Gimhae immigratsiya ofisi'
            },
            nameKo: '부산출입국·외국인청 김해출장소',
            region: 'gyeongsang',
            address: {
                ru: 'Кимхэ, Гимхэ-дэро 2350',
                en: '2350 Daejeo 2-dong, Gangseo-gu, Busan',
                kk: 'Кимхэ, Гимхэ-дэро 2350',
                uz: 'Gimhae, Gimhae-daero 2350'
            },
            addressKo: '부산광역시 강서구 대저2동 2350',
            phone: '051-979-1300',
            bookingRequired: true,
            naverMapUrl: 'https://naver.me/gimhae_visa'
        }
    },
    {
        id: 'visa_ulsan',
        verticalCode: 'visa',
        data: {
            name: {
                ru: 'Иммиграционный центр (Ульсан)',
                en: 'Ulsan Immigration Office',
                ko: '울산출입국·외국인사무소',
                kk: 'Ульсан иммиграциялық орталығы',
                uz: 'Ulsan immigratsiya markazi'
            },
            nameKo: '울산출입국·외국인사무소',
            region: 'gyeongsang',
            address: {
                ru: 'Ульсан, Чжун-гу, Чжонга-ро 405-1',
                en: '405-1 Jongga-ro, Jung-gu, Ulsan',
                kk: 'Ульсан, Чжун-гу, Чжонга-ро 405-1',
                uz: 'Ulsan, Jung-gu, Jongga-ro 405-1'
            },
            addressKo: '울산광역시 중구 종가로 405-1',
            phone: '052-279-8801',
            bookingRequired: true,
            naverMapUrl: 'https://naver.me/ulsan_visa'
        }
    },
    {
        id: 'visa_changwon',
        verticalCode: 'visa',
        data: {
            name: {
                ru: 'Иммиграционный офис (Чханвон)',
                en: 'Changwon Immigration Office',
                ko: '창원출입국·외국인사무소',
                kk: 'Чханвон иммиграциялық кеңсесі',
                uz: 'Changwon immigratsiya ofisi'
            },
            nameKo: '창원출입국·외국인사무소',
            region: 'gyeongsang',
            address: {
                ru: 'Чханвон, Масанхаппо-гу, Чже-2-буду-ро 30',
                en: '30 Je-2-budu-ro, Masanhappo-gu, Changwon',
                kk: 'Чханвон, Масанхаппо-гу, Чже-2-буду-ро 30',
                uz: 'Changwon, Masanhappo-gu, Je-2-budu-ro 30'
            },
            addressKo: '경상남도 창원시 마산합포구 제2부두로 30',
            phone: '055-981-6000',
            bookingRequired: true,
            naverMapUrl: 'https://naver.me/changwon_visa'
        }
    },
    {
        id: 'visa_chuncheon',
        verticalCode: 'visa',
        data: {
            name: {
                ru: 'Иммиграционный центр (Чхунчхон)',
                en: 'Chuncheon Immigration Office',
                ko: '춘천출입국·외국인사무소',
                kk: 'Чхунчхон иммиграциялық орталығы',
                uz: 'Chuncheon immigratsiya markazi'
            },
            nameKo: '춘천출입국·외국인사무소',
            region: 'gangwon',
            address: {
                ru: 'Чхунчхон, Саам-гиль 12',
                en: '12 Saam-gil, Chuncheon',
                kk: 'Чхунчхон, Саам-гиль 12',
                uz: 'Chuncheon, Saam-gil 12'
            },
            addressKo: '강원특별자치도 춘천시 동내면 사암길 12',
            phone: '033-269-3210',
            bookingRequired: true,
            naverMapUrl: 'https://naver.me/chuncheon_visa'
        }
    },
    {
        id: 'visa_sokcho',
        verticalCode: 'visa',
        data: {
            name: {
                ru: 'Иммиграционный офис (Сокчо)',
                en: 'Sokcho Immigration Branch',
                ko: '춘천출입국 속초출장소',
                kk: 'Сокчо иммиграциялық кеңсесі',
                uz: 'Sokcho immigratsiya ofisi'
            },
            nameKo: '춘천출입국·외국인사무소 속초출장소',
            region: 'gangwon',
            address: {
                ru: 'Сокчо, Чхончхохобан-ро 189',
                en: '189 Cheongcho-hoban-ro, Sokcho',
                kk: 'Сокчо, Чхончхохобан-ро 189',
                uz: 'Sokcho, Cheongcho-hoban-ro 189'
            },
            addressKo: '강원특별자치도 속초시 청초호반로 189',
            phone: '033-636-8614',
            bookingRequired: true,
            naverMapUrl: 'https://naver.me/sokcho_visa'
        }
    },
    {
        id: 'visa_donghae',
        verticalCode: 'visa',
        data: {
            name: {
                ru: 'Иммиграционный офис (Тонхэ)',
                en: 'Donghae Immigration Branch',
                ko: '춘천출입국 동해출장소',
                kk: 'Тонхэ иммиграциялық кеңсесі',
                uz: 'Donghae immigratsiya ofisi'
            },
            nameKo: '춘천출입국·외국인사무소 동해출장소',
            region: 'gangwon',
            address: {
                ru: 'Тонхэ, Хэан-ро 225',
                en: '225 Haean-ro, Donghae',
                kk: 'Тонхэ, Хэан-ро 225',
                uz: 'Donghae, Haean-ro 225'
            },
            addressKo: '강원특별자치도 동해시 해안로 225',
            phone: '033-535-5723',
            bookingRequired: true,
            naverMapUrl: 'https://naver.me/donghae_visa'
        }
    },
    {
        id: 'telecom_ntele_hq',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (Центральный офис)', en: 'Ntelecom Main Center', ko: '앤텔레콤 개통센터', kk: 'Ntelecom (Орталық кеңсе)', uz: 'Ntelecom (Markaziy ofis)' },
            nameKo: '앤텔레콤 본사/강동점',
            region: 'seoul',
            address: { ru: 'Сеул, Гандон-гу, Соннэ-дон 449-15', en: '449-15 Seongnae-dong, Gangdong-gu, Seoul', kk: 'Сеул, Кандон-гу, Соннэ-дон 449-15', uz: 'Seul, Gangdong-gu, Sonnae-dong 449-15' },
            addressKo: '서울특별시 강동구 성내동 449-15',
            phone: '02-474-3010',
            messenger: 'ntelecom7',
            availableServices: ['prepaid', 'consult', 'identification'],
            tips: { ru: 'Быстрая активация для экспатов. Говорят по-простому.', en: 'Fast activation for expats. Very helpful staff.' },
            naverMapUrl: 'https://naver.me/ telecom_sample'
        }
    },
    {
        id: 'telecom_ntele_seoul______bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (스마트마포BP)', en: 'Ntelecom 스마트마포BP', ko: '앤텔레콤 스마트마포BP센터', kk: 'Ntelecom (스마트마포BP)', uz: 'Ntelecom (스마트마포BP)' },
            nameKo: '앤텔레콤 스마트마포BP',
            region: 'seoul',
            address: { ru: '서울 마포구 잔다리로 77 (서교동) 대창빌딩 401호', en: '서울 마포구 잔다리로 77 (서교동) 대창빌딩 401호', kk: '서울 마포구 잔다리로 77 (서교동) 대창빌딩 401호', uz: '서울 마포구 잔다리로 77 (서교동) 대창빌딩 401호' },
            addressKo: '서울 마포구 잔다리로 77 (서교동) 대창빌딩 401호',
            phone: '02-3142-2016',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/서울%20마포구%20잔다리로%2077%20(서교동)%20대창빌딩%20401호'
        }
    },
    {
        id: 'telecom_ntele_seoul____cgi_bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (송파 CGI BP)', en: 'Ntelecom 송파 CGI BP', ko: '앤텔레콤 송파 CGI BP센터', kk: 'Ntelecom (송파 CGI BP)', uz: 'Ntelecom (송파 CGI BP)' },
            nameKo: '앤텔레콤 송파 CGI BP',
            region: 'seoul',
            address: { ru: '서울 송파구 오금로11길 23-9 (방이동) 5층 511호', en: '서울 송파구 오금로11길 23-9 (방이동) 5층 511호', kk: '서울 송파구 오금로11길 23-9 (방이동) 5층 511호', uz: '서울 송파구 오금로11길 23-9 (방이동) 5층 511호' },
            addressKo: '서울 송파구 오금로11길 23-9 (방이동) 5층 511호',
            phone: '02-472-3663',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/서울%20송파구%20오금로11길%2023-9%20(방이동)%205층%20511호'
        }
    },
    {
        id: 'telecom_ntele_seoul___bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (군자BP)', en: 'Ntelecom 군자BP', ko: '앤텔레콤 군자BP센터', kk: 'Ntelecom (군자BP)', uz: 'Ntelecom (군자BP)' },
            nameKo: '앤텔레콤 군자BP',
            region: 'seoul',
            address: { ru: '서울 광진구 능동로 331 (중곡동) 2층', en: '서울 광진구 능동로 331 (중곡동) 2층', kk: '서울 광진구 능동로 331 (중곡동) 2층', uz: '서울 광진구 능동로 331 (중곡동) 2층' },
            addressKo: '서울 광진구 능동로 331 (중곡동) 2층',
            phone: '02-2248-0016',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/서울%20광진구%20능동로%20331%20(중곡동)%202층'
        }
    },
    {
        id: 'telecom_ntele_seoul__________bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (구로 신도림테크노BP)', en: 'Ntelecom 구로 신도림테크노BP', ko: '앤텔레콤 구로 신도림테크노BP센터', kk: 'Ntelecom (구로 신도림테크노BP)', uz: 'Ntelecom (구로 신도림테크노BP)' },
            nameKo: '앤텔레콤 구로 신도림테크노BP',
            region: 'seoul',
            address: { ru: '서울 구로구 새말로 97 (구로동) 9층 3호', en: '서울 구로구 새말로 97 (구로동) 9층 3호', kk: '서울 구로구 새말로 97 (구로동) 9층 3호', uz: '서울 구로구 새말로 97 (구로동) 9층 3호' },
            addressKo: '서울 구로구 새말로 97 (구로동) 9층 3호',
            phone: '02-858-0598',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/서울%20구로구%20새말로%2097%20(구로동)%209층%203호'
        }
    },
    {
        id: 'telecom_ntele_seoul_____bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (성북비전BP)', en: 'Ntelecom 성북비전BP', ko: '앤텔레콤 성북비전BP센터', kk: 'Ntelecom (성북비전BP)', uz: 'Ntelecom (성북비전BP)' },
            nameKo: '앤텔레콤 성북비전BP',
            region: 'seoul',
            address: { ru: '서울 성북구 돌곶이로 25길 4-1 퀸즈빌8차 101호', en: '서울 성북구 돌곶이로 25길 4-1 퀸즈빌8차 101호', kk: '서울 성북구 돌곶이로 25길 4-1 퀸즈빌8차 101호', uz: '서울 성북구 돌곶이로 25길 4-1 퀸즈빌8차 101호' },
            addressKo: '서울 성북구 돌곶이로 25길 4-1 퀸즈빌8차 101호',
            phone: '02-3292-7010',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/서울%20성북구%20돌곶이로%2025길%204-1%20퀸즈빌8차%20101호'
        }
    },
    {
        id: 'telecom_ntele_seoul____bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (을지로BP)', en: 'Ntelecom 을지로BP', ko: '앤텔레콤 을지로BP센터', kk: 'Ntelecom (을지로BP)', uz: 'Ntelecom (을지로BP)' },
            nameKo: '앤텔레콤 을지로BP',
            region: 'seoul',
            address: { ru: '서울 중구 충무로 50 (을지로3가) 6층', en: '서울 중구 충무로 50 (을지로3가) 6층', kk: '서울 중구 충무로 50 (을지로3가) 6층', uz: '서울 중구 충무로 50 (을지로3가) 6층' },
            addressKo: '서울 중구 충무로 50 (을지로3가) 6층',
            phone: '010-3208-8250',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/서울%20중구%20충무로%2050%20(을지로3가)%206층'
        }
    },
    {
        id: 'telecom_ntele_seoul____bp_2',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (동서울BP)', en: 'Ntelecom 동서울BP', ko: '앤텔레콤 동서울BP센터', kk: 'Ntelecom (동서울BP)', uz: 'Ntelecom (동서울BP)' },
            nameKo: '앤텔레콤 동서울BP',
            region: 'seoul',
            address: { ru: '서울 광진구 자양로 67 (자양동) 302호', en: '서울 광진구 자양로 67 (자양동) 302호', kk: '서울 광진구 자양로 67 (자양동) 302호', uz: '서울 광진구 자양로 67 (자양동) 302호' },
            addressKo: '서울 광진구 자양로 67 (자양동) 302호',
            phone: '02-3437-7705',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/서울%20광진구%20자양로%2067%20(자양동)%20302호'
        }
    },
    {
        id: 'telecom_ntele_seoul___bp_2',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (관악BP)', en: 'Ntelecom 관악BP', ko: '앤텔레콤 관악BP센터', kk: 'Ntelecom (관악BP)', uz: 'Ntelecom (관악BP)' },
            nameKo: '앤텔레콤 관악BP',
            region: 'seoul',
            address: { ru: '서울 관악구 봉천로 335 (봉천동) 301호', en: '서울 관악구 봉천로 335 (봉천동) 301호', kk: '서울 관악구 봉천로 335 (봉천동) 301호', uz: '서울 관악구 봉천로 335 (봉천동) 301호' },
            addressKo: '서울 관악구 봉천로 335 (봉천동) 301호',
            phone: '02-889-6665',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/서울%20관악구%20봉천로%20335%20(봉천동)%20301호'
        }
    },
    {
        id: 'telecom_ntele_seoul______bp_2',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (구로디지털BP)', en: 'Ntelecom 구로디지털BP', ko: '앤텔레콤 구로디지털BP센터', kk: 'Ntelecom (구로디지털BP)', uz: 'Ntelecom (구로디지털BP)' },
            nameKo: '앤텔레콤 구로디지털BP',
            region: 'seoul',
            address: { ru: '서울 구로구 디지털로29길 38 (구로동) 에이스테크노타워3차 709호', en: '서울 구로구 디지털로29길 38 (구로동) 에이스테크노타워3차 709호', kk: '서울 구로구 디지털로29길 38 (구로동) 에이스테크노타워3차 709호', uz: '서울 구로구 디지털로29길 38 (구로동) 에이스테크노타워3차 709호' },
            addressKo: '서울 구로구 디지털로29길 38 (구로동) 에이스테크노타워3차 709호',
            phone: '02-830-8747',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/서울%20구로구%20디지털로29길%2038%20(구로동)%20에이스테크노타워3차%20709호'
        }
    },
    {
        id: 'telecom_ntele_seoul____bp_3',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (가산역BP)', en: 'Ntelecom 가산역BP', ko: '앤텔레콤 가산역BP센터', kk: 'Ntelecom (가산역BP)', uz: 'Ntelecom (가산역BP)' },
            nameKo: '앤텔레콤 가산역BP',
            region: 'seoul',
            address: { ru: '서울 금천구 가산디지털1로 181 (가산동) 5층 507호', en: '서울 금천구 가산디지털1로 181 (가산동) 5층 507호', kk: '서울 금천구 가산디지털1로 181 (가산동) 5층 507호', uz: '서울 금천구 가산디지털1로 181 (가산동) 5층 507호' },
            addressKo: '서울 금천구 가산디지털1로 181 (가산동) 5층 507호',
            phone: '02-6264-2025',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/서울%20금천구%20가산디지털1로%20181%20(가산동)%205층%20507호'
        }
    },
    {
        id: 'telecom_ntele_seoul_______bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (건대친구통신BP)', en: 'Ntelecom 건대친구통신BP', ko: '앤텔레콤 건대친구통신BP센터', kk: 'Ntelecom (건대친구통신BP)', uz: 'Ntelecom (건대친구통신BP)' },
            nameKo: '앤텔레콤 건대친구통신BP',
            region: 'seoul',
            address: { ru: '서울 광진구 아차산로30길 31 (자양동) 3층(건대친구통신)', en: '서울 광진구 아차산로30길 31 (자양동) 3층(건대친구통신)', kk: '서울 광진구 아차산로30길 31 (자양동) 3층(건대친구통신)', uz: '서울 광진구 아차산로30길 31 (자양동) 3층(건대친구통신)' },
            addressKo: '서울 광진구 아차산로30길 31 (자양동) 3층(건대친구통신)',
            phone: '02-6964-8020',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/서울%20광진구%20아차산로30길%2031%20(자양동)%203층(건대친구통신)'
        }
    },
    {
        id: 'telecom_ntele_seoul________bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (신세계 영등포BP)', en: 'Ntelecom 신세계 영등포BP', ko: '앤텔레콤 신세계 영등포BP센터', kk: 'Ntelecom (신세계 영등포BP)', uz: 'Ntelecom (신세계 영등포BP)' },
            nameKo: '앤텔레콤 신세계 영등포BP',
            region: 'seoul',
            address: { ru: '서울 영등포구 영중로 22 (영등포동3가) 4층 401호', en: '서울 영등포구 영중로 22 (영등포동3가) 4층 401호', kk: '서울 영등포구 영중로 22 (영등포동3가) 4층 401호', uz: '서울 영등포구 영중로 22 (영등포동3가) 4층 401호' },
            addressKo: '서울 영등포구 영중로 22 (영등포동3가) 4층 401호',
            phone: '02-2676-6016',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/서울%20영등포구%20영중로%2022%20(영등포동3가)%204층%20401호'
        }
    },
    {
        id: 'telecom_ntele_seoul_______bp_2',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (상봉 크라운BP)', en: 'Ntelecom 상봉 크라운BP', ko: '앤텔레콤 상봉 크라운BP센터', kk: 'Ntelecom (상봉 크라운BP)', uz: 'Ntelecom (상봉 크라운BP)' },
            nameKo: '앤텔레콤 상봉 크라운BP',
            region: 'seoul',
            address: { ru: '서울 중랑구 망우로 240 (상봉동) 3층 302호', en: '서울 중랑구 망우로 240 (상봉동) 3층 302호', kk: '서울 중랑구 망우로 240 (상봉동) 3층 302호', uz: '서울 중랑구 망우로 240 (상봉동) 3층 302호' },
            addressKo: '서울 중랑구 망우로 240 (상봉동) 3층 302호',
            phone: '02-435-8812',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/서울%20중랑구%20망우로%20240%20(상봉동)%203층%20302호'
        }
    },
    {
        id: 'telecom_ntele_seoul_____bp_2',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (강동그린BP)', en: 'Ntelecom 강동그린BP', ko: '앤텔레콤 강동그린BP센터', kk: 'Ntelecom (강동그린BP)', uz: 'Ntelecom (강동그린BP)' },
            nameKo: '앤텔레콤 강동그린BP',
            region: 'seoul',
            address: { ru: '서울 강동구 성내로 4 (성내동) 3층', en: '서울 강동구 성내로 4 (성내동) 3층', kk: '서울 강동구 성내로 4 (성내동) 3층', uz: '서울 강동구 성내로 4 (성내동) 3층' },
            addressKo: '서울 강동구 성내로 4 (성내동) 3층',
            phone: '02-478-0278',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/서울%20강동구%20성내로%204%20(성내동)%203층'
        }
    },
    {
        id: 'telecom_ntele_seoul______bp_3',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (구로센트럴BP)', en: 'Ntelecom 구로센트럴BP', ko: '앤텔레콤 구로센트럴BP센터', kk: 'Ntelecom (구로센트럴BP)', uz: 'Ntelecom (구로센트럴BP)' },
            nameKo: '앤텔레콤 구로센트럴BP',
            region: 'seoul',
            address: { ru: '서울 구로구 디지털로30길 28 (구로동) 마리오타워1108호', en: '서울 구로구 디지털로30길 28 (구로동) 마리오타워1108호', kk: '서울 구로구 디지털로30길 28 (구로동) 마리오타워1108호', uz: '서울 구로구 디지털로30길 28 (구로동) 마리오타워1108호' },
            addressKo: '서울 구로구 디지털로30길 28 (구로동) 마리오타워1108호',
            phone: '02-877-3694',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/서울%20구로구%20디지털로30길%2028%20(구로동)%20마리오타워1108호'
        }
    },
    {
        id: 'telecom_ntele_seoul______bp_4',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (대림 모아BP)', en: 'Ntelecom 대림 모아BP', ko: '앤텔레콤 대림 모아BP센터', kk: 'Ntelecom (대림 모아BP)', uz: 'Ntelecom (대림 모아BP)' },
            nameKo: '앤텔레콤 대림 모아BP',
            region: 'seoul',
            address: { ru: '서울 구로구 구로중앙로14길 61 (구로동) 3층', en: '서울 구로구 구로중앙로14길 61 (구로동) 3층', kk: '서울 구로구 구로중앙로14길 61 (구로동) 3층', uz: '서울 구로구 구로중앙로14길 61 (구로동) 3층' },
            addressKo: '서울 구로구 구로중앙로14길 61 (구로동) 3층',
            phone: '02-851-3858',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/서울%20구로구%20구로중앙로14길%2061%20(구로동)%203층'
        }
    },
    {
        id: 'telecom_ntele_gyeonggi____bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (부천역BP)', en: 'Ntelecom 부천역BP', ko: '앤텔레콤 부천역BP센터', kk: 'Ntelecom (부천역BP)', uz: 'Ntelecom (부천역BP)' },
            nameKo: '앤텔레콤 부천역BP',
            region: 'gyeonggi',
            address: { ru: '경기 부천시 부천로39번길 8 (심곡동) 6층(동아빌딩)', en: '경기 부천시 부천로39번길 8 (심곡동) 6층(동아빌딩)', kk: '경기 부천시 부천로39번길 8 (심곡동) 6층(동아빌딩)', uz: '경기 부천시 부천로39번길 8 (심곡동) 6층(동아빌딩)' },
            addressKo: '경기 부천시 부천로39번길 8 (심곡동) 6층(동아빌딩)',
            phone: '032-323-3055',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/경기%20부천시%20부천로39번길%208%20(심곡동)%206층(동아빌딩)'
        }
    },
    {
        id: 'telecom_ntele_gyeonggi___bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (안산BP)', en: 'Ntelecom 안산BP', ko: '앤텔레콤 안산BP센터', kk: 'Ntelecom (안산BP)', uz: 'Ntelecom (안산BP)' },
            nameKo: '앤텔레콤 안산BP',
            region: 'gyeonggi',
            address: { ru: '경기 안산시 단원구 광덕4로 112 (고잔동) 206호(슈마프라자)', en: '경기 안산시 단원구 광덕4로 112 (고잔동) 206호(슈마프라자)', kk: '경기 안산시 단원구 광덕4로 112 (고잔동) 206호(슈마프라자)', uz: '경기 안산시 단원구 광덕4로 112 (고잔동) 206호(슈마프라자)' },
            addressKo: '경기 안산시 단원구 광덕4로 112 (고잔동) 206호(슈마프라자)',
            phone: '031-414-0163',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/경기%20안산시%20단원구%20광덕4로%20112%20(고잔동)%20206호(슈마프라자)'
        }
    },
    {
        id: 'telecom_ntele_gyeonggi_______bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (가온 오산역BP)', en: 'Ntelecom 가온 오산역BP', ko: '앤텔레콤 가온 오산역BP센터', kk: 'Ntelecom (가온 오산역BP)', uz: 'Ntelecom (가온 오산역BP)' },
            nameKo: '앤텔레콤 가온 오산역BP',
            region: 'gyeonggi',
            address: { ru: '경기 오산시 오산로 198 (원동) 우정빌딩 102호', en: '경기 오산시 오산로 198 (원동) 우정빌딩 102호', kk: '경기 오산시 오산로 198 (원동) 우정빌딩 102호', uz: '경기 오산시 오산로 198 (원동) 우정빌딩 102호' },
            addressKo: '경기 오산시 오산로 198 (원동) 우정빌딩 102호',
            phone: '031-375-5016',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/경기%20오산시%20오산로%20198%20(원동)%20우정빌딩%20102호'
        }
    },
    {
        id: 'telecom_ntele_gyeonggi______bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (에이스양평BP)', en: 'Ntelecom 에이스양평BP', ko: '앤텔레콤 에이스양평BP센터', kk: 'Ntelecom (에이스양평BP)', uz: 'Ntelecom (에이스양평BP)' },
            nameKo: '앤텔레콤 에이스양평BP',
            region: 'gyeonggi',
            address: { ru: '경기 양평군 양평읍 시민로 94 지하1층', en: '경기 양평군 양평읍 시민로 94 지하1층', kk: '경기 양평군 양평읍 시민로 94 지하1층', uz: '경기 양평군 양평읍 시민로 94 지하1층' },
            addressKo: '경기 양평군 양평읍 시민로 94 지하1층',
            phone: '031-771-0902',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/경기%20양평군%20양평읍%20시민로%2094%20지하1층'
        }
    },
    {
        id: 'telecom_ntele_gyeonggi___bp_2',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (이천BP)', en: 'Ntelecom 이천BP', ko: '앤텔레콤 이천BP센터', kk: 'Ntelecom (이천BP)', uz: 'Ntelecom (이천BP)' },
            nameKo: '앤텔레콤 이천BP',
            region: 'gyeonggi',
            address: { ru: '경기 이천시 증신로 81 2층 202호', en: '경기 이천시 증신로 81 2층 202호', kk: '경기 이천시 증신로 81 2층 202호', uz: '경기 이천시 증신로 81 2층 202호' },
            addressKo: '경기 이천시 증신로 81 2층 202호',
            phone: '031-637-9888',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/경기%20이천시%20증신로%2081%202층%20202호'
        }
    },
    {
        id: 'telecom_ntele_gyeonggi____bp_2',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (광명빅BP)', en: 'Ntelecom 광명빅BP', ko: '앤텔레콤 광명빅BP센터', kk: 'Ntelecom (광명빅BP)', uz: 'Ntelecom (광명빅BP)' },
            nameKo: '앤텔레콤 광명빅BP',
            region: 'gyeonggi',
            address: { ru: '경기 광명시 오리로 992 (광명동) 광명리더스 빌딩 901호', en: '경기 광명시 오리로 992 (광명동) 광명리더스 빌딩 901호', kk: '경기 광명시 오리로 992 (광명동) 광명리더스 빌딩 901호', uz: '경기 광명시 오리로 992 (광명동) 광명리더스 빌딩 901호' },
            addressKo: '경기 광명시 오리로 992 (광명동) 광명리더스 빌딩 901호',
            phone: '02-6953-8014',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/경기%20광명시%20오리로%20992%20(광명동)%20광명리더스%20빌딩%20901호'
        }
    },
    {
        id: 'telecom_ntele_gyeonggi_______bp_2',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (시흥 정왕역BP)', en: 'Ntelecom 시흥 정왕역BP', ko: '앤텔레콤 시흥 정왕역BP센터', kk: 'Ntelecom (시흥 정왕역BP)', uz: 'Ntelecom (시흥 정왕역BP)' },
            nameKo: '앤텔레콤 시흥 정왕역BP',
            region: 'gyeonggi',
            address: { ru: '경기 시흥시 마유로418번길 10 (정왕동) 롯데시네마 시화점 2층 203호 일부', en: '경기 시흥시 마유로418번길 10 (정왕동) 롯데시네마 시화점 2층 203호 일부', kk: '경기 시흥시 마유로418번길 10 (정왕동) 롯데시네마 시화점 2층 203호 일부', uz: '경기 시흥시 마유로418번길 10 (정왕동) 롯데시네마 시화점 2층 203호 일부' },
            addressKo: '경기 시흥시 마유로418번길 10 (정왕동) 롯데시네마 시화점 2층 203호 일부',
            phone: '031-431-2016',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/경기%20시흥시%20마유로418번길%2010%20(정왕동)%20롯데시네마%20시화점%202층%20203호%20일부'
        }
    },
    {
        id: 'telecom_ntele_gyeonggi_______bp_3',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (가온 평택역BP)', en: 'Ntelecom 가온 평택역BP', ko: '앤텔레콤 가온 평택역BP센터', kk: 'Ntelecom (가온 평택역BP)', uz: 'Ntelecom (가온 평택역BP)' },
            nameKo: '앤텔레콤 가온 평택역BP',
            region: 'gyeonggi',
            address: { ru: '경기 평택시 평택로64번길 32 (평택동) 3층', en: '경기 평택시 평택로64번길 32 (평택동) 3층', kk: '경기 평택시 평택로64번길 32 (평택동) 3층', uz: '경기 평택시 평택로64번길 32 (평택동) 3층' },
            addressKo: '경기 평택시 평택로64번길 32 (평택동) 3층',
            phone: '031-691-1236',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/경기%20평택시%20평택로64번길%2032%20(평택동)%203층'
        }
    },
    {
        id: 'telecom_ntele_gyeonggi_____bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (고양일산BP)', en: 'Ntelecom 고양일산BP', ko: '앤텔레콤 고양일산BP센터', kk: 'Ntelecom (고양일산BP)', uz: 'Ntelecom (고양일산BP)' },
            nameKo: '앤텔레콤 고양일산BP',
            region: 'gyeonggi',
            address: { ru: '경기 고양시 일산동구 중앙로 1200 (마두동) 삼희골드프라자 205호', en: '경기 고양시 일산동구 중앙로 1200 (마두동) 삼희골드프라자 205호', kk: '경기 고양시 일산동구 중앙로 1200 (마두동) 삼희골드프라자 205호', uz: '경기 고양시 일산동구 중앙로 1200 (마두동) 삼희골드프라자 205호' },
            addressKo: '경기 고양시 일산동구 중앙로 1200 (마두동) 삼희골드프라자 205호',
            phone: '031-904-8610',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/경기%20고양시%20일산동구%20중앙로%201200%20(마두동)%20삼희골드프라자%20205호'
        }
    },
    {
        id: 'telecom_ntele_gyeonggi_____bp_2',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (가온파주BP)', en: 'Ntelecom 가온파주BP', ko: '앤텔레콤 가온파주BP센터', kk: 'Ntelecom (가온파주BP)', uz: 'Ntelecom (가온파주BP)' },
            nameKo: '앤텔레콤 가온파주BP',
            region: 'gyeonggi',
            address: { ru: '경기 파주시 새꽃로 180 (금촌동) 1층', en: '경기 파주시 새꽃로 180 (금촌동) 1층', kk: '경기 파주시 새꽃로 180 (금촌동) 1층', uz: '경기 파주시 새꽃로 180 (금촌동) 1층' },
            addressKo: '경기 파주시 새꽃로 180 (금촌동) 1층',
            phone: '031-942-2989',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/경기%20파주시%20새꽃로%20180%20(금촌동)%201층'
        }
    },
    {
        id: 'telecom_ntele_gyeonggi___bp_3',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (평택BP)', en: 'Ntelecom 평택BP', ko: '앤텔레콤 평택BP센터', kk: 'Ntelecom (평택BP)', uz: 'Ntelecom (평택BP)' },
            nameKo: '앤텔레콤 평택BP',
            region: 'gyeonggi',
            address: { ru: '경기 평택시 원평로 43 (평택동) 2층', en: '경기 평택시 원평로 43 (평택동) 2층', kk: '경기 평택시 원평로 43 (평택동) 2층', uz: '경기 평택시 원평로 43 (평택동) 2층' },
            addressKo: '경기 평택시 원평로 43 (평택동) 2층',
            phone: '031-618-7990',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/경기%20평택시%20원평로%2043%20(평택동)%202층'
        }
    },
    {
        id: 'telecom_ntele_gyeonggi_____bp_3',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (수원나눔BP)', en: 'Ntelecom 수원나눔BP', ko: '앤텔레콤 수원나눔BP센터', kk: 'Ntelecom (수원나눔BP)', uz: 'Ntelecom (수원나눔BP)' },
            nameKo: '앤텔레콤 수원나눔BP',
            region: 'gyeonggi',
            address: { ru: '경기 수원시 팔달구 경수대로 424 (인계동) 2층 202호', en: '경기 수원시 팔달구 경수대로 424 (인계동) 2층 202호', kk: '경기 수원시 팔달구 경수대로 424 (인계동) 2층 202호', uz: '경기 수원시 팔달구 경수대로 424 (인계동) 2층 202호' },
            addressKo: '경기 수원시 팔달구 경수대로 424 (인계동) 2층 202호',
            phone: '031-223-2763',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/경기%20수원시%20팔달구%20경수대로%20424%20(인계동)%202층%20202호'
        }
    },
    {
        id: 'telecom_ntele_incheon____bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (뉴부평BP)', en: 'Ntelecom 뉴부평BP', ko: '앤텔레콤 뉴부평BP센터', kk: 'Ntelecom (뉴부평BP)', uz: 'Ntelecom (뉴부평BP)' },
            nameKo: '앤텔레콤 뉴부평BP',
            region: 'incheon',
            address: { ru: '인천 부평구 동수로 173 (부개동) 1층', en: '인천 부평구 동수로 173 (부개동) 1층', kk: '인천 부평구 동수로 173 (부개동) 1층', uz: '인천 부평구 동수로 173 (부개동) 1층' },
            addressKo: '인천 부평구 동수로 173 (부개동) 1층',
            phone: '032-504-0577',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/인천%20부평구%20동수로%20173%20(부개동)%201층'
        }
    },
    {
        id: 'telecom_ntele_gangwon_____bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (춘천우리BP)', en: 'Ntelecom 춘천우리BP', ko: '앤텔레콤 춘천우리BP센터', kk: 'Ntelecom (춘천우리BP)', uz: 'Ntelecom (춘천우리BP)' },
            nameKo: '앤텔레콤 춘천우리BP',
            region: 'gangwon',
            address: { ru: '강원 춘천시 춘주로92번길 30 (온의동) 1층', en: '강원 춘천시 춘주로92번길 30 (온의동) 1층', kk: '강원 춘천시 춘주로92번길 30 (온의동) 1층', uz: '강원 춘천시 춘주로92번길 30 (온의동) 1층' },
            addressKo: '강원 춘천시 춘주로92번길 30 (온의동) 1층',
            phone: '033-241-5010',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/강원%20춘천시%20춘주로92번길%2030%20(온의동)%201층'
        }
    },
    {
        id: 'telecom_ntele_gangwon___bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (동해BP)', en: 'Ntelecom 동해BP', ko: '앤텔레콤 동해BP센터', kk: 'Ntelecom (동해BP)', uz: 'Ntelecom (동해BP)' },
            nameKo: '앤텔레콤 동해BP',
            region: 'gangwon',
            address: { ru: '강원 동해시 발한로 125 (발한동) 1층', en: '강원 동해시 발한로 125 (발한동) 1층', kk: '강원 동해시 발한로 125 (발한동) 1층', uz: '강원 동해시 발한로 125 (발한동) 1층' },
            addressKo: '강원 동해시 발한로 125 (발한동) 1층',
            phone: '033-532-0101',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/강원%20동해시%20발한로%20125%20(발한동)%201층'
        }
    },
    {
        id: 'telecom_ntele_gangwon___bp_2',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (원주BP)', en: 'Ntelecom 원주BP', ko: '앤텔레콤 원주BP센터', kk: 'Ntelecom (원주BP)', uz: 'Ntelecom (원주BP)' },
            nameKo: '앤텔레콤 원주BP',
            region: 'gangwon',
            address: { ru: '강원특별자치도 원주시 단관길 197 (관설동) 1층', en: '강원특별자치도 원주시 단관길 197 (관설동) 1층', kk: '강원특별자치도 원주시 단관길 197 (관설동) 1층', uz: '강원특별자치도 원주시 단관길 197 (관설동) 1층' },
            addressKo: '강원특별자치도 원주시 단관길 197 (관설동) 1층',
            phone: '033-762-2017',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/강원특별자치도%20원주시%20단관길%20197%20(관설동)%201층'
        }
    },
    {
        id: 'telecom_ntele_gangwon___bp_3',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (홍천BP)', en: 'Ntelecom 홍천BP', ko: '앤텔레콤 홍천BP센터', kk: 'Ntelecom (홍천BP)', uz: 'Ntelecom (홍천BP)' },
            nameKo: '앤텔레콤 홍천BP',
            region: 'gangwon',
            address: { ru: '강원 홍천군 홍천읍 꽃뫼로1길 3-1 1층', en: '강원 홍천군 홍천읍 꽃뫼로1길 3-1 1층', kk: '강원 홍천군 홍천읍 꽃뫼로1길 3-1 1층', uz: '강원 홍천군 홍천읍 꽃뫼로1길 3-1 1층' },
            addressKo: '강원 홍천군 홍천읍 꽃뫼로1길 3-1 1층',
            phone: '033-434-3358',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/강원%20홍천군%20홍천읍%20꽃뫼로1길%203-1%201층'
        }
    },
    {
        id: 'telecom_ntele_daejeon____gobp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (대전 GOBP)', en: 'Ntelecom 대전 GOBP', ko: '앤텔레콤 대전 GOBP센터', kk: 'Ntelecom (대전 GOBP)', uz: 'Ntelecom (대전 GOBP)' },
            nameKo: '앤텔레콤 대전 GOBP',
            region: 'daejeon',
            address: { ru: '대전 동구 백룡로5번길 80 (자양동) 지하1층', en: '대전 동구 백룡로5번길 80 (자양동) 지하1층', kk: '대전 동구 백룡로5번길 80 (자양동) 지하1층', uz: '대전 동구 백룡로5번길 80 (자양동) 지하1층' },
            addressKo: '대전 동구 백룡로5번길 80 (자양동) 지하1층',
            phone: '042-633-0633',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/대전%20동구%20백룡로5번길%2080%20(자양동)%20지하1층'
        }
    },
    {
        id: 'telecom_ntele_daejeon____bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (대전역BP)', en: 'Ntelecom 대전역BP', ko: '앤텔레콤 대전역BP센터', kk: 'Ntelecom (대전역BP)', uz: 'Ntelecom (대전역BP)' },
            nameKo: '앤텔레콤 대전역BP',
            region: 'daejeon',
            address: { ru: '대전시 중구 대흥동 336-16 조양빌딩 3층', en: '대전시 중구 대흥동 336-16 조양빌딩 3층', kk: '대전시 중구 대흥동 336-16 조양빌딩 3층', uz: '대전시 중구 대흥동 336-16 조양빌딩 3층' },
            addressKo: '대전시 중구 대흥동 336-16 조양빌딩 3층',
            phone: '042-253-1016',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/대전시%20중구%20대흥동%20336-16%20조양빌딩%203층'
        }
    },
    {
        id: 'telecom_ntele_gwangju___bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (광주BP)', en: 'Ntelecom 광주BP', ko: '앤텔레콤 광주BP센터', kk: 'Ntelecom (광주BP)', uz: 'Ntelecom (광주BP)' },
            nameKo: '앤텔레콤 광주BP',
            region: 'gwangju',
            address: { ru: '광주 서구 상무화원로12번길 4 (치평동) 1층', en: '광주 서구 상무화원로12번길 4 (치평동) 1층', kk: '광주 서구 상무화원로12번길 4 (치평동) 1층', uz: '광주 서구 상무화원로12번길 4 (치평동) 1층' },
            addressKo: '광주 서구 상무화원로12번길 4 (치평동) 1층',
            phone: '062-372-5016',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/광주%20서구%20상무화원로12번길%204%20(치평동)%201층'
        }
    },
    {
        id: 'telecom_ntele_jeonnam_____bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (순천우정BP)', en: 'Ntelecom 순천우정BP', ko: '앤텔레콤 순천우정BP센터', kk: 'Ntelecom (순천우정BP)', uz: 'Ntelecom (순천우정BP)' },
            nameKo: '앤텔레콤 순천우정BP',
            region: 'jeonnam',
            address: { ru: '전남 순천시 연동남3길 5 (조례동) 2층(앤텔레콤)', en: '전남 순천시 연동남3길 5 (조례동) 2층(앤텔레콤)', kk: '전남 순천시 연동남3길 5 (조례동) 2층(앤텔레콤)', uz: '전남 순천시 연동남3길 5 (조례동) 2층(앤텔레콤)' },
            addressKo: '전남 순천시 연동남3길 5 (조례동) 2층(앤텔레콤)',
            phone: '061-743-6066',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/전남%20순천시%20연동남3길%205%20(조례동)%202층(앤텔레콤)'
        }
    },
    {
        id: 'telecom_ntele_jeonnam___bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (목포BP)', en: 'Ntelecom 목포BP', ko: '앤텔레콤 목포BP센터', kk: 'Ntelecom (목포BP)', uz: 'Ntelecom (목포BP)' },
            nameKo: '앤텔레콤 목포BP',
            region: 'jeonnam',
            address: { ru: '전남 목포시 영산로 95 (명륜동) 3층', en: '전남 목포시 영산로 95 (명륜동) 3층', kk: '전남 목포시 영산로 95 (명륜동) 3층', uz: '전남 목포시 영산로 95 (명륜동) 3층' },
            addressKo: '전남 목포시 영산로 95 (명륜동) 3층',
            phone: '061-284-1094',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/전남%20목포시%20영산로%2095%20(명륜동)%203층'
        }
    },
    {
        id: 'telecom_ntele_jeonbuk_____bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (군산웅비BP)', en: 'Ntelecom 군산웅비BP', ko: '앤텔레콤 군산웅비BP센터', kk: 'Ntelecom (군산웅비BP)', uz: 'Ntelecom (군산웅비BP)' },
            nameKo: '앤텔레콤 군산웅비BP',
            region: 'jeonbuk',
            address: { ru: '전북 군산시 팔마로 212 (경장동) 2층 앤텔레콤', en: '전북 군산시 팔마로 212 (경장동) 2층 앤텔레콤', kk: '전북 군산시 팔마로 212 (경장동) 2층 앤텔레콤', uz: '전북 군산시 팔마로 212 (경장동) 2층 앤텔레콤' },
            addressKo: '전북 군산시 팔마로 212 (경장동) 2층 앤텔레콤',
            phone: '063-452-7924',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/전북%20군산시%20팔마로%20212%20(경장동)%202층%20앤텔레콤'
        }
    },
    {
        id: 'telecom_ntele_jeonbuk___bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (군산BP)', en: 'Ntelecom 군산BP', ko: '앤텔레콤 군산BP센터', kk: 'Ntelecom (군산BP)', uz: 'Ntelecom (군산BP)' },
            nameKo: '앤텔레콤 군산BP',
            region: 'jeonbuk',
            address: { ru: '전북특별자치도 군산시 신풍길 31 (신풍동) 1층', en: '전북특별자치도 군산시 신풍길 31 (신풍동) 1층', kk: '전북특별자치도 군산시 신풍길 31 (신풍동) 1층', uz: '전북특별자치도 군산시 신풍길 31 (신풍동) 1층' },
            addressKo: '전북특별자치도 군산시 신풍길 31 (신풍동) 1층',
            phone: '063-471-8890',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/전북특별자치도%20군산시%20신풍길%2031%20(신풍동)%201층'
        }
    },
    {
        id: 'telecom_ntele_jeonbuk___bp_2',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (전주BP)', en: 'Ntelecom 전주BP', ko: '앤텔레콤 전주BP센터', kk: 'Ntelecom (전주BP)', uz: 'Ntelecom (전주BP)' },
            nameKo: '앤텔레콤 전주BP',
            region: 'jeonbuk',
            address: { ru: '전북특별자치도 전주시 덕진구 가리내로 18 (금암동) 1층', en: '전북특별자치도 전주시 덕진구 가리내로 18 (금암동) 1층', kk: '전북특별자치도 전주시 덕진구 가리내로 18 (금암동) 1층', uz: '전북특별자치도 전주시 덕진구 가리내로 18 (금암동) 1층' },
            addressKo: '전북특별자치도 전주시 덕진구 가리내로 18 (금암동) 1층',
            phone: '063-246-9922',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/전북특별자치도%20전주시%20덕진구%20가리내로%2018%20(금암동)%201층'
        }
    },
    {
        id: 'telecom_ntele_chungnam_____bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (나눔천안BP)', en: 'Ntelecom 나눔천안BP', ko: '앤텔레콤 나눔천안BP센터', kk: 'Ntelecom (나눔천안BP)', uz: 'Ntelecom (나눔천안BP)' },
            nameKo: '앤텔레콤 나눔천안BP',
            region: 'chungnam',
            address: { ru: '충남 천안시 동남구 수곡1길 12-5(신방동) 은광빌딩 4층', en: '충남 천안시 동남구 수곡1길 12-5(신방동) 은광빌딩 4층', kk: '충남 천안시 동남구 수곡1길 12-5(신방동) 은광빌딩 4층', uz: '충남 천안시 동남구 수곡1길 12-5(신방동) 은광빌딩 4층' },
            addressKo: '충남 천안시 동남구 수곡1길 12-5(신방동) 은광빌딩 4층',
            phone: '041-567-1530',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/충남%20천안시%20동남구%20수곡1길%2012-5(신방동)%20은광빌딩%204층'
        }
    },
    {
        id: 'telecom_ntele_chungnam___bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (당진BP)', en: 'Ntelecom 당진BP', ko: '앤텔레콤 당진BP센터', kk: 'Ntelecom (당진BP)', uz: 'Ntelecom (당진BP)' },
            nameKo: '앤텔레콤 당진BP',
            region: 'chungnam',
            address: { ru: '충남 당진시 당진중앙3로 14 조향빌딩 (읍내동) 6층 602호', en: '충남 당진시 당진중앙3로 14 조향빌딩 (읍내동) 6층 602호', kk: '충남 당진시 당진중앙3로 14 조향빌딩 (읍내동) 6층 602호', uz: '충남 당진시 당진중앙3로 14 조향빌딩 (읍내동) 6층 602호' },
            addressKo: '충남 당진시 당진중앙3로 14 조향빌딩 (읍내동) 6층 602호',
            phone: '041-352-5016',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/충남%20당진시%20당진중앙3로%2014%20조향빌딩%20(읍내동)%206층%20602호'
        }
    },
    {
        id: 'telecom_ntele_chungnam______bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (충남스마트BP)', en: 'Ntelecom 충남스마트BP', ko: '앤텔레콤 충남스마트BP센터', kk: 'Ntelecom (충남스마트BP)', uz: 'Ntelecom (충남스마트BP)' },
            nameKo: '앤텔레콤 충남스마트BP',
            region: 'chungnam',
            address: { ru: '충남 아산시 충무로 8 (온천동) 영성빌딩 5층', en: '충남 아산시 충무로 8 (온천동) 영성빌딩 5층', kk: '충남 아산시 충무로 8 (온천동) 영성빌딩 5층', uz: '충남 아산시 충무로 8 (온천동) 영성빌딩 5층' },
            addressKo: '충남 아산시 충무로 8 (온천동) 영성빌딩 5층',
            phone: '041-531-5677',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/충남%20아산시%20충무로%208%20(온천동)%20영성빌딩%205층'
        }
    },
    {
        id: 'telecom_ntele_chungbuk___bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (청주BP)', en: 'Ntelecom 청주BP', ko: '앤텔레콤 청주BP센터', kk: 'Ntelecom (청주BP)', uz: 'Ntelecom (청주BP)' },
            nameKo: '앤텔레콤 청주BP',
            region: 'chungbuk',
            address: { ru: '충북 청주시 서원구 산남로70번길 34 (산남동) 1동 610호', en: '충북 청주시 서원구 산남로70번길 34 (산남동) 1동 610호', kk: '충북 청주시 서원구 산남로70번길 34 (산남동) 1동 610호', uz: '충북 청주시 서원구 산남로70번길 34 (산남동) 1동 610호' },
            addressKo: '충북 청주시 서원구 산남로70번길 34 (산남동) 1동 610호',
            phone: '043-286-1016',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/충북%20청주시%20서원구%20산남로70번길%2034%20(산남동)%201동%20610호'
        }
    },
    {
        id: 'telecom_ntele_chungbuk___bp_2',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (충주BP)', en: 'Ntelecom 충주BP', ko: '앤텔레콤 충주BP센터', kk: 'Ntelecom (충주BP)', uz: 'Ntelecom (충주BP)' },
            nameKo: '앤텔레콤 충주BP',
            region: 'chungbuk',
            address: { ru: '충북 충주시 중앙로 108 (성내동) 1층', en: '충북 충주시 중앙로 108 (성내동) 1층', kk: '충북 충주시 중앙로 108 (성내동) 1층', uz: '충북 충주시 중앙로 108 (성내동) 1층' },
            addressKo: '충북 충주시 중앙로 108 (성내동) 1층',
            phone: '043-855-6555',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/충북%20충주시%20중앙로%20108%20(성내동)%201층'
        }
    },
    {
        id: 'telecom_ntele_chungbuk_____bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (청주오션BP)', en: 'Ntelecom 청주오션BP', ko: '앤텔레콤 청주오션BP센터', kk: 'Ntelecom (청주오션BP)', uz: 'Ntelecom (청주오션BP)' },
            nameKo: '앤텔레콤 청주오션BP',
            region: 'chungbuk',
            address: { ru: '충북 청주시 청원구 무심동로 648-1 (내덕동) 6층 2호', en: '충북 청주시 청원구 무심동로 648-1 (내덕동) 6층 2호', kk: '충북 청주시 청원구 무심동로 648-1 (내덕동) 6층 2호', uz: '충북 청주시 청원구 무심동로 648-1 (내덕동) 6층 2호' },
            addressKo: '충북 청주시 청원구 무심동로 648-1 (내덕동) 6층 2호',
            phone: '043-221-1134',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/충북%20청주시%20청원구%20무심동로%20648-1%20(내덕동)%206층%202호'
        }
    },
    {
        id: 'telecom_ntele_daegu___bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (대구BP)', en: 'Ntelecom 대구BP', ko: '앤텔레콤 대구BP센터', kk: 'Ntelecom (대구BP)', uz: 'Ntelecom (대구BP)' },
            nameKo: '앤텔레콤 대구BP',
            region: 'daegu',
            address: { ru: '대구 달서구 대명천로 236 (장기동) 4층', en: '대구 달서구 대명천로 236 (장기동) 4층', kk: '대구 달서구 대명천로 236 (장기동) 4층', uz: '대구 달서구 대명천로 236 (장기동) 4층' },
            addressKo: '대구 달서구 대명천로 236 (장기동) 4층',
            phone: '053-561-6016',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/대구%20달서구%20대명천로%20236%20(장기동)%204층'
        }
    },
    {
        id: 'telecom_ntele_daegu____bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (동대구BP)', en: 'Ntelecom 동대구BP', ko: '앤텔레콤 동대구BP센터', kk: 'Ntelecom (동대구BP)', uz: 'Ntelecom (동대구BP)' },
            nameKo: '앤텔레콤 동대구BP',
            region: 'daegu',
            address: { ru: '대구 동구 효신로 14 (효목동) 2층', en: '대구 동구 효신로 14 (효목동) 2층', kk: '대구 동구 효신로 14 (효목동) 2층', uz: '대구 동구 효신로 14 (효목동) 2층' },
            addressKo: '대구 동구 효신로 14 (효목동) 2층',
            phone: '053-751-8016',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/대구%20동구%20효신로%2014%20(효목동)%202층'
        }
    },
    {
        id: 'telecom_ntele_daegu_____bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (대구팔공BP)', en: 'Ntelecom 대구팔공BP', ko: '앤텔레콤 대구팔공BP센터', kk: 'Ntelecom (대구팔공BP)', uz: 'Ntelecom (대구팔공BP)' },
            nameKo: '앤텔레콤 대구팔공BP',
            region: 'daegu',
            address: { ru: '대구 동구 동부로 71 (신천동) 2층', en: '대구 동구 동부로 71 (신천동) 2층', kk: '대구 동구 동부로 71 (신천동) 2층', uz: '대구 동구 동부로 71 (신천동) 2층' },
            addressKo: '대구 동구 동부로 71 (신천동) 2층',
            phone: '053-744-8016',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/대구%20동구%20동부로%2071%20(신천동)%202층'
        }
    },
    {
        id: 'telecom_ntele_daegu______bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (대구글로벌BP)', en: 'Ntelecom 대구글로벌BP', ko: '앤텔레콤 대구글로벌BP센터', kk: 'Ntelecom (대구글로벌BP)', uz: 'Ntelecom (대구글로벌BP)' },
            nameKo: '앤텔레콤 대구글로벌BP',
            region: 'daegu',
            address: { ru: '대구광역시 달서구 계대동문로4길 72(신당동) 1층 101호', en: '대구광역시 달서구 계대동문로4길 72(신당동) 1층 101호', kk: '대구광역시 달서구 계대동문로4길 72(신당동) 1층 101호', uz: '대구광역시 달서구 계대동문로4길 72(신당동) 1층 101호' },
            addressKo: '대구광역시 달서구 계대동문로4길 72(신당동) 1층 101호',
            phone: '053-588-3016',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/대구광역시%20달서구%20계대동문로4길%2072(신당동)%201층%20101호'
        }
    },
    {
        id: 'telecom_ntele_gyeongbuk___bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (구미BP)', en: 'Ntelecom 구미BP', ko: '앤텔레콤 구미BP센터', kk: 'Ntelecom (구미BP)', uz: 'Ntelecom (구미BP)' },
            nameKo: '앤텔레콤 구미BP',
            region: 'gyeongbuk',
            address: { ru: '경북 구미시 야은로 740-1 (신평동) 3층', en: '경북 구미시 야은로 740-1 (신평동) 3층', kk: '경북 구미시 야은로 740-1 (신평동) 3층', uz: '경북 구미시 야은로 740-1 (신평동) 3층' },
            addressKo: '경북 구미시 야은로 740-1 (신평동) 3층',
            phone: '054-463-3016',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/경북%20구미시%20야은로%20740-1%20(신평동)%203층'
        }
    },
    {
        id: 'telecom_ntele_gyeongbuk___bp_2',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (포항BP)', en: 'Ntelecom 포항BP', ko: '앤텔레콤 포항BP센터', kk: 'Ntelecom (포항BP)', uz: 'Ntelecom (포항BP)' },
            nameKo: '앤텔레콤 포항BP',
            region: 'gyeongbuk',
            address: { ru: '포항시 남구 중앙로 158 (해도동) 3층', en: '포항시 남구 중앙로 158 (해도동) 3층', kk: '포항시 남구 중앙로 158 (해도동) 3층', uz: '포항시 남구 중앙로 158 (해도동) 3층' },
            addressKo: '포항시 남구 중앙로 158 (해도동) 3층',
            phone: '054-283-0991',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/포항시%20남구%20중앙로%20158%20(해도동)%203층'
        }
    },
    {
        id: 'telecom_ntele_gyeongbuk___bp_3',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (경산BP)', en: 'Ntelecom 경산BP', ko: '앤텔레콤 경산BP센터', kk: 'Ntelecom (경산BP)', uz: 'Ntelecom (경산BP)' },
            nameKo: '앤텔레콤 경산BP',
            region: 'gyeongbuk',
            address: { ru: '경북 경산시 강변동로 76 (서상동) 3층', en: '경북 경산시 강변동로 76 (서상동) 3층', kk: '경북 경산시 강변동로 76 (서상동) 3층', uz: '경북 경산시 강변동로 76 (서상동) 3층' },
            addressKo: '경북 경산시 강변동로 76 (서상동) 3층',
            phone: '053-813-0160',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/경북%20경산시%20강변동로%2076%20(서상동)%203층'
        }
    },
    {
        id: 'telecom_ntele_gyeongbuk___bp_4',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (안동BP)', en: 'Ntelecom 안동BP', ko: '앤텔레콤 안동BP센터', kk: 'Ntelecom (안동BP)', uz: 'Ntelecom (안동BP)' },
            nameKo: '앤텔레콤 안동BP',
            region: 'gyeongbuk',
            address: { ru: '경북 안동시 광명로 198 (옥동) 옥동삼성1차아파트 상가동 302-1호', en: '경북 안동시 광명로 198 (옥동) 옥동삼성1차아파트 상가동 302-1호', kk: '경북 안동시 광명로 198 (옥동) 옥동삼성1차아파트 상가동 302-1호', uz: '경북 안동시 광명로 198 (옥동) 옥동삼성1차아파트 상가동 302-1호' },
            addressKo: '경북 안동시 광명로 198 (옥동) 옥동삼성1차아파트 상가동 302-1호',
            phone: '054-843-8214',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/경북%20안동시%20광명로%20198%20(옥동)%20옥동삼성1차아파트%20상가동%20302-1호'
        }
    },
    {
        id: 'telecom_ntele_ulsan___bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (울산BP)', en: 'Ntelecom 울산BP', ko: '앤텔레콤 울산BP센터', kk: 'Ntelecom (울산BP)', uz: 'Ntelecom (울산BP)' },
            nameKo: '앤텔레콤 울산BP',
            region: 'ulsan',
            address: { ru: '울산 남구 돋질로239번길 4-4 (달동) 2층', en: '울산 남구 돋질로239번길 4-4 (달동) 2층', kk: '울산 남구 돋질로239번길 4-4 (달동) 2층', uz: '울산 남구 돋질로239번길 4-4 (달동) 2층' },
            addressKo: '울산 남구 돋질로239번길 4-4 (달동) 2층',
            phone: '052-254-3016',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/울산%20남구%20돋질로239번길%204-4%20(달동)%202층'
        }
    },
    {
        id: 'telecom_ntele_busan_____bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (부산연제BP)', en: 'Ntelecom 부산연제BP', ko: '앤텔레콤 부산연제BP센터', kk: 'Ntelecom (부산연제BP)', uz: 'Ntelecom (부산연제BP)' },
            nameKo: '앤텔레콤 부산연제BP',
            region: 'busan',
            address: { ru: '부산 부산진구 양연로 4 (양정동) 4층', en: '부산 부산진구 양연로 4 (양정동) 4층', kk: '부산 부산진구 양연로 4 (양정동) 4층', uz: '부산 부산진구 양연로 4 (양정동) 4층' },
            addressKo: '부산 부산진구 양연로 4 (양정동) 4층',
            phone: '051-852-2016',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/부산%20부산진구%20양연로%204%20(양정동)%204층'
        }
    },
    {
        id: 'telecom_ntele_busan______bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (사상글로벌BP)', en: 'Ntelecom 사상글로벌BP', ko: '앤텔레콤 사상글로벌BP센터', kk: 'Ntelecom (사상글로벌BP)', uz: 'Ntelecom (사상글로벌BP)' },
            nameKo: '앤텔레콤 사상글로벌BP',
            region: 'busan',
            address: { ru: '부산 사상구 사상로 434 (모라동) 1층', en: '부산 사상구 사상로 434 (모라동) 1층', kk: '부산 사상구 사상로 434 (모라동) 1층', uz: '부산 사상구 사상로 434 (모라동) 1층' },
            addressKo: '부산 사상구 사상로 434 (모라동) 1층',
            phone: '051-325-6016',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/부산%20사상구%20사상로%20434%20(모라동)%201층'
        }
    },
    {
        id: 'telecom_ntele_busan_____bp_2',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (부산센텀BP)', en: 'Ntelecom 부산센텀BP', ko: '앤텔레콤 부산센텀BP센터', kk: 'Ntelecom (부산센텀BP)', uz: 'Ntelecom (부산센텀BP)' },
            nameKo: '앤텔레콤 부산센텀BP',
            region: 'busan',
            address: { ru: '부산 동래구 연안로64번길 4 (안락동) 201호', en: '부산 동래구 연안로64번길 4 (안락동) 201호', kk: '부산 동래구 연안로64번길 4 (안락동) 201호', uz: '부산 동래구 연안로64번길 4 (안락동) 201호' },
            addressKo: '부산 동래구 연안로64번길 4 (안락동) 201호',
            phone: '051-717-0302',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/부산%20동래구%20연안로64번길%204%20(안락동)%20201호'
        }
    },
    {
        id: 'telecom_ntele_busan____bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (부산역BP)', en: 'Ntelecom 부산역BP', ko: '앤텔레콤 부산역BP센터', kk: 'Ntelecom (부산역BP)', uz: 'Ntelecom (부산역BP)' },
            nameKo: '앤텔레콤 부산역BP',
            region: 'busan',
            address: { ru: '부산 동구 중앙대로308번길 3-5 (초량동) 세진빌딩 303호', en: '부산 동구 중앙대로308번길 3-5 (초량동) 세진빌딩 303호', kk: '부산 동구 중앙대로308번길 3-5 (초량동) 세진빌딩 303호', uz: '부산 동구 중앙대로308번길 3-5 (초량동) 세진빌딩 303호' },
            addressKo: '부산 동구 중앙대로308번길 3-5 (초량동) 세진빌딩 303호',
            phone: '051-464-8016',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/부산%20동구%20중앙대로308번길%203-5%20(초량동)%20세진빌딩%20303호'
        }
    },
    {
        id: 'telecom_ntele_busan_____bp_3',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (부산우정BP)', en: 'Ntelecom 부산우정BP', ko: '앤텔레콤 부산우정BP센터', kk: 'Ntelecom (부산우정BP)', uz: 'Ntelecom (부산우정BP)' },
            nameKo: '앤텔레콤 부산우정BP',
            region: 'busan',
            address: { ru: '부산 부산진구 부전로162번길 3 (부전동) 3층', en: '부산 부산진구 부전로162번길 3 (부전동) 3층', kk: '부산 부산진구 부전로162번길 3 (부전동) 3층', uz: '부산 부산진구 부전로162번길 3 (부전동) 3층' },
            addressKo: '부산 부산진구 부전로162번길 3 (부전동) 3층',
            phone: '010-8279-4320',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/부산%20부산진구%20부전로162번길%203%20(부전동)%203층'
        }
    },
    {
        id: 'telecom_ntele_busan_____bp_4',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (가자부산BP)', en: 'Ntelecom 가자부산BP', ko: '앤텔레콤 가자부산BP센터', kk: 'Ntelecom (가자부산BP)', uz: 'Ntelecom (가자부산BP)' },
            nameKo: '앤텔레콤 가자부산BP',
            region: 'busan',
            address: { ru: '부산 연제구 중앙대로1075번길 16 (연산동) 2층', en: '부산 연제구 중앙대로1075번길 16 (연산동) 2층', kk: '부산 연제구 중앙대로1075번길 16 (연산동) 2층', uz: '부산 연제구 중앙대로1075번길 16 (연산동) 2층' },
            addressKo: '부산 연제구 중앙대로1075번길 16 (연산동) 2층',
            phone: '051-866-1543',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/부산%20연제구%20중앙대로1075번길%2016%20(연산동)%202층'
        }
    },
    {
        id: 'telecom_ntele_busan_____bp_5',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (부산광명BP)', en: 'Ntelecom 부산광명BP', ko: '앤텔레콤 부산광명BP센터', kk: 'Ntelecom (부산광명BP)', uz: 'Ntelecom (부산광명BP)' },
            nameKo: '앤텔레콤 부산광명BP',
            region: 'busan',
            address: { ru: '부산 연제구 반송로 9 (연산동) 4층', en: '부산 연제구 반송로 9 (연산동) 4층', kk: '부산 연제구 반송로 9 (연산동) 4층', uz: '부산 연제구 반송로 9 (연산동) 4층' },
            addressKo: '부산 연제구 반송로 9 (연산동) 4층',
            phone: '051-852-0898',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/부산%20연제구%20반송로%209%20(연산동)%204층'
        }
    },
    {
        id: 'telecom_ntele_busan______bp_2',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (부산 미래BP)', en: 'Ntelecom 부산 미래BP', ko: '앤텔레콤 부산 미래BP센터', kk: 'Ntelecom (부산 미래BP)', uz: 'Ntelecom (부산 미래BP)' },
            nameKo: '앤텔레콤 부산 미래BP',
            region: 'busan',
            address: { ru: '부산 부산진구 범일로 175 (범천동) 2층', en: '부산 부산진구 범일로 175 (범천동) 2층', kk: '부산 부산진구 범일로 175 (범천동) 2층', uz: '부산 부산진구 범일로 175 (범천동) 2층' },
            addressKo: '부산 부산진구 범일로 175 (범천동) 2층',
            phone: '051-633-9956',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/부산%20부산진구%20범일로%20175%20(범천동)%202층'
        }
    },
    {
        id: 'telecom_ntele_gyeongnam___bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (창원BP)', en: 'Ntelecom 창원BP', ko: '앤텔레콤 창원BP센터', kk: 'Ntelecom (창원BP)', uz: 'Ntelecom (창원BP)' },
            nameKo: '앤텔레콤 창원BP',
            region: 'gyeongnam',
            address: { ru: '경남 창원시 마산합포구 합포로 240 (산호동) 4층', en: '경남 창원시 마산합포구 합포로 240 (산호동) 4층', kk: '경남 창원시 마산합포구 합포로 240 (산호동) 4층', uz: '경남 창원시 마산합포구 합포로 240 (산호동) 4층' },
            addressKo: '경남 창원시 마산합포구 합포로 240 (산호동) 4층',
            phone: '055-291-2953',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/경남%20창원시%20마산합포구%20합포로%20240%20(산호동)%204층'
        }
    },
    {
        id: 'telecom_ntele_gyeongnam___bp_2',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (거제BP)', en: 'Ntelecom 거제BP', ko: '앤텔레콤 거제BP센터', kk: 'Ntelecom (거제BP)', uz: 'Ntelecom (거제BP)' },
            nameKo: '앤텔레콤 거제BP',
            region: 'gyeongnam',
            address: { ru: '경남 거제시 장평로8길 30 (장평동) 2층 201호', en: '경남 거제시 장평로8길 30 (장평동) 2층 201호', kk: '경남 거제시 장평로8길 30 (장평동) 2층 201호', uz: '경남 거제시 장평로8길 30 (장평동) 2층 201호' },
            addressKo: '경남 거제시 장평로8길 30 (장평동) 2층 201호',
            phone: '055-637-5760',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/경남%20거제시%20장평로8길%2030%20(장평동)%202층%20201호'
        }
    },
    {
        id: 'telecom_ntele_gyeongnam_______bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (양산홍익으뜸BP)', en: 'Ntelecom 양산홍익으뜸BP', ko: '앤텔레콤 양산홍익으뜸BP센터', kk: 'Ntelecom (양산홍익으뜸BP)', uz: 'Ntelecom (양산홍익으뜸BP)' },
            nameKo: '앤텔레콤 양산홍익으뜸BP',
            region: 'gyeongnam',
            address: { ru: '경남 양산시 북안남3길 44 (북부동) 2층', en: '경남 양산시 북안남3길 44 (북부동) 2층', kk: '경남 양산시 북안남3길 44 (북부동) 2층', uz: '경남 양산시 북안남3길 44 (북부동) 2층' },
            addressKo: '경남 양산시 북안남3길 44 (북부동) 2층',
            phone: '055-385-5222',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/경남%20양산시%20북안남3길%2044%20(북부동)%202층'
        }
    },
    {
        id: 'telecom_ntele_gyeongnam___bp_3',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (김해BP)', en: 'Ntelecom 김해BP', ko: '앤텔레콤 김해BP센터', kk: 'Ntelecom (김해BP)', uz: 'Ntelecom (김해BP)' },
            nameKo: '앤텔레콤 김해BP',
            region: 'gyeongnam',
            address: { ru: '경남 김해시 김해대로 2389 (부원동) 3층', en: '경남 김해시 김해대로 2389 (부원동) 3층', kk: '경남 김해시 김해대로 2389 (부원동) 3층', uz: '경남 김해시 김해대로 2389 (부원동) 3층' },
            addressKo: '경남 김해시 김해대로 2389 (부원동) 3층',
            phone: '055-326-6016',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/경남%20김해시%20김해대로%202389%20(부원동)%203층'
        }
    },
    {
        id: 'telecom_ntele_gyeongnam______bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (김해 이레BP)', en: 'Ntelecom 김해 이레BP', ko: '앤텔레콤 김해 이레BP센터', kk: 'Ntelecom (김해 이레BP)', uz: 'Ntelecom (김해 이레BP)' },
            nameKo: '앤텔레콤 김해 이레BP',
            region: 'gyeongnam',
            address: { ru: '경남 김해시 가락로 26 (부원동) 부원프라자 7층', en: '경남 김해시 가락로 26 (부원동) 부원프라자 7층', kk: '경남 김해시 가락로 26 (부원동) 부원프라자 7층', uz: '경남 김해시 가락로 26 (부원동) 부원프라자 7층' },
            addressKo: '경남 김해시 가락로 26 (부원동) 부원프라자 7층',
            phone: '055-724-1850',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/경남%20김해시%20가락로%2026%20(부원동)%20부원프라자%207층'
        }
    },
    {
        id: 'telecom_ntele_gyeongnam______bp_2',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (창원글로벌BP)', en: 'Ntelecom 창원글로벌BP', ko: '앤텔레콤 창원글로벌BP센터', kk: 'Ntelecom (창원글로벌BP)', uz: 'Ntelecom (창원글로벌BP)' },
            nameKo: '앤텔레콤 창원글로벌BP',
            region: 'gyeongnam',
            address: { ru: '경남 창원시 의창구 창원대로363번길 22-57 (팔용동) 1층 114호', en: '경남 창원시 의창구 창원대로363번길 22-57 (팔용동) 1층 114호', kk: '경남 창원시 의창구 창원대로363번길 22-57 (팔용동) 1층 114호', uz: '경남 창원시 의창구 창원대로363번길 22-57 (팔용동) 1층 114호' },
            addressKo: '경남 창원시 의창구 창원대로363번길 22-57 (팔용동) 1층 114호',
            phone: '055-237-9016',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/경남%20창원시%20의창구%20창원대로363번길%2022-57%20(팔용동)%201층%20114호'
        }
    },
    {
        id: 'telecom_ntele_gyeongnam_____bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (진주남강BP)', en: 'Ntelecom 진주남강BP', ko: '앤텔레콤 진주남강BP센터', kk: 'Ntelecom (진주남강BP)', uz: 'Ntelecom (진주남강BP)' },
            nameKo: '앤텔레콤 진주남강BP',
            region: 'gyeongnam',
            address: { ru: '경남 진주시 범골로54번길 30-9 (충무공동) 드림IT밸리 주1동 B601호', en: '경남 진주시 범골로54번길 30-9 (충무공동) 드림IT밸리 주1동 B601호', kk: '경남 진주시 범골로54번길 30-9 (충무공동) 드림IT밸리 주1동 B601호', uz: '경남 진주시 범골로54번길 30-9 (충무공동) 드림IT밸리 주1동 B601호' },
            addressKo: '경남 진주시 범골로54번길 30-9 (충무공동) 드림IT밸리 주1동 B601호',
            phone: '010-9309-6265',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/경남%20진주시%20범골로54번길%2030-9%20(충무공동)%20드림IT밸리%20주1동%20B601호'
        }
    },
    {
        id: 'telecom_ntele_jeju___bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (올레BP)', en: 'Ntelecom 올레BP', ko: '앤텔레콤 올레BP센터', kk: 'Ntelecom (올레BP)', uz: 'Ntelecom (올레BP)' },
            nameKo: '앤텔레콤 올레BP',
            region: 'jeju',
            address: { ru: '제주특별자치도 제주시 남성로 16 (용담1동) 1층', en: '제주특별자치도 제주시 남성로 16 (용담1동) 1층', kk: '제주특별자치도 제주시 남성로 16 (용담1동) 1층', uz: '제주특별자치도 제주시 남성로 16 (용담1동) 1층' },
            addressKo: '제주특별자치도 제주시 남성로 16 (용담1동) 1층',
            phone: '064-749-3016',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/제주특별자치도%20제주시%20남성로%2016%20(용담1동)%201층'
        }
    },
    {
        id: 'telecom_ntele_jeju_____bp',
        verticalCode: 'telecom',
        data: {
            name: { ru: 'Ntelecom (제주우정BP)', en: 'Ntelecom 제주우정BP', ko: '앤텔레콤 제주우정BP센터', kk: 'Ntelecom (제주우정BP)', uz: 'Ntelecom (제주우정BP)' },
            nameKo: '앤텔레콤 제주우정BP',
            region: 'jeju',
            address: { ru: '제주특별자치도 제주시 삼봉로 137 (도련일동, 도련한양아파트) 101호', en: '제주특별자치도 제주시 삼봉로 137 (도련일동, 도련한양아파트) 101호', kk: '제주특별자치도 제주시 삼봉로 137 (도련일동, 도련한양아파트) 101호', uz: '제주특별자치도 제주시 삼봉로 137 (도련일동, 도련한양아파트) 101호' },
            addressKo: '제주특별자치도 제주시 삼봉로 137 (도련일동, 도련한양아파트) 101호',
            phone: '010-2700-8335',
            messenger: 'koreahub',
            availableServices: ['prepaid', 'postpaid', 'consult'],
            tips: { ru: 'Официальный партнерский центр Ntelecom (BP).', en: 'Official Ntelecom Partner Center (BP).' },
            naverMapUrl: 'https://map.naver.com/v5/search/제주특별자치도%20제주시%20삼봉로%20137%20(도련일동,%20도련한양아파트)%20101호'
        }
    },
    {
        id: 'attr_gyeongbokgung',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Дворец Кёнбоккун', en: 'Gyeongbokgung Palace', ko: '경복궁', kk: 'Кёнбоккун сарайы', uz: 'Kyungbokkung saroyi' },
            nameKo: '경복궁',
            category: 'palace',
            region: 'seoul',
            address: { ru: 'Сеул, Чонно-гу, Саджик-ро 161', en: '161 Sajik-ro, Jongno-gu, Seoul' },
            addressKo: '서울특별시 종로구 사직로 161',
            naverMapUrl: 'https://naver.me/G8tS9W1Y',
            description: { ru: 'Главный и крупнейший дворец династии Чосон.', en: 'The main royal palace of the Joseon dynasty.' }
        }
    },
    {
        id: 'attr_bukchon',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Деревня Букчон', en: 'Bukchon Hanok Village', ko: '북촌한옥마을', kk: 'Букчон ауылы', uz: 'Bukchon qishlog\'i' },
            nameKo: '북촌한옥마을',
            category: 'neighborhood',
            region: 'seoul',
            address: { ru: 'Сеул, Чонно-гу, Ге-дон', en: 'Gye-dong, Jongno-gu, Seoul' },
            addressKo: '서울특별시 종로구 계동',
            naverMapUrl: 'https://naver.me/FfM9I9v9',
            description: { ru: 'Традиционная корейская деревня с домами "ханок".', en: 'A traditional Korean village with hanok houses.' }
        }
    },
    {
        id: 'attr_seoul_tower',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Башня Намсан (N Seoul Tower)', en: 'N Seoul Tower', ko: 'N서울타워', kk: 'Намсан мұнарасы', uz: 'Namsan minorasi' },
            nameKo: 'N서울타워',
            category: 'landmark',
            region: 'seoul',
            address: { ru: 'Сеул, Йонсан-гу, Намсангонвон-гил 105', en: '105 Namsangongwon-gil, Yongsan-gu, Seoul' },
            addressKo: '서울특별시 용산구 남산공원길 105',
            naverMapUrl: 'https://naver.me/xw6qC9S0',
            description: { ru: 'Символ Сеула с панорамным видом на город.', en: 'A landmark of Seoul with panoramic city views.' }
        }
    },
    {
        id: 'attr_lotte_world',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Лотте Ворлд', en: 'Lotte World', ko: '롯데월드', kk: 'Лотте Ворлд', uz: 'Lotte World' },
            nameKo: '롯데월드',
            category: 'theme_park',
            region: 'seoul',
            address: { ru: 'Сеул, Сонпа-гу, Олимлик-ро 240', en: '240 Olympic-ro, Songpa-gu, Seoul' },
            addressKo: '서울특별시 송па구 올림픽로 240',
            naverMapUrl: 'https://naver.me/5L3X7vR2',
            description: { ru: 'Крупнейший крытый парк развлечений в мире.', en: 'One of the largest indoor theme parks in the world.' }
        }
    },
    {
        id: 'attr_gamcheon',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Культурная деревня Камчхон', en: 'Gamcheon Culture Village', ko: '감천문화마을', kk: 'Камчхон мәдени ауылы', uz: 'Gamcheon madaniyat qishlog\'i' },
            nameKo: '감천문화마을',
            category: 'neighborhood',
            region: 'busan',
            address: { ru: 'Пусан, Саха-гу, Камнэ 2-ро 203', en: '203 Gamnae 2-ro, Saha-gu, Busan' },
            addressKo: '부산광역시 사하구 감내2로 203',
            naverMapUrl: 'https://naver.me/F9V1S8X1',
            description: { ru: "Корейский Санторини — яркие домики на склоне холма.", en: "Known as the Santorini of Korea for its colorful houses on a hill." }
        }
    },
    {
        id: 'attr_haeundae',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Пляж Хэундэ', en: 'Haeundae Beach', ko: '해운대해수욕장', kk: 'Хэундэ жағажайы', uz: 'Haeundae plyaji' },
            nameKo: '해운대해수욕장',
            category: 'park',
            region: 'busan',
            address: { ru: 'Пусан, Хэундэ-гу, Хэундэ-хэбён-ло 264', en: '264 Haeundaehaebyeon-ro, Haeundae-gu, Busan' },
            addressKo: '부산광역시 해운대구 해운대해변로 264',
            naverMapUrl: 'https://naver.me/xk6C6C6C',
            description: { ru: 'Самый известный пляж в Южной Корее.', en: 'The most famous beach in South Korea.' }
        }
    },
    {
        id: 'attr_hallasan',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Гора Халласан', en: 'Hallasan Mountain', ko: '한라산', kk: 'Халласан тауы', uz: 'Hallasan tog\'i' },
            nameKo: '한라산국립공원',
            category: 'park',
            region: 'jeju',
            address: { ru: 'Чеджу, Чеджу-си, Халласан', en: 'Hallasan, Jeju-si, Jeju' },
            addressKo: '제주특별자치도 제주시 한라산',
            naverMapUrl: 'https://naver.me/xw6qC9S0',
            description: { ru: 'Самая высокая гора в Южной Корее, потухший вулкан.', en: 'The highest mountain in South Korea, a shield volcano.' }
        }
    },
    {
        id: 'attr_bulguksa',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Храм Пульгукса', en: 'Bulguksa Temple', ko: '불국사', kk: 'Пульгукса храмы', uz: 'Bulguksa ibodatxonasi' },
            nameKo: '불국사',
            category: 'temple',
            region: 'gyeongbuk',
            address: { ru: 'Кёнджу, Бульгук-ро 385', en: '385 Bulguk-ro, Gyeongju' },
            addressKo: '경상북도 경주시 불국로 385',
            naverMapUrl: 'https://naver.me/FfM9I9v9',
            description: { ru: 'Объект всемирного наследия ЮНЕСКО, шедевр буддийского искусства.', en: 'A UNESCO World Heritage site and a masterpiece of Buddhist art.' }
        }
    },
    {
        id: 'attr_everland',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Эверленд', en: 'Everland', ko: '에버랜드', kk: 'Эверленд', uz: 'Everland' },
            nameKo: '에버랜드',
            category: 'theme_park',
            region: 'gyeonggi',
            address: { ru: 'Кёнгидо, Йонъин, Эверленд-ро 199', en: '199 Everland-ro, Yongin, Gyeonggi-do' },
            addressKo: '경기도 용인시 처인구 포곡읍 에버랜드로 199',
            naverMapUrl: 'https://naver.me/xX6qC9S0',
            description: { ru: 'Крупнейший тематический парк в Корее.', en: 'The largest theme park in South Korea.' }
        }
    },
    {
        id: 'attr_seongsan',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Пик Сонсан Ильчхульбон', en: 'Seongsan Ilchulbong', ko: '성산일출봉', kk: 'Сонсан Ильчхульбон', uz: 'Seongsan Ilchulbong' },
            nameKo: '성산일출봉',
            category: 'landmark',
            region: 'jeju',
            address: { ru: 'Чеджу, Сонсан-ып, Ильчхуль-ро 284-6', en: '284-6 Ilchul-ro, Seongsan-eup, Seogwipo, Jeju' },
            addressKo: '제주특별자치도 서귀포시 성산읍 일출로 284-6',
            naverMapUrl: 'https://naver.me/FfM9I9v9',
            description: { ru: 'Холм Восхода солнца, образованный вулканической активностью.', en: 'Sunrise Peak, formed by volcanic eruptions.' }
        }
    },
    {
        id: 'attr_insadong',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Инсадон', en: 'Insadong', ko: '인사동', kk: 'Инсадон', uz: 'Insadong' },
            nameKo: '인사동',
            category: 'neighborhood',
            region: 'seoul',
            address: { ru: 'Сеул, Чонно-гу, Инсадон', en: 'Insadong, Jongno-gu, Seoul' },
            addressKo: '서울특별시 종로구 인사동',
            naverMapUrl: 'https://naver.me/xw6qC9S0',
            description: { ru: 'Район антиквариата, чайных домов и традиционного искусства.', en: 'A district known for antiques, traditional tea houses, and art.' }
        }
    },
    {
        id: 'attr_myeongdong',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Мёндон', en: 'Myeongdong', ko: '명동', kk: 'Мёндон', uz: 'Myeongdong' },
            nameKo: '명동',
            category: 'neighborhood',
            region: 'seoul',
            address: { ru: 'Сеул, Чун-гу, Мёндон', en: 'Myeong-dong, Jung-gu, Seoul' },
            addressKo: '서울특별시 중구 명동',
            naverMapUrl: 'https://naver.me/FfM9I9v9',
            description: { ru: 'Главный торговый район Кореи, рай для любителей косметики.', en: "Korea's primary shopping district, a paradise for cosmetics and street food." }
        }
    },
    {
        id: 'attr_gwangjang',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Рынок Квангджанг', en: 'Gwangjang Market', ko: '광장시장', kk: 'Квангджанг базары', uz: 'Gwangjang bozori' },
            nameKo: '광장시장',
            category: 'market',
            region: 'seoul',
            address: { ru: 'Сеул, Чонно-гу, Чангёнгун-ло 88', en: '88 Changgyeonggung-ro, Jongno-gu, Seoul' },
            addressKo: '서울특별시 종로구 창경궁로 88',
            naverMapUrl: 'https://naver.me/xw6qC9S0',
            description: { ru: 'Один из старейших рынков, знаменитый своей уличной едой.', en: 'One of the oldest traditional markets, famous for its street food.' }
        }
    },
    {
        id: 'attr_nami_island',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Остров Нами', en: 'Nami Island', ko: '남이섬', kk: 'Нами аралы', uz: 'Nami oroli' },
            nameKo: '남이섬',
            category: 'park',
            region: 'gangwon',
            address: { ru: 'Канвондо, Чхунчхон, Намисон-гил 1', en: '1 Namisum-gil, Chuncheon, Gangwon-do' },
            addressKo: '강원특별자치도 춘천시 남산면 남이섬길 1',
            naverMapUrl: 'https://naver.me/xw6qC9S0',
            description: { ru: 'Живописный остров, ставший популярным после дорам.', en: 'A picturesque island made famous by Korean dramas.' }
        }
    },
    {
        id: 'attr_seoraksan',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Горы Сораксан', en: 'Seoraksan National Park', ko: '설악산국립공원', kk: 'Сораксан таулары', uz: 'Seoraksan tog\'lari' },
            nameKo: '설악산국립공원',
            category: 'park',
            region: 'gangwon',
            address: { ru: 'Канвондо, Сокчхо, Сорак-ро 833', en: '833 Seorak-ro, Sokcho, Gangwon-do' },
            addressKo: '강원특별자치도 속초시 설악동 설악로 833',
            naverMapUrl: 'https://naver.me/FfM9I9v9',
            description: { ru: 'Национальный парк с самыми красивыми горами в Корее.', en: 'A national park featuring some of the most beautiful mountains in Korea.' }
        }
    },
    {
        id: 'attr_hwaseong',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Крепость Хвасон', en: 'Hwaseong Fortress', ko: '수원 화성', kk: 'Хвасон бекінісі', uz: 'Hwaseong qal\'asi' },
            nameKo: '수원 화성',
            category: 'landmark',
            region: 'gyeonggi',
            address: { ru: 'Кёнгидо, Сувон, Хаенггунг-ро 11', en: '11 Haenggung-ro, Suwon, Gyeonggi-do' },
            addressKo: '경기도 수원시 팔달구 행궁로 11',
            naverMapUrl: 'https://naver.me/xw6qC9S0',
            description: { ru: 'Уникальная крепость XVIII века, объект ЮНЕСКО.', en: 'A unique 18th-century fortress and a UNESCO World Heritage site.' }
        }
    },
    {
        id: 'attr_jeonju_village',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Деревня ханоков Чонджу', en: 'Jeonju Hanok Village', ko: '전주한옥마을', kk: 'Чонджу ханок ауылы', uz: 'Jeonju hanok qishlog\'i' },
            nameKo: '전주한옥마을',
            category: 'neighborhood',
            region: 'jeolla',
            address: { ru: 'Чолла-пукто, Чонджу, Гринэ-ро 99', en: '99 Girin-daero, Wansan-gu, Jeonju, Jeollabuk-do' },
            addressKo: '전북특별자치도 전주시 완산구 기린대로 99',
            naverMapUrl: 'https://naver.me/FfM9I9v9',
            description: { ru: 'Крупнейшая деревня ханоков, столица корейской кухни.', en: 'The largest hanok village and the capital of Korean cuisine.' }
        }
    },
    {
        id: 'attr_jagalchi',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Рынок Чагальчхи', en: 'Jagalchi Market', ko: '자갈치시장', kk: 'Чагальчхи базары', uz: 'Jagalchi bozori' },
            nameKo: '자갈치시장',
            category: 'market',
            region: 'busan',
            address: { ru: 'Пусан, Чун-гу, Чагальчхи-ро 52', en: '52 Jagalchi-ro, Jung-gu, Busan' },
            addressKo: '부산광역시 중구 자갈치로 52',
            naverMapUrl: 'https://naver.me/xw6qC9S0',
            description: { ru: 'Крупнейший рыбный рынок в Корее.', en: "The largest seafood market in Korea." }
        }
    },
    {
        id: 'attr_seokguram',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Грот Соккурам', en: 'Seokguram Grotto', ko: '석굴암', kk: 'Соккурам үңгірі', uz: 'Seokguram g\'ori' },
            nameKo: '석굴암',
            category: 'temple',
            region: 'gyeongbuk',
            address: { ru: 'Кёнджу, Бульгук-ро 873-243', en: '873-243 Bulguk-ro, Gyeongju' },
            addressKo: '경상북도 경주시 불국로 873-243',
            naverMapUrl: 'https://naver.me/xw6qC9S0',
            description: { ru: 'Искусственный гранитный грот с монументальной статуей Будды.', en: 'An artificial granite grotto with a monumental Buddha statue.' }
        }
    },
    {
        id: 'attr_hwaseong_haenggung',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Дворец Хвасон Хэнгун', en: 'Hwaseong Haenggung', ko: '화성행궁', kk: 'Хвасон Хэнгун сарайы', uz: 'Hwaseong Haenggung saroyi' },
            nameKo: '화성행궁',
            category: 'palace',
            region: 'gyeonggi',
            address: { ru: 'Кёнгидо, Сувон, Хаенггунг-ро 82', en: '82 Haenggung-ro, Suwon, Gyeonggi-do' },
            addressKo: '경기도 수원시 팔달구 행궁로 82',
            naverMapUrl: 'https://naver.me/FfM9I9v9',
            description: { ru: 'Временный дворец, где останавливались короли во время поездок.', en: 'A temporary palace where kings stayed during their travels.' }
        }
    },
    {
        id: 'attr_maritime_museum',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Национальный морской музей', en: 'National Maritime Museum', ko: '국립해양박물관', kk: 'Ұлттық теңіз мұражайы', uz: 'Milliy dengiz muzeyi' },
            nameKo: '국립해양박물관',
            category: 'museum',
            region: 'busan',
            address: { ru: 'Пусан, Йондо-гу, Хэмёнг-ло 301번길 45', en: '45 Haemyang-ro 301beon-gil, Yeongdo-gu, Busan' },
            addressKo: '부산광역시 영도구 해양로301번길 45',
            naverMapUrl: 'https://naver.me/xw6qC9S0',
            description: { ru: 'Крупнейший морской музей в Корее с океанариумом.', en: "Korea's representative maritime museum with an aquarium." }
        }
    },
    {
        id: 'attr_bijarim',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Лес Биджарим', en: 'Bijarim Forest', ko: '비자림', kk: 'Биджарим орманы', uz: 'Bijarim o\'rmoni' },
            nameKo: '비자림',
            category: 'park',
            region: 'jeju',
            address: { ru: 'Чеджу, Гуджва-ып, Биджасуп-гил 15', en: '15 Bijasup-gil, Gujwa-eup, Jeju' },
            addressKo: '제주특별자치도 제주시 구좌읍 비자숲길 15',
            naverMapUrl: 'https://naver.me/FfM9I9v9',
            description: { ru: 'Уникальный лес с тысячелетними деревьями мускатного ореха.', en: 'A unique forest with thousand-year-old nutmeg trees.' }
        }
    },
    {
        id: 'attr_hahoe',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Деревня Хахве', en: 'Hahoe Folk Village', ko: '안동하회마을', kk: 'Хахве ауылы', uz: 'Hahoe qishlog\'i' },
            nameKo: '안동하회마을',
            category: 'neighborhood',
            region: 'gyeongbuk',
            address: { ru: 'Кёнсан-пукто, Андонг, Хахведжонг-гил 40', en: '40 Hahoenamchone-gil, Pungcheon-myeon, Andong, Gyeongsangbuk-do' },
            addressKo: '경상북도 안동시 풍천면 하회남촌길 40',
            naverMapUrl: 'https://naver.me/xw6qC9S0',
            description: { ru: 'Традиционная клановая деревня периода Чосон.', en: 'A traditional clan village from the Joseon period.' }
        }
    },
    {
        id: 'attr_incheon_chinatown',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Чайнатаун Инчхона', en: 'Incheon Chinatown', ko: '인천 차이나타운', kk: 'Инчхон Чайнатаун', uz: 'Incheon Chinatown' },
            nameKo: '인천 차이나타운',
            category: 'neighborhood',
            region: 'incheon',
            address: { ru: 'Инчхон, Чун-гу, Чайнатаун-ло 26-ро 12-1', en: '12-1 Chinatown-ro 26beon-gil, Jung-gu, Incheon' },
            addressKo: '인천광역시 중구 차이나타운로26번길 12-1',
            naverMapUrl: 'https://naver.me/FfM9I9v9',
            description: { ru: 'Единственный официальный Чайнатаун в Корее, родина Чачжанмёна.', en: "Korea's only official Chinatown and the birthplace of Jajangmyeon." }
        }
    },
    {
        id: 'attr_83_tower',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Башня 83 (Тэгу)', en: '83 Tower (Daegu)', ko: '83타워', kk: '83 мұнарасы', uz: '83 minorasi' },
            nameKo: '83타워',
            category: 'landmark',
            region: 'daegu',
            address: { ru: 'Тэгу, Дальсо-гу, Дулюгонгвон-ло 200', en: '200 Duryugongwon-ro, Dalseo-gu, Daegu' },
            addressKo: '대구광역시 달서구 두류공원로 200',
            naverMapUrl: 'https://naver.me/xw6qC9S0',
            description: { ru: 'Символ Тэгу с вращающимся рестораном и панорамным видом.', en: 'A symbol of Daegu with a revolving restaurant and views.' }
        }
    },
    {
        id: 'attr_518_park',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Парк 5.18', en: '5.18 Memorial Park', ko: '5.18기념공원', kk: '5.18 мемориалдық паркі', uz: '5.18 memorial bog\'i' },
            nameKo: '5.18기념공원',
            category: 'park',
            region: 'gwangju',
            address: { ru: 'Кванджу, Сео-гу, Нэбанг-ло 111', en: '111 Naebang-ro, Seo-gu, Gwangju' },
            addressKo: '광주광역시 서구 내방로 111',
            naverMapUrl: 'https://naver.me/FfM9I9v9',
            description: { ru: 'Парк в память о движении за демократизацию в Кванджу.', en: 'A park commemorating the Gwangju Democratization Movement.' }
        }
    },
    {
        id: 'attr_dongdaemun',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Тондэмун (DDP)', en: 'Dongdaemun (DDP)', ko: '동대문/DDP', kk: 'Тондэмун', uz: 'Dongdaemun' },
            nameKo: '동대문 디자인 플라자 (DDP)',
            category: 'neighborhood',
            region: 'seoul',
            address: { ru: 'Сеул, Чун-гу, Ыльджи-ро 281', en: '281 Eulji-ro, Jung-gu, Seoul' },
            addressKo: '서울특별시 중구 을지로 281',
            naverMapUrl: 'https://naver.me/xw6qC9S0',
            description: { ru: 'Центр моды и дизайна, футуристичное здание DDP.', en: 'The center of fashion and design, featuring the futuristic DDP building.' }
        }
    },
    {
        id: 'attr_namdaemun',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Рынок Намдэмун', en: 'Namdaemun Market', ko: '남대문시장', kk: 'Намдэмун базары', uz: 'Namdaemun bozori' },
            nameKo: '남대문시장',
            category: 'market',
            region: 'seoul',
            address: { ru: 'Сеул, Чун-гу, Намдэмун-сиджанг-гил 21', en: '21 Namdaemunsijang-gil, Jung-gu, Seoul' },
            addressKo: '서울특별시 중구 남대문시장길 21',
            naverMapUrl: 'https://naver.me/FfM9I9v9',
            description: { ru: 'Старейший и крупнейший традиционный рынок Кореи.', en: "Korea's oldest and largest traditional market." }
        }
    },
    {
        id: 'attr_itaewon',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Итэвон', en: 'Itaewon', ko: '이태원', kk: 'Итэвон', uz: 'Itaewon' },
            nameKo: '이태원관광특구',
            category: 'neighborhood',
            region: 'seoul',
            address: { ru: 'Сеул, Йонсан-гу, Итэвон', en: 'Itaewon, Yongsan-gu, Seoul' },
            addressKo: '서울특별시 용산구 이태원동',
            naverMapUrl: 'https://naver.me/xw6qC9S0',
            description: { ru: 'Самый интернациональный район Сеула, центр ночной жизни.', en: "Seoul's most international district, a hub for nightlife and global cuisine." }
        }
    },
    {
        id: 'attr_myeongdong_kyoja',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Мёндон Кёджа', en: 'Myeongdong Kyoja', ko: '명동교자', kk: 'Мёндон Кёджа', uz: 'Myeongdong Kyoja' },
            nameKo: '명동교자 본점',
            category: 'restaurant',
            region: 'seoul',
            address: { ru: 'Сеул, Чун-гу, Мёндон 10-гил 29', en: '29 Myeongdong 10-gil, Jung-gu, Seoul' },
            addressKo: '서울특별시 중구 명동10길 29',
            naverMapUrl: 'https://naver.me/xw6qC9S0',
            description: { ru: 'Легендарный ресторан калгуксу и манду в Мёндоне, отмеченный Мишлен.', en: 'Michelin-guide restaurant famous for Kal-guksu and Mandu in Myeongdong.' }
        }
    },
    {
        id: 'attr_tosokchon',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Тосокчон Самгетхан', en: 'Tosokchon Samgyetang', ko: '토속촌 삼계탕', kk: 'Тосокчон Самгетхан', uz: 'Tosokchon Samgyetang' },
            nameKo: '토속촌 삼계탕',
            category: 'restaurant',
            region: 'seoul',
            address: { ru: 'Сеул, Чонно-гу, Джахамун-ло 5-гил 5', en: '5 Jahamun-ro 5-gil, Jongno-gu, Seoul' },
            addressKo: '서울특별시 종ро구 자하문로5길 5',
            naverMapUrl: 'https://naver.me/FfM9I9v9',
            description: { ru: 'Самый известный ресторан самгетхана (суп из цыпленка с женьшенем).', en: 'The most legendary restaurant for Samgyetang (ginseng chicken soup).' }
        }
    },
    {
        id: 'attr_bukchon_mandu',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Букчон Сон Манду', en: 'Bukchon Son Mandu', ko: '북촌손만두', kk: 'Букчон Сон Манду', uz: 'Bukchon Son Mandu' },
            nameKo: '북촌손만두 인사본점',
            category: 'restaurant',
            region: 'seoul',
            address: { ru: 'Сеул, Чонно-гу, Инсадон-гил 42-2', en: '42-2 Insadong-gil, Jongno-gu, Seoul' },
            addressKo: '서울특별시 종로구 인사동길 42-2',
            naverMapUrl: 'https://naver.me/xw6qC9S0',
            description: { ru: 'Знаменитые домашние манду в Инсадоне.', en: 'Famous handmade dumplings in the heart of Insadong.' }
        }
    },
    {
        id: 'attr_coffee_hanyakbang',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Кофе Ханьякбанг', en: 'Coffee Hanyakbang', ko: '커피한약방', kk: 'Кофе Ханьякбанг', uz: 'Coffee Hanyakbang' },
            nameKo: '커피한약방',
            category: 'cafe',
            region: 'seoul',
            address: { ru: 'Сеул, Чун-гу, Сэммунан-ло 2-ро 16-3', en: '16-3 Samil-daero 12-gil, Jung-gu, Seoul' },
            addressKo: '서울특별시 중구 삼일대로12길 16-3',
            naverMapUrl: 'https://naver.me/FfM9I9v9',
            description: { ru: 'Атмосферное ретро-кафе в узком переулке Ыльджиро.', en: 'Atmospheric retro cafe hidden in a narrow Euljiro alley.' }
        }
    },
    {
        id: 'attr_sanmotoonge',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Кафе Санмотунге', en: 'Sanmotoonge Cafe', ko: '산모퉁이', kk: 'Санмотунге кафесі', uz: 'Sanmotoonge kafesi' },
            nameKo: '산모퉁이',
            category: 'cafe',
            region: 'seoul',
            address: { ru: 'Сеул, Чонно-гу, Пэксокдонг-гил 153', en: '153 Baekseokdong-gil, Jongno-gu, Seoul' },
            addressKo: '서울특별시 종로구 백석동길 153',
            naverMapUrl: 'https://naver.me/xw6qC9S0',
            description: { ru: 'Место съемок "Первое кафе Принц" с потрясающим видом.', en: 'Filming location of "Coffee Prince" with stunning mountain views.' }
        }
    },
    {
        id: 'attr_seoul_land',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Сеул Лэнд', en: 'Seoul Land', ko: '서울랜드', kk: 'Сеул Лэнд', uz: 'Seoul Land' },
            nameKo: '서울랜드',
            category: 'theme_park',
            region: 'gyeonggi',
            address: { ru: 'Кёнгидо, Квачхон, Гванмёнг-ло 181', en: '181 Gwangmyeong-ro, Gwacheon, Gyeonggi-do' },
            addressKo: '경기도 과천시 광명로 181',
            naverMapUrl: 'https://naver.me/xw6qC9S0',
            description: { ru: 'Первый тематический парк в Корее, отлично подходит для детей.', en: "Korea's first theme park, excellent for families with children." }
        }
    },
    {
        id: 'attr_gyeongju_world',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Кёнджу Ворлд', en: 'Gyeongju World', ko: '경주월д', kk: 'Кёнджу Ворлд', uz: 'Gyeongju World' },
            nameKo: '경주월드',
            category: 'theme_park',
            region: 'gyeongbuk',
            address: { ru: 'Кёнджу, Бомун-ло 544', en: '544 Bomun-ro, Gyeongju' },
            addressKo: '경상북도 경주시 보문로 544',
            naverMapUrl: 'https://naver.me/FfM9I9v9',
            description: { ru: 'Главный парк развлечений в южном регионе с экстремальными горками.', en: 'The main theme park in the southern region with extreme roller coasters.' }
        }
    },
    {
        id: 'attr_seoul_zoo',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Сеульский зоопарк', en: 'Seoul Zoo', ko: '서울동물원', kk: 'Сеул хайуанаттар бағы', uz: 'Seul hayvonot bog\'i' },
            nameKo: '서울동물원',
            category: 'zoo',
            region: 'gyeonggi',
            address: { ru: 'Кёнгидо, Квачхон, Дэгонвон-гвангджанг-ло 102', en: '102 Daegongwon-gwangjang-ro, Gwacheon, Gyeonggi-do' },
            addressKo: '경기도 과천시 대공원광장로 102',
            naverMapUrl: 'https://naver.me/xw6qC9S0',
            description: { ru: 'Крупнейший зоопарк в Корее, расположенный в Seoul Grand Park.', en: "Korea's largest zoo, located within the Seoul Grand Park complex." }
        }
    },
    {
        id: 'attr_coex_aquarium',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Океанариум COEX', en: 'COEX Aquarium', ko: '코엑스 아쿠아리움', kk: 'COEX океанариумы', uz: 'COEX okeanariumi' },
            nameKo: '코엑스 아쿠아리움',
            category: 'aquarium',
            region: 'seoul',
            address: { ru: 'Сеул, Каннам-гу, Йонгдонг-дэло 513', en: '513 Yeongdong-daero, Gangnam-gu, Seoul' },
            addressKo: '서울특별시 강남구 영동대로 513',
            naverMapUrl: 'https://naver.me/FfM9I9v9',
            description: { ru: 'Один из крупнейших океанариумов Сеула в торговом центре COEX.', en: "One of Seoul's largest aquariums located in the COEX Mall." }
        }
    },
    {
        id: 'attr_lotte_aquarium',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Океанариум Лотте Ворлд', en: 'Lotte World Aquarium', ko: '롯데월드 아쿠아리움', kk: 'Лотте Ворлд океанариумы', uz: 'Lotte World okeanariumi' },
            nameKo: '롯데월드 아쿠а리움',
            category: 'aquarium',
            region: 'seoul',
            address: { ru: 'Сеул, Сонпа-гу, Олимлик-ро 300', en: '300 Olympic-ro, Songpa-gu, Seoul' },
            addressKo: '서울특별시 송파구 올림픽로 300',
            naverMapUrl: 'https://naver.me/xw6qC9S0',
            description: { ru: 'Современный океанариум в башне Lotte World Tower.', en: 'A modern aquarium located in the Lotte World Tower.' }
        }
    },
    {
        id: 'attr_aqua_planet_jeju',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Aqua Planet Чеджу', en: 'Aqua Planet Jeju', ko: '아쿠아플라넷 제주', kk: 'Aqua Planet Чеджу', uz: 'Aqua Planet Jeju' },
            nameKo: '아쿠아플라넷 제주',
            category: 'aquarium',
            region: 'jeju',
            address: { ru: 'Чеджу, Сонсан-ып, Сопджикодзи-ло 95', en: '95 Seopjikoji-ro, Seongsan-eup, Seogwipo, Jeju' },
            addressKo: '제주특별자치도 서귀포시 성산읍 섭지코지로 95',
            naverMapUrl: 'https://naver.me/FfM9I9v9',
            description: { ru: 'Крупнейший океанариум в Восточной Азии с панорамным видом.', en: 'The largest aquarium in East Asia with a massive viewing tank.' }
        }
    },
    {
        id: 'attr_aqua_planet_yeosu',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'Aqua Planet Йосу', en: 'Aqua Planet Yeosu', ko: '아쿠아플라넷 여수', kk: 'Aqua Planet Йосу', uz: 'Aqua Planet Yeosu' },
            nameKo: '아쿠아플라넷 여수',
            category: 'aquarium',
            region: 'jeolla',
            address: { ru: 'Чолла-намдо, Йосу, Одонгдо-ло 61-11', en: '61-11 Odongdo-ro, Yeosu, Jeollanam-do' },
            addressKo: '전라남도 여수시 오동도로 61-11',
            naverMapUrl: 'https://naver.me/xw6qC9S0',
            description: { ru: 'Известный океанариум, построенный к EXPO 2012.', en: 'A famous aquarium built for the 2012 World Expo.' }
        }
    },
    {
        id: 'attr_busan_aquarium',
        verticalCode: 'attractions',
        data: {
            name: { ru: 'SEA LIFE Пусан', en: 'SEA LIFE Busan Aquarium', ko: 'SEA LIFE 부산아쿠아리움', kk: 'SEA LIFE Пусан', uz: 'SEA LIFE Busan' },
            nameKo: 'SEA LIFE 부산아쿠아리움',
            category: 'aquarium',
            region: 'busan',
            address: { ru: 'Пусан, Хэундэ-гу, Хэундэ-хэбён-ло 266', en: '266 Haeundaehaebyeon-ro, Haeundae-gu, Busan' },
            addressKo: '부산광역시 해운대구 해운대해변로 266',
            naverMapUrl: 'https://naver.me/FfM9I9v9',
            description: { ru: 'Океанариум на пляже Хэундэ с подводным туннелем.', en: 'An aquarium at Haeundae Beach featuring an underwater tunnel.' }
        }
    }
];

// For backward compatibility while refactoring
export const MOCK_ENTITIES = REGISTRY_DATA;
