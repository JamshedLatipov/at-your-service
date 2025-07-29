import { Translations } from '../translation.types';

export const en: Translations = {
    navigation: {
        home: 'Home',
        requests: 'Requests',
        search: 'Search',
        profile: 'Profile',
        settings: 'Settings'
    },
    common: {
        loading: 'Loading...',
        error: 'Error',
        search: 'Search',
        submit: 'Submit',
        cancel: 'Cancel',
        actions: {
            back: 'Back'
        }
    },
    pages: {
        home: {
            title: 'Home',
            hero: {
                title1: 'Find the right',
                pro: 'pro',
                title2: 'for any job',
                subtitle: 'Get quotes, read reviews, and hire trusted professionals'
            },
            search: {
                servicePrompt: 'What service do you need?'
            },
            services: {
                plumbing: 'Plumbing',
                electrical: 'Electrical',
                cleaning: 'Cleaning',
                handyman: 'Handyman',
                painting: 'Painting',
                landscaping: 'Landscaping'
            },
            popularServices: {
                title: 'Popular Services',
                subtitle: 'Discover our most requested home services',
                viewMore: 'Find more professionals'
            },
            experts: {
                title: 'Expert Professionals',
                subtitle: 'Our top-rated service providers'
            },
            reviews: {
                title: 'What Our Customers Say',
                subtitle: 'Read testimonials from satisfied clients'
            },
            cta: {
                title: 'Ready to get started?',
                subtitle: 'Find the perfect professional for your project today'
            }
        },
        requests: {
            title: 'Requests',
            new: {
                title: 'New Request',
                steps: {
                    service: {
                        title: 'What service do you need?',
                        typeLabel: 'Select category',
                        timeframeTitle: 'When do you need it?',
                        activityTitle: 'Latest masters activity',
                        preferenceTitle: 'Master Preference',
                        minRating: 'Minimum Rating',
                        starsUp: 'stars & up',
                        services: {
                            plumbing: 'Plumbing',
                            electrical: 'Electrical',
                            cleaning: 'Cleaning',
                            handyman: 'Handyman'
                        },
                        times: {
                            asap: 'As soon as possible',
                            week: 'Within a week',
                            date: 'Pick a date'
                        },
                        activity: {
                            any: 'Any',
                            today: 'Active today',
                            threeDays: 'Active in the last 3 days'
                        }
                    },
                    description: {
                        title: 'What do you need help with?',
                        subtitle: 'Provide a detailed description so professionals can give you an accurate quote.',
                        placeholder: 'e.g., I need a plumber to fix a leaking toilet. It\'s constantly running and the handle is loose. I\'d like this fixed as soon as possible.',
                        tip: 'Tip: Mention details like the size of the area, specific parts that need attention, and any materials you might have.'
                    },
                    details: {
                        title: 'Additional Details',
                        subtitle: 'Provide any extra details or specific instructions.',
                        placeholder: 'For example: \'The leaky faucet is in the upstairs bathroom. The house was built in 1985 and has copper pipes.\'',
                        photos: {
                            title: 'Photos',
                            subtitle: 'Add photos to help the professional understand the task better.',
                            dragDrop: 'Drag & drop or click to upload',
                            formats: 'PNG, JPG, GIF up to 10MB',
                            upload: 'Upload photos'
                        }
                    }
                },
                navigation: {
                    continue: 'Continue',
                    back: 'Back',
                    finish: 'Finish',
                    step: 'of'
                }
            },
            available: {
                title: 'Available Requests',
                filters: {
                    title: 'Filters',
                    reset: 'Reset',
                    types: {
                        all: 'All Types',
                        plumbing: 'Plumbing',
                        electrical: 'Electrical',
                        hvac: 'HVAC'
                    },
                    locations: {
                        all: 'All Locations',
                        near: 'Near Me',
                        far: 'Far Away'
                    }
                },
                actions: {
                    pickup: 'Pick Up Request'
                }
            }
        },
        profile: {
            title: 'Profile',
            roles: {
                client: 'Client',
                master: 'Master',
                admin: 'Administrator'
            }
        }
    }
};