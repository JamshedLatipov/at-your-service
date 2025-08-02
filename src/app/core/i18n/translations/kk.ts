import { Translations } from '../translation.types';

export const kk: Translations = {
    navigation: {
        home: 'Басты бет',
        requests: 'Тапсырыстар',
        search: 'Іздеу',
        profile: 'Профиль',
        settings: 'Түзетулер'
    },
    common: {
        loading: 'Жүктелуде...',
        error: 'Қате',
        search: 'Іздеу',
        submit: 'Жіберу',
        cancel: 'Бас тарту',
        logout: 'Шығу',
        actions: {
            back: 'Артқа'
        }
    },
    pages: {
        settings: {
            notificationSettings: 'Хабарландыру параметрлері',
            enableNotifications: {
                title: 'Хабарландыруларды қосу',
                description: 'Барлық жаңартулар мен ескертулерді алыңыз.'
            },
            serviceResponses: {
                title: 'Қызмет жауаптары',
                description: 'Маман жауап бергенде.'
            },
            appointmentReminders: {
                title: 'Кездесу еске салғыштар',
                description: 'Алдағы қызметтер үшін.'
            },
            promotionalOffers: {
                title: 'Жарнамалық ұсыныстар',
                description: 'Арнайы ұсыныстар мен жаңартулар.'
            },
            language: {
                title: 'Тіл',
                selectLanguage: 'Тіл таңдаңыз',
                description: 'Қалаған тіліңізді таңдаңыз'
            }
        },
        home: {
            title: 'Басты бет',
            hero: {
                title1: 'Кез келген жұмыс үшін',
                pro: 'маман',
                title2: 'табыңыз',
                subtitle: 'Ұсыныстар алыңыз, пікірлерді оқыңыз және сенімді мамандарды жалдаңыз'
            },
            search: {
                servicePrompt: 'Қандай қызмет қажет?'
            },
            services: {
                plumbing: 'Сантехника',
                electrical: 'Электрик',
                cleaning: 'Тазалау',
                handyman: 'Шебер',
                painting: 'Сырлау',
                landscaping: 'Ландшафт дизайны'
            },
            popularServices: {
                title: 'Танымал қызметтер',
                subtitle: 'Ең көп сұралатын үй қызметтерін көріңіз',
                viewMore: 'Көбірек мамандарды табу'
            },
            experts: {
                title: 'Кәсіби мамандар',
                subtitle: 'Жоғары бағаланған қызмет көрсетушілеріміз'
            },
            reviews: {
                title: 'Тұтынушылар пікірі',
                subtitle: 'Риза клиенттердің пікірлерін оқыңыз'
            },
            cta: {
                title: 'Бастауға дайынсыз ба?',
                subtitle: 'Жобаңыз үшін тамаша маманды бүгін табыңыз'
            }
        },
        requests: {
            title: 'Тапсырыстар',
            available: {
                title: 'Қолжетімді өтінімдер',
                filters: {
                    title: 'Сүзгілер',
                    reset: 'Қалпына келтіру',
                    types: {
                        all: 'Барлық түрлер',
                        plumbing: 'Сантехника',
                        electrical: 'Электрик',
                        hvac: 'Жылыту және салқындату'
                    },
                    locations: {
                        all: 'Барлық орындар',
                        near: 'Маған жақын',
                        far: 'Алыста'
                    }
                },
                actions: {
                    pickup: 'Өтінімді алу'
                }
            },
            new: {
                title: 'Жаңа өтініш',
                steps: {
                    service: {
                        title: 'Қандай қызмет қажет?',
                        typeLabel: 'Санатты таңдаңыз',
                        timeframeTitle: 'Бұл қашан қажет?',
                        activityTitle: 'Шеберлердің соңғы белсенділігі',
                        preferenceTitle: 'Шебер таңдау',
                        minRating: 'Минималды рейтинг',
                        starsUp: 'жұлдыз және жоғары',
                        services: {
                            plumbing: 'Сантехника',
                            electrical: 'Электрик',
                            cleaning: 'Тазалау',
                            handyman: 'Шебер'
                        },
                        times: {
                            asap: 'Мүмкіндігінше тезірек',
                            week: 'Бір апта ішінде',
                            date: 'Күнді таңдау'
                        },
                        activity: {
                            any: 'Кез келген',
                            today: 'Бүгін белсенді',
                            threeDays: 'Соңғы 3 күнде белсенді'
                        }
                    },
                    description: {
                        title: 'Сізге қандай көмек қажет?',
                        subtitle: 'Мамандар нақты баға ұсыну үшін толық сипаттама беріңіз.',
                        placeholder: 'Мысалы, маған ағып тұрған унитазды жөндеу үшін сантехник қажет. Ол үнемі ағып тұр және тұтқасы босап қалған. Мен мұны мүмкіндігінше тезірек жөндегім келеді.',
                        tip: 'Кеңес: Аумақтың көлемі, назар аудару қажет нақты бөліктер және сізде бар материалдар сияқты мәліметтерді көрсетіңіз.'
                    },
                    details: {
                        title: 'Қосымша мәліметтер',
                        subtitle: 'Қосымша мәліметтер немесе нақты нұсқауларды көрсетіңіз.',
                        placeholder: 'Мысалы: "Ағып тұрған кран жоғарғы қабаттағы жуынатын бөлмеде. Үй 1985 жылы салынған және мыс құбырлары бар."',
                        photos: {
                            title: 'Фотосуреттер',
                            subtitle: 'Маманға тапсырманы жақсырақ түсінуге көмектесу үшін фотосурет қосыңыз.',
                            dragDrop: 'Сүйреп әкеліңіз немесе жүктеу үшін басыңыз',
                            formats: 'PNG, JPG, GIF 10МБ дейін',
                            upload: 'Фото жүктеу'
                        }
                    }
                },
                navigation: {
                    continue: 'Жалғастыру',
                    back: 'Артқа',
                    finish: 'Аяқтау',
                    step: '/'
                }
            }
        },
        profile: {
            title: 'Профиль',
            roles: {
                client: 'Клиент',
                master: 'Шебер',
                admin: 'Әкімші'
            }
        },
        auth: {
            email: 'Email',
            phone: 'Телефон нөмірі',
            enterOtp: 'Растау кодын енгізіңіз',
            resend: 'Қайта жіберу',
            verify: 'Растау',
            signUp: 'Тіркелу',
            logIn: 'Кіру',
            termsText: 'Тіркелу арқылы сіз келесілерді қабылдайсыз',
            termsLink: 'Қолдану шарттары',
            privacyLink: 'Құпиялылық саясаты',
            and: 'және',
            haveAccount: 'Аккаунтыңыз бар ма?',
            noAccount: 'Аккаунтыңыз жоқ па?',
            continueWith: 'немесе жалғастырыңыз'
        }
    }
};