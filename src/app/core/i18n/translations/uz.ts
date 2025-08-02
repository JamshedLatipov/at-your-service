import { Translations } from '../translation.types';

export const uz: Translations = {
    navigation: {
        home: 'Bosh sahifa',
        requests: 'Xizmatlar',
        search: 'Qidirish',
        profile: 'Profil',
        settings: 'Sozlamalar'
    },
    common: {
        loading: 'Yuklanmoqda...',
        error: 'Xatolik',
        search: 'Qidirish',
        submit: 'Yuborish',
        cancel: 'Bekor qilish',
        logout: 'Chiqish',
        actions: {
            back: 'Orqaga'
        }
    },
    pages: {
        settings: {
            notificationSettings: 'Bildirishnoma sozlamalari',
            enableNotifications: {
                title: 'Bildirishnomalarni yoqish',
                description: 'Barcha yangilanishlar va ogohlantiruvlarni qabul qiling.'
            },
            serviceResponses: {
                title: 'Xizmat javoblari',
                description: 'Mutaxassis javob berganda.'
            },
            appointmentReminders: {
                title: 'Uchrashuv eslatmalari',
                description: 'Kelgusi xizmatlar uchun.'
            },
            promotionalOffers: {
                title: 'Reklama takliflari',
                description: 'Maxsus takliflar va yangilanishlar.'
            },
            language: {
                title: 'Til',
                selectLanguage: 'Tilni tanlang',
                description: 'Afzal ko\'rgan tilingizni tanlang'
            }
        },
        home: {
            title: 'Asosiy',
            hero: {
                title1: 'Har qanday ish uchun',
                pro: 'mutaxassis',
                title2: 'toping',
                subtitle: 'Takliflar oling, sharhlarni o\'qing va ishonchli mutaxassislarni yollang'
            },
            search: {
                servicePrompt: 'Qanday xizmat kerak?'
            },
            services: {
                plumbing: 'Santexnika',
                electrical: 'Elektrik',
                cleaning: 'Tozalash',
                handyman: 'Usta',
                painting: 'Bo\'yash',
                landscaping: 'Landshaft dizayni'
            },
            popularServices: {
                title: 'Mashhur xizmatlar',
                subtitle: 'Eng ko\'p so\'ralgan uy xizmatlarini ko\'ring',
                viewMore: 'Ko\'proq mutaxassislarni topish'
            },
            experts: {
                title: 'Professional mutaxassislar',
                subtitle: 'Eng yuqori reytingli xizmat ko\'rsatuvchilarimiz'
            },
            reviews: {
                title: 'Mijozlarimiz fikri',
                subtitle: 'Mamnun mijozlarning sharhlarini o\'qing'
            },
            cta: {
                title: 'Boshlashga tayyormisiz?',
                subtitle: 'Bugun loyihangiz uchun ideal mutaxassisni toping'
            }
        },
        requests: {
            title: 'Buyurtmalar',
            available: {
                title: 'Mavjud buyurtmalar',
                filters: {
                    title: 'Filtrlar',
                    reset: 'Qayta o\'rnatish',
                    types: {
                        all: 'Barcha turlar',
                        plumbing: 'Santexnika',
                        electrical: 'Elektrik',
                        hvac: 'Isitish va sovutish'
                    },
                    locations: {
                        all: 'Barcha manzillar',
                        near: 'Yaqin atrofda',
                        far: 'Uzoqda'
                    }
                },
                actions: {
                    pickup: 'Buyurtmani olish'
                }
            },
            new: {
                title: 'Yangi so\'rov',
                steps: {
                    service: {
                        title: 'Qanday xizmat kerak?',
                        typeLabel: 'Toifani tanlang',
                        timeframeTitle: 'Bu qachon kerak?',
                        activityTitle: "Ustalarning so'nggi faolligi",
                        preferenceTitle: 'Usta tanlov',
                        minRating: 'Minimal reyting',
                        starsUp: 'yulduz va yuqori',
                        services: {
                            plumbing: 'Santexnika',
                            electrical: 'Elektrik',
                            cleaning: 'Tozalash',
                            handyman: 'Usta'
                        },
                        times: {
                            asap: 'Iloji boricha tezroq',
                            week: 'Bir hafta ichida',
                            date: 'Sana tanlash'
                        },
                        activity: {
                            any: 'Ixtiyoriy',
                            today: 'Bugun faol',
                            threeDays: 'So\'nggi 3 kunda faol'
                        }
                    },
                    description: {
                        title: 'Sizga qanday yordam kerak?',
                        subtitle: 'Mutaxassislar aniq narx taklif qilishi uchun batafsil tavsif bering.',
                        placeholder: "Masalan, menga santexnik oqayotgan hojatxonani ta'mirlash kerak. U doimo oqyapti va dastasi bo'shab qolgan. Men buni iloji boricha tezroq tuzatmoqchiman.",
                        tip: "Maydonning o'lchami, e'tibor qaratish kerak bo'lgan aniq qismlar va sizda mavjud bo'lgan har qanday materiallar kabi tafsilotlarni ko'rsating."
                    },
                    details: {
                        title: "Qo'shimcha ma'lumotlar",
                        subtitle: "Qo'shimcha tafsilotlar yoki aniq ko'rsatmalarni kiriting.",
                        placeholder: "Masalan: 'Oqayotgan jo'mrak yuqori qavatdagi vannaxonada. Uy 1985 yilda qurilgan va mis quvurlarga ega.'",
                        photos: {
                            title: 'Rasmlar',
                            subtitle: 'Mutaxassisga vazifani yaxshiroq tushunishga yordam berish uchun rasm qo\'shing.',
                            dragDrop: 'Sudrab tashlang yoki yuklash uchun bosing',
                            formats: 'PNG, JPG, GIF 10MB gacha',
                            upload: 'Rasm yuklash'
                        }
                    }
                },
                navigation: {
                    continue: 'Davom etish',
                    back: 'Orqaga',
                    finish: 'Tugatish',
                    step: 'dan'
                }
            }
        },
        profile: {
            title: 'Profil',
            roles: {
                client: 'Mijoz',
                master: 'Usta',
                admin: 'Administrator'
            }
        },
        auth: {
            email: 'Email',
            phone: 'Telefon raqami',
            enterOtp: 'Tasdiqlash kodini kiriting',
            resend: 'Qayta yuborish',
            verify: 'Tasdiqlash',
            signUp: "Ro'yxatdan o'tish",
            logIn: 'Kirish',
            termsText: "Ro'yxatdan o'tish orqali siz quyidagilarni qabul qilasiz",
            termsLink: 'Foydalanish shartlari',
            privacyLink: 'Maxfiylik siyosati',
            and: 'va',
            haveAccount: 'Akkountingiz bormi?',
            noAccount: 'Akkountingiz yo\'qmi?',
            continueWith: 'yoki davom eting'
        }
    }
};