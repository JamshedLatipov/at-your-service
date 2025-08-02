import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { Translations } from './translation.types';
import { en } from './translations/en';
import { ru } from './translations/ru';
import { tg } from './translations/tg';
import { kk } from './translations/kk';
import { ky } from './translations/ky';
import { uz } from './translations/uz';

export interface Language {
  code: string;
  name: string;
  flag: string;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private readonly languages: Language[] = [
    { code: 'en', name: 'English', flag: 'flags/gb.svg' },
    { code: 'ru', name: 'Русский', flag: 'flags/ru.svg' },
    { code: 'uz', name: 'O\'zbek', flag: 'flags/uz.svg' },
    { code: 'kk', name: 'Қазақша', flag: 'flags/kz.svg' },
    { code: 'ky', name: 'Кыргызча', flag: 'flags/kg.svg' },
    { code: 'tg', name: 'Тоҷикӣ', flag: 'flags/tj.svg' }
  ];
  private readonly defaultLang = this.languages[0];
  private currentLanguage = new BehaviorSubject<Language>(this.defaultLang);
  private translations = new BehaviorSubject<Translations>(en);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    let savedLang = this.defaultLang;

    if (isPlatformBrowser(this.platformId)) {
      const savedLangStr = localStorage.getItem('lang');
      if (savedLangStr) {
        savedLang = JSON.parse(savedLangStr);
      }
    }

    this.setLanguage(savedLang);
  }

  getTranslations() {
    return this.translations.asObservable();
  }

  getCurrentLanguage() {
    return this.currentLanguage.asObservable();
  }

  async setLanguage(lang: Language) {
    const translations = await this.loadTranslations(lang.code);
    this.translations.next(translations);
    this.currentLanguage.next(lang);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', JSON.stringify(lang));
    }
  }

  private async loadTranslations(lang: string): Promise<Translations> {
    switch (lang) {
      case 'ru': return ru;
      case 'tg': return tg;
      case 'kk': return kk;
      case 'ky': return ky;
      case 'uz': return uz;
      default: return en;
    }
  }
}