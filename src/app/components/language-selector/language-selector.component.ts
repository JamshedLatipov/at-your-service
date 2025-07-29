import { Component, OnInit, signal, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslationService } from '../../core/i18n/translation.service';

export interface Language {
  code: string;
  name: string;
  flag: string;
}

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative">
      <button (click)="isOpen = !isOpen" class="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-gray-100">
        <span class="text-lg">{{selectedLanguage()?.code}}</span>
        <span class="text-sm text-gray-600">{{selectedLanguage()?.name}}</span>
      </button>
      
      <div *ngIf="isOpen" class="absolute right-0 mt-1 py-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200">
        <button 
          *ngFor="let lang of languages" 
          (click)="selectLanguage(lang)"
          class="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2">
          <span class="text-lg">{{lang.flag}}</span>
          <span class="text-sm">{{lang.name}}</span>
        </button>
      </div>
    </div>
  `
})
export class LanguageSelectorComponent implements OnInit {
  isOpen = false;
  selectedLanguage = signal<Language | null | undefined>(null);
  languages: Language[] = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'tg', name: 'Тоҷикӣ', flag: '🇹🇯' },
    { code: 'kk', name: 'Қазақша', flag: '🇰🇿' },
    { code: 'ky', name: 'Кыргызча', flag: '🇰🇬' },
    { code: 'uz', name: "O'zbek", flag: '🇺🇿' }
  ];

  constructor(
    private translationService: TranslationService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    const defaultLang = { code: 'en', name: 'English', flag: '🇬🇧' };
    let savedLang = defaultLang;

    if (isPlatformBrowser(this.platformId)) {
      const savedLangStr = localStorage.getItem('lang');
      if (savedLangStr) {
        savedLang = JSON.parse(savedLangStr);
      }
    }

    this.selectedLanguage.set(this.languages.find(l => l.code === savedLang.code) || null);
  }

  selectLanguage(lang: Language): void {
    this.translationService.setLanguage(lang);
    this.isOpen = false;
    this.selectedLanguage.set(lang);
  }
}