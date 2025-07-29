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
        actions: {
            back: 'Артка'
        }
    },
    pages: {
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
            new: {
                title: 'Жаңы тапшырма',
                steps: {
                    service: {
                        title: 'Сизге кандай кызмат керек?',
                        typeLabel: 'Категорияны тандаңыз',
                        timeframeTitle: 'Бул сизге качан керек?',
                        activityTitle: 'Усталардын акыркы активдүүлүгү',
                        preferenceTitle: 'Уста тандоо',
                        minRating: 'Минималдуу рейтинг',
                        starsUp: 'жылдыз жана жогору'
                    },
                    description: {
                        title: 'Сизге кандай жардам керек?',
                        subtitle: 'Адистер так баа бере алышы үчүн толук сүрөттөмө бериңиз.',
                        placeholder: 'Мисалы, мага сантехник агып жаткан даараткананы оңдош керек. Ал дайыма агып жатат жана туткасы бошоп калган. Муну мүмкүн болушунча тезирээк оңдогум келет.',
                        tip: 'Аянттын өлчөмү, көңүл буруу керек болгон так бөлүктөр жана сизде бар болгон материалдар сыяктуу маалыматтарды көрсөтүңүз.'
                    },
                    details: {
                        title: 'Кошумча маалыматтар'
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
        }
    }
};