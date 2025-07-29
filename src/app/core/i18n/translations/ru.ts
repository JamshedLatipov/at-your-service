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
        actions: {
            back: 'Назад'
        }
    },
    pages: {
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
            new: {
                title: 'Новая заявка',
                steps: {
                    service: {
                        title: 'Какой вид услуги вам нужен?',
                        typeLabel: 'Выберите категорию',
                        timeframeTitle: 'Когда вам это нужно?',
                        activityTitle: 'Последняя активность мастеров',
                        preferenceTitle: 'Предпочтения по мастеру',
                        minRating: 'Минимальный рейтинг',
                        starsUp: 'звезд и выше'
                    },
                    description: {
                        title: 'С чем вам нужна помощь?',
                        subtitle: 'Предоставьте подробное описание, чтобы специалисты могли дать точную оценку.',
                        placeholder: 'Например, мне нужен сантехник, чтобы починить протекающий унитаз. Он постоянно течет, и ручка болтается. Я хотел бы исправить это как можно скорее.',
                        tip: 'Укажите такие детали, как размер области, конкретные части, требующие внимания, и любые материалы, которые у вас есть.'
                    },
                    details: {
                        title: 'Дополнительные детали'
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
        }
    }
};