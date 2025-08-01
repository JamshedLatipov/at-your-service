import { Translations } from '../translation.types';

export const tg: Translations = {
    navigation: {
        home: 'Асосӣ',
        requests: 'Дархостҳо',
        search: 'Ҷустуҷӯ',
        profile: 'Профил',
        settings: 'Танзимот'
    },
    common: {
        loading: 'Боргирӣ...',
        error: 'Хато',
        search: 'Ҷустуҷӯ',
        submit: 'Фиристодан',
        cancel: 'Бекор кардан',
        logout: 'Баромадан',
        actions: {
            back: 'Бозгашт'
        }
    },
    pages: {
        settings: {
            notificationSettings: 'Танзимоти огоҳиҳо',
            enableNotifications: {
                title: 'Фаъол кардани огоҳиҳо',
                description: 'Ҳамаи навсозиҳо ва огоҳиҳоро гиред.'
            },
            serviceResponses: {
                title: 'Ҷавобҳои хизматрасонӣ',
                description: 'Вақте ки мутахассис ҷавоб медиҳад.'
            },
            appointmentReminders: {
                title: 'Ёдрасҳои мулоқот',
                description: 'Барои хизматрасониҳои оянда.'
            },
            promotionalOffers: {
                title: 'Пешниҳодҳои рекламавӣ',
                description: 'Пешниҳодҳои махсус ва навсозиҳо.'
            },
            language: {
                title: 'Забон',
                selectLanguage: 'Забонро интихоб кунед',
                description: 'Забони дилхоҳи худро интихоб кунед'
            }
        },
        home: {
            title: 'Асосӣ',
            hero: {
                title1: 'Барои ҳар кор',
                pro: 'мутахассис',
                title2: 'пайдо кунед',
                subtitle: 'Пешниҳодҳоро гиред, тақризҳоро хонед ва мутахассисони боэътимодро кироя кунед'
            },
            search: {
                servicePrompt: 'Кадом хизмат лозим аст?'
            },
            services: {
                plumbing: 'Сантехника',
                electrical: 'Барқчӣ',
                cleaning: 'Рӯбучин',
                handyman: 'Устои дастӣ',
                painting: 'Рангмолӣ',
                landscaping: 'Дизайни ландшафт'
            },
            popularServices: {
                title: 'Хизматҳои маъмул',
                subtitle: 'Хизматҳои аз ҳама бештар дархостшудаи хонаро бубинед',
                viewMore: 'Ёфтани мутахассисони бештар'
            },
            experts: {
                title: 'Мутахассисони касбӣ',
                subtitle: 'Хизматрасонҳои мо бо баҳои баландтарин'
            },
            reviews: {
                title: 'Мизоҷони мо чӣ мегӯянд',
                subtitle: 'Тақризҳои мизоҷони қаноатмандро хонед'
            },
            cta: {
                title: 'Тайёр ҳастед, ки оғоз кунед?',
                subtitle: 'Имрӯз мутахассиси мувофиқро барои лоиҳаи худ пайдо кунед'
            }
        },
        requests: {
            title: 'Дархостҳо',
            available: {
                title: 'Дархостҳои дастрас',
                filters: {
                    title: 'Филтрҳо',
                    reset: 'Бозсозӣ',
                    types: {
                        all: 'Ҳама намудҳо',
                        plumbing: 'Сантехника',
                        electrical: 'Барқчӣ',
                        hvac: 'Гармкунӣ ва хунуккунӣ'
                    },
                    locations: {
                        all: 'Ҳама ҷойҳо',
                        near: 'Дар наздикии ман',
                        far: 'Дур'
                    }
                },
                actions: {
                    pickup: 'Гирифтани дархост'
                }
            },
            new: {
                title: 'Дархости нав',
                steps: {
                    service: {
                        title: 'Кадом хизмат лозим аст?',
                        typeLabel: 'Категорияро интихоб кунед',
                        timeframeTitle: 'Ин кай лозим аст?',
                        activityTitle: 'Фаъолияти охирини устоҳо',
                        preferenceTitle: 'Интихоби усто',
                        minRating: 'Рейтинги ҳадди ақал',
                        starsUp: 'ситора ва болотар',
                        services: {
                            plumbing: 'Сантехника',
                            electrical: 'Барқчӣ',
                            cleaning: 'Рӯбучин',
                            handyman: 'Усто'
                        },
                        times: {
                            asap: 'Ҳарчи зудтар',
                            week: 'Дар давоми як ҳафта',
                            date: 'Интихоби сана'
                        },
                        activity: {
                            any: 'Дилхоҳ',
                            today: 'Имрӯз фаъол',
                            threeDays: 'Дар 3 рӯзи охир фаъол'
                        }
                    },
                    description: {
                        title: 'Ба шумо чӣ гуна кӯмак лозим аст?',
                        subtitle: 'Барои он ки мутахассисон нархи дақиқ пешниҳод кунанд, тавсифи муфассал диҳед.',
                        placeholder: 'Масалан, ба ман сантехник барои таъмири ҳоҷатхонаи чакидаистода лозим аст. Вай доимо мечакад ва дастааш суст шудааст. Ман мехоҳам инро ҳарчи зудтар таъмир кунам.',
                        tip: 'Маслиҳат: Андозаи майдон, қисмҳои мушаххасе, ки диққат додан лозим аст ва ҳама гуна маводҳои дар ихтиёри шумо бударо қайд кунед.'
                    },
                    details: {
                        title: 'Тафсилоти иловагӣ',
                        subtitle: 'Тафсилоти иловагӣ ё дастурҳои мушаххасро пешниҳод кунед.',
                        placeholder: 'Масалан: "Крани чакида дар ҳаммоми ошёнаи боло аст. Хона соли 1985 сохта шудааст ва қубурҳои мисӣ дорад."',
                        photos: {
                            title: 'Суратҳо',
                            subtitle: 'Барои ба мутахассис ёрӣ додан дар фаҳмидани беҳтари вазифа, сурат илова кунед.',
                            dragDrop: 'Кашида монед ё барои боргузорӣ пахш кунед',
                            formats: 'PNG, JPG, GIF то 10МБ',
                            upload: 'Боргузории суратҳо'
                        }
                    }
                },
                navigation: {
                    continue: 'Давом додан',
                    back: 'Бозгашт',
                    finish: 'Анҷом додан',
                    step: 'аз'
                }
            }
        },
        profile: {
            title: 'Профил',
            roles: {
                client: 'Муштарӣ',
                master: 'Усто',
                admin: 'Мудир'
            }
        },
        auth: {
            email: 'Email',
            phone: 'Рақами телефон',
            enterOtp: 'Рамзи тасдиқро ворид кунед',
            resend: 'Аз нав фиристодан',
            verify: 'Тасдиқ',
            signUp: 'Бақайдгирӣ',
            logIn: 'Даромад',
            termsText: 'Бо бақайдгирӣ шумо инҳоро қабул мекунед',
            termsLink: 'Шартҳои истифода',
            privacyLink: 'Сиёсати махфият',
            and: 'ва',
            haveAccount: 'Аллакай ҳисоб доред?',
            noAccount: 'Ҳисоб надоред?',
            continueWith: 'ё идома диҳед'
        }
    }
};