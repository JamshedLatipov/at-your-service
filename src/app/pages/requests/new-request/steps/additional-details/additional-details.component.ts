import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../../../../core/i18n/translation.service';
import { Translations } from '../../../../../core/i18n/translation.types';

@Component({
  selector: 'app-additional-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="mx-auto max-w-md space-y-6">
      <section>
        <h2 class="text-xl font-bold text-[var(--text-primary)]">{{translations?.pages?.requests?.new?.steps?.details?.photos?.title}}</h2>
        <p class="mt-1 text-sm text-[var(--text-secondary)]">{{translations?.pages?.requests?.new?.steps?.details?.photos?.subtitle}}</p>
        <div class="mt-4 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[var(--border-color)] bg-[var(--card-background)] px-6 py-12 text-center">
          <div class="mb-4">
            <svg aria-hidden="true" class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 48 48">
              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" 
                stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
            </svg>
          </div>
          <p class="text-base font-semibold text-[var(--text-primary)]">{{translations?.pages?.requests?.new?.steps?.details?.photos?.dragDrop}}</p>
          <p class="mt-1 text-xs text-[var(--text-secondary)]">{{translations?.pages?.requests?.new?.steps?.details?.photos?.formats}}</p>
          <button class="mt-4 flex items-center justify-center rounded-full bg-[var(--primary-600)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-600)]">
            <span>{{translations?.pages?.requests?.new?.steps?.details?.photos?.upload}}</span>
          </button>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-bold text-[var(--text-primary)]">{{translations?.pages?.requests?.new?.steps?.details?.title}}</h2>
        <p class="mt-1 text-sm text-[var(--text-secondary)]">{{translations?.pages?.requests?.new?.steps?.details?.subtitle}}</p>
        <div class="mt-4">
          <textarea 
            [(ngModel)]="additionalDetails"
            class="form-input resize-none rounded-2xl" 
            [placeholder]="translations?.pages?.requests?.new?.steps?.details?.placeholder" 
            rows="6">
          </textarea>
        </div>
      </section>
    </div>
  `
})
export class AdditionalDetailsComponent {
  additionalDetails = '';
  translations?: Translations;

  constructor(private translationService: TranslationService) {
    this.translationService.getTranslations().subscribe(translations => {
      this.translations = translations;
    });
  }
}