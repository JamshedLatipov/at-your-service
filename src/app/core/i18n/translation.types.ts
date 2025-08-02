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
        logout: string;
        actions: {
            back: string;
        };
    };
    pages: {
        settings: {
            notificationSettings: string;
            enableNotifications: {
                title: string;
                description: string;
            };
            serviceResponses: {
                title: string;
                description: string;
            };
            appointmentReminders: {
                title: string;
                description: string;
            };
            promotionalOffers: {
                title: string;
                description: string;
            };
            language: {
                title: string;
                selectLanguage: string;
                description: string;
            };
        };
        home: {
            title: string;
            hero: {
                title1: string;
                pro: string;
                title2: string;
                subtitle: string;
            };
            search: {
                servicePrompt: string;
            };
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
                    description: {
                        title: string;
                        subtitle: string;
                        placeholder: string;
                        tip: string;
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
                };
                navigation: {
                    continue: string;
                    back: string;
                    finish: string;
                    step: string;
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
        auth: {
            email: string;
            phone: string;
            enterOtp: string;
            resend: string;
            verify: string;
            signUp: string;
            logIn: string;
            termsText: string;
            termsLink: string;
            privacyLink: string;
            and: string;
            haveAccount: string;
            noAccount: string;
            continueWith: string;
        };
    };
}