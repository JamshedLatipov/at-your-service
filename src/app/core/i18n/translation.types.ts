export interface Translations {
    navigation: {
        home: string;
        requests: string;
        search: string;
        profile: string;
        settings: string;
    };
    common: {
        loading: string;
        error: string;
        search: string;
        submit: string;
        cancel: string;
        actions: {
            back: string;
        };
    };
    pages: {
        home: {
            title: string;
            hero: {
                title1: string;
                pro: string;
                title2: string;
                subtitle: string;
            };
            search: { servicePrompt: string };
            services: {
                plumbing: string;
                electrical: string;
                cleaning: string;
                handyman: string;
                painting: string;
                landscaping: string;
            };
            popularServices: {
                title: string;
                subtitle: string;
                viewMore: string;
            };
            experts: {
                title: string;
                subtitle: string;
            };
            reviews: {
                title: string;
                subtitle: string;
            };
            cta: {
                title: string;
                subtitle: string;
            };
        };
        requests: {
            title: string;
            new: {
                title: string;
                steps: {
                    service: {
                        title: string;
                        typeLabel: string;
                        timeframeTitle: string;
                        activityTitle: string;
                        preferenceTitle: string;
                        minRating: string;
                        starsUp: string;
                        services: {
                            plumbing: string;
                            electrical: string;
                            cleaning: string;
                            handyman: string;
                        };
                        times: {
                            asap: string;
                            week: string;
                            date: string;
                        };
                        activity: {
                            any: string;
                            today: string;
                            threeDays: string;
                        };
                    };
                    details: {
                        title: string;
                        subtitle: string;
                        placeholder: string;
                        photos: {
                            title: string;
                            subtitle: string;
                            dragDrop: string;
                            formats: string;
                            upload: string;
                        };
                    };
                    description: {
                        title: string;
                        subtitle: string;
                        placeholder: string;
                        tip: string;
                    };
                };
                navigation: {
                    continue: string;
                    back: string;
                    finish: string;
                    step: string;
                };
            };
            available: {
                title: string;
                filters: {
                    title: string;
                    reset: string;
                    types: {
                        all: string;
                        plumbing: string;
                        electrical: string;
                        hvac: string;
                    };
                    locations: {
                        all: string;
                        near: string;
                        far: string;
                    };
                };
                actions: {
                    pickup: string;
                };
            };
        };
        profile: {
            title: string;
            roles: {
                client: string;
                master: string;
                admin: string;
            };
        };
    };
}