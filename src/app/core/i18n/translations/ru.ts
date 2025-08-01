import { Translations } from '../translation.types';

export const ru: Translations = {
    navigation: {
        home: 'Главная',
        requests: 'Заказы',
        search: 'Поиск',
        profile: 'Профиль',
        settings: 'Настройки'
    },
    common: {
        loading: 'Загрузка...',
        error: 'Ошибка',
        search: 'Поиск',
        submit: 'Отправить',
        cancel: 'Отмена',
        logout: 'Выйти',
        actions: {
            back: 'Назад'
        }
    },
    pages: {
        settings: {
            notificationSettings: 'Настройки уведомлений',
            enableNotifications: {
                title: 'Включить уведомления',
                description: 'Получайте все обновления и оповещения.'
            },
            serviceResponses: {
                title: 'Ответы специалистов',
                description: 'Когда специалист отвечает.'
            },
            appointmentReminders: {
                title: 'Напоминания о встречах',
                description: 'Для предстоящих услуг.'
            },
            promotionalOffers: {
                title: 'Рекламные предложения',
                description: 'Специальные предложения и обновления.'
            },
            language: {
                title: 'Язык',
                selectLanguage: 'Выберите язык',
                description: 'Выберите предпочитаемый язык'
            }
        },
        home: {
            title: 'Главная',
            hero: {
                title1: 'Найдите нужного',
                pro: 'специалиста',
                title2: 'для любой работы',
                subtitle: 'Получите предложения, читайте отзывы и нанимайте проверенных профессионалов'
            },
            search: {
                servicePrompt: 'Какая услуга вам нужна?'
            },
            services: {
                plumbing: 'Сантехника',
                electrical: 'Электрика',
                cleaning: 'Уборка',
                handyman: 'Мастер на час',
                painting: 'Покраска',
                landscaping: 'Ландшафтный дизайн'
            },
            popularServices: {
                title: 'Популярные услуги',
                subtitle: 'Откройте для себя наши самые востребованные услуги',
                viewMore: 'Найти больше специалистов'
            },
            experts: {
                title: 'Профессиональные мастера',
                subtitle: 'Наши специалисты с лучшими рейтингами'
            },
            reviews: {
                title: 'Отзывы наших клиентов',
                subtitle: 'Прочитайте отзывы довольных клиентов'
            },
            cta: {
                title: 'Готовы начать?',
                subtitle: 'Найдите идеального специалиста для вашего проекта сегодня'
            }
        },
        requests: {
            title: 'Заказы',
            available: {
                title: 'Доступные заявки',
                filters: {
                    title: 'Фильтры',
                    reset: 'Сбросить',
                    types: {
                        all: 'Все типы',
                        plumbing: 'Сантехника',
                        electrical: 'Электрика',
                        hvac: 'Отопление и кондиционирование'
                    },
                    locations: {
                        all: 'Все локации',
                        near: 'Рядом со мной',
                        far: 'Далеко'
                    }
                },
                actions: {
                    pickup: 'Взять заявку'
                }
            },
            new: {
                title: 'Новая заявка',
                steps: {
                    service: {
                        title: 'Какая услуга вам нужна?',
                        typeLabel: 'Выберите категорию',
                        timeframeTitle: 'Когда это нужно?',
                        activityTitle: 'Активность мастеров',
                        preferenceTitle: 'Предпочтения по мастеру',
                        minRating: 'Минимальный рейтинг',
                        starsUp: 'звезд и выше',
                        services: {
                            plumbing: 'Сантехника',
                            electrical: 'Электрика',
                            cleaning: 'Уборка',
                            handyman: 'Мастер на час'
                        },
                        times: {
                            asap: 'Как можно скорее',
                            week: 'В течение недели',
                            date: 'Выбрать дату'
                        },
                        activity: {
                            any: 'Любая',
                            today: 'Активны сегодня',
                            threeDays: 'Активны за последние 3 дня'
                        }
                    },
                    description: {
                        title: 'Какая помощь вам нужна?',
                        subtitle: 'Предоставьте подробное описание, чтобы специалисты могли дать вам точную оценку.',
                        placeholder: 'Например, мне нужен сантехник, чтобы починить протекающий унитаз. Он постоянно течет, и ручка расшатана. Я хотел бы починить это как можно скорее.',
                        tip: 'Совет: Укажите такие детали, как размер площади, конкретные части, требующие внимания, и любые материалы, которые у вас есть.'
                    },
                    details: {
                        title: 'Дополнительные детали',
                        subtitle: 'Предоставьте любые дополнительные детали или конкретные инструкции.',
                        placeholder: 'Например: "Протекающий кран находится в ванной комнате на верхнем этаже. Дом построен в 1985 году и имеет медные трубы."',
                        photos: {
                            title: 'Фотографии',
                            subtitle: 'Добавьте фотографии, чтобы помочь специалисту лучше понять задачу.',
                            dragDrop: 'Перетащите или нажмите для загрузки',
                            formats: 'PNG, JPG, GIF до 10МБ',
                            upload: 'Загрузить фото'
                        }
                    }
                },
                navigation: {
                    continue: 'Продолжить',
                    back: 'Назад',
                    finish: 'Завершить',
                    step: 'из'
                }
            }
        },
        profile: {
            title: 'Профиль',
            roles: {
                client: 'Клиент',
                master: 'Мастер',
                admin: 'Администратор'
            }
        },
        auth: {
            email: 'Эл. почта',
            phone: 'Номер телефона',
            enterOtp: 'Введите код подтверждения',
            resend: 'Отправить снова',
            verify: 'Подтвердить',
            signUp: 'Регистрация',
            logIn: 'Войти',
            termsText: 'Регистрируясь, вы соглашаетесь с',
            termsLink: 'Условиями использования',
            privacyLink: 'Политикой конфиденциальности',
            and: 'и',
            haveAccount: 'Уже есть аккаунт?',
            noAccount: 'Нет аккаунта?',
            continueWith: 'или продолжить через'
        }
    }
};