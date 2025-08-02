import { Translations } from '../translation.types';

export const ky: Translations = {
    navigation: {
        home: 'Башкы бет',
        requests: 'Тапшырмалар',
        search: 'Издөө',
        profile: 'Профиль',
        settings: 'Түзмөлөр'
    },
    common: {
        loading: 'Жүктөлүүдө...',
        error: 'Ката',
        search: 'Издөө',
        submit: 'Жөнөтүү',
        cancel: 'Жокко чыгаруу',
        logout: 'Чыгуу',
        actions: {
            back: 'Артка'
        }
    },
    pages: {
        settings: {
            notificationSettings: 'Билдирүү жөндөөлөрү',
            enableNotifications: {
                title: 'Билдирүүлөрдү иштетүү',
                description: 'Бардык жаңыртууларды жана эскертүүлөрдү алыңыз.'
            },
            serviceResponses: {
                title: 'Кызмат жооптору',
                description: 'Адис жооп бергенде.'
            },
            appointmentReminders: {
                title: 'Жолугушуу эскертүүлөрү',
                description: 'Келе жаткан кызматтар үчүн.'
            },
            promotionalOffers: {
                title: 'Жарнамалык сунуштар',
                description: 'Атайын сунуштар жана жаңыртуулар.'
            },
            language: {
                title: 'Тил',
                selectLanguage: 'Тил тандаңыз',
                description: 'Каалаган тилиңизди тандаңыз'
            }
        },
        home: {
            title: 'Башкы бет',
            hero: {
                title1: 'Ар кандай иш үчүн',
                pro: 'адис',
                title2: 'табыңыз',
                subtitle: 'Сунуштарды алыңыз, пикирлерди окуңуз жана ишенимдүү адистерди жалдаңыз'
            },
            search: {
                servicePrompt: 'Кандай кызмат керек?'
            },
            services: {
                plumbing: 'Сантехника',
                electrical: 'Электрик',
                cleaning: 'Тазалоо',
                handyman: 'Уста',
                painting: 'Сырдоо',
                landscaping: 'Ландшафт дизайны'
            },
            popularServices: {
                title: 'Популярдуу кызматтар',
                subtitle: 'Эң көп суралган үй кызматтарын көрүңүз',
                viewMore: 'Көбүрөөк адистерди табуу'
            },
            experts: {
                title: 'Кесипкөй адистер',
                subtitle: 'Жогорку баа алган кызмат көрсөтүүчүлөрүбүз'
            },
            reviews: {
                title: 'Кардарлардын пикири',
                subtitle: 'Ыраазы болгон кардарлардын пикирлерин окуңуз'
            },
            cta: {
                title: 'Баштоого даярсызбы?',
                subtitle: 'Долбооруңуз үчүн мыкты адисти бүгүн табыңыз'
            }
        },
        requests: {
            title: 'Тапшырмалар',
            available: {
                title: 'Жеткиликтүү өтүнмөлөр',
                filters: {
                    title: 'Чыпкалар',
                    reset: 'Баштапкы абалга келтирүү',
                    types: {
                        all: 'Бардык түрлөр',
                        plumbing: 'Сантехника',
                        electrical: 'Электрик',
                        hvac: 'Жылытуу жана муздатуу'
                    },
                    locations: {
                        all: 'Бардык жерлер',
                        near: 'Мага жакын',
                        far: 'Алыста'
                    }
                },
                actions: {
                    pickup: 'Өтүнмөнү алуу'
                }
            },
            new: {
                title: 'Жаңы тапшырма',
                steps: {
                    service: {
                        title: 'Кандай кызмат керек?',
                        typeLabel: 'Категорияны тандаңыз',
                        timeframeTitle: 'Бул качан керек?',
                        activityTitle: 'Усталардын акыркы активдүүлүгү',
                        preferenceTitle: 'Уста тандоо',
                        minRating: 'Минималдуу рейтинг',
                        starsUp: 'жылдыз жана жогору',
                        services: {
                            plumbing: 'Сантехника',
                            electrical: 'Электрик',
                            cleaning: 'Тазалоо',
                            handyman: 'Уста'
                        },
                        times: {
                            asap: 'Мүмкүн болушунча тезирээк',
                            week: 'Бир жума ичинде',
                            date: 'Күндү тандоо'
                        },
                        activity: {
                            any: 'Каалаган',
                            today: 'Бүгүн активдүү',
                            threeDays: 'Акыркы 3 күндө активдүү'
                        }
                    },
                    description: {
                        title: 'Сизге кандай жардам керек?',
                        subtitle: 'Адистер так баа бере алышы үчүн толук сүрөттөмө бериңиз.',
                        placeholder: 'Мисалы, мага сантехник агып жаткан даараткананы оңдош керек. Ал дайыма агып жатат жана туткасы бошоп калган. Муну мүмкүн болушунча тезирээк оңдогум келет.',
                        tip: 'Аянттын өлчөмү, көңүл буруу керек болгон так бөлүктөр жана сизде бар болгон материалдар сыяктуу маалыматтарды көрсөтүңүз.'
                    },
                    details: {
                        title: 'Кошумча маалыматтар',
                        subtitle: 'Кошумча маалыматтарды же так көрсөтмөлөрдү бериңиз.',
                        placeholder: 'Мисалы: "Агып жаткан кран жогорку кабаттагы ванна бөлмөсүндө. Үй 1985-жылы курулган жана жез түтүктөрү бар."',
                        photos: {
                            title: 'Сүрөттөр',
                            subtitle: 'Адиске тапшырманы жакшыраак түшүнүүгө жардам берүү үчүн сүрөт кошуңуз.',
                            dragDrop: 'Сүйрөп келиңиз же жүктөө үчүн басыңыз',
                            formats: 'PNG, JPG, GIF 10МБ чейин',
                            upload: 'Сүрөт жүктөө'
                        }
                    }
                },
                navigation: {
                    continue: 'Улантуу',
                    back: 'Артка',
                    finish: 'Бүтүрүү',
                    step: '/'
                }
            }
        },
        profile: {
            title: 'Профиль',
            roles: {
                client: 'Кардар',
                master: 'Уста',
                admin: 'Администратор'
            }
        },
        auth: {
            email: 'Email',
            phone: 'Телефон номери',
            enterOtp: 'Текшерүү кодун киргизиңиз',
            resend: 'Кайра жөнөтүү',
            verify: 'Текшерүү',
            signUp: 'Катталуу',
            logIn: 'Кирүү',
            termsText: 'Катталуу менен сиз төмөнкүлөрдү кабыл аласыз',
            termsLink: 'Колдонуу шарттары',
            privacyLink: 'Купуялуулук саясаты',
            and: 'жана',
            haveAccount: 'Аккаунтуңуз барбы?',
            noAccount: 'Аккаунтуңуз жокпу?',
            continueWith: 'же улантыңыз'
        }
    }
};