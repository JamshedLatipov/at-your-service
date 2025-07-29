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
        actions: {
            back: 'Артқа'
        }
    },
    pages: {
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
            new: {
                title: 'Жаңа өтініш',
                steps: {
                    service: {
                        title: 'Сізге қандай қызмет түрі қажет?',
                        typeLabel: 'Санатты таңдаңыз',
                        timeframeTitle: 'Бұл сізге қашан қажет?',
                        activityTitle: 'Шеберлердің соңғы белсенділігі',
                        preferenceTitle: 'Шебер таңдау',
                        minRating: 'Минималды рейтинг',
                        starsUp: 'жұлдыз және жоғары'
                    },
                    description: {
                        title: 'Сізге қандай көмек қажет?',
                        subtitle: 'Мамандар нақты баға бере алуы үшін толық сипаттама беріңіз.',
                        placeholder: 'Мысалы, маған сантехник ағып тұрған унитазды жөндеу керек. Ол үнемі ағып тұр және тұтқасы босап кетті. Мен мұны мүмкіндігінше тезірек жөндегім келеді.',
                        tip: 'Аумақтың көлемі, назар аударуды қажет ететін нақты бөліктер және сізде бар кез-келген материалдар сияқты мәліметтерді көрсетіңіз.'
                    },
                    details: {
                        title: 'Қосымша мәліметтер'
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
        }
    }
};