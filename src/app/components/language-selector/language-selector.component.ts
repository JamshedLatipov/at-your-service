import { Component, OnInit, OnDestroy, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
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
      <button (click)="toggleDropdown()" class="flex items-center gap-2 py-1 text-neutral-600">
        <img [src]="currentLanguage()?.flag" alt="flag" class="w-6 h-6 rounded-sm object-cover ring-1 ring-neutral-200">
        <span>{{currentLanguage()?.name}}</span>
      </button>
      <div *ngIf="isOpen" class="absolute right-0 mt-1 w-48 rounded-lg bg-white shadow-sm border border-neutral-200 z-50" (click)="$event.stopPropagation()">
        <div class="p-2">
          <button *ngFor="let lang of languages" 
                  (click)="selectLanguage(lang)"
                  class="flex items-center gap-2 w-full px-3 py-2 text-left text-sm hover:bg-neutral-100 rounded-lg">
            <img [src]="lang.flag" alt="flag" class="w-5 h-5 rounded-sm object-cover">
            <span>{{lang.name}}</span>
          </button>
        </div>
      </div>
    </div>
  `
})
export class LanguageSelectorComponent implements OnInit, OnDestroy {
  isOpen = false;
  currentLanguage = signal<Language | null | undefined>(null);
  languages: Language[] = [
    { code: 'en', name: 'English', flag: 'flags/gb.svg' },
    { code: 'ru', name: 'Русский', flag: 'flags/ru.svg' },
    { code: 'tg', name: 'Тоҷикӣ', flag: 'flags/tj.svg' },
    { code: 'kk', name: 'Қазақша', flag: 'flags/kz.svg' },
    { code: 'ky', name: 'Кыргызча', flag: 'flags/kg.svg' },
    { code: 'uz', name: "O'zbek", flag: 'flags/uz.svg' }
  ];

  constructor(
    private translationService: TranslationService,
  ) { }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!(event.target as HTMLElement).closest('app-language-selector')) {
      this.closeDropdown();
    }
  }

  ngOnInit(): void {
    this.translationService.getCurrentLanguage().subscribe(lang => {
      this.currentLanguage.set(this.languages.find(l => l.code === lang.code) || this.languages[0]);
    });
  }

  ngOnDestroy(): void { }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  closeDropdown() {
    this.isOpen = false;
  }

  selectLanguage(lang: Language): void {
    this.translationService.setLanguage(lang);
    this.closeDropdown();
    this.currentLanguage.set(lang);
  }
}