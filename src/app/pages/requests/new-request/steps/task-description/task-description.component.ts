import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StepperService } from '../../../../../services/stepper.service';
import { TranslationService } from '../../../../../core/i18n/translation.service';
import { Translations } from '../../../../../core/i18n/translation.types';

@Component({
  selector: 'app-task-description',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-[var(--text-primary)]">{{translations?.pages?.requests?.new?.steps?.description?.title}}</h2>
      <p class="text-base text-[var(--text-secondary)]">{{translations?.pages?.requests?.new?.steps?.description?.subtitle}}</p>
      <div class="relative">
        <textarea 
          [(ngModel)]="description"
          class="form-input min-h-[200px] resize-none pr-10" 
          [placeholder]="translations?.pages?.requests?.new?.steps?.description?.placeholder">
        </textarea>
        <button class="absolute bottom-4 right-4 flex size-8 items-center justify-center rounded-full bg-[var(--primary-50)] text-[var(--primary-600)] hover:bg-[var(--primary-100)]">
          <svg class="lucide lucide-mic" fill="none" height="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="20">
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
            <line x1="12" x2="12" y1="19" y2="22"></line>
          </svg>
        </button>
      </div>
      <div class="flex items-center space-x-3 rounded-lg bg-blue-50 p-3">
        <svg class="lucide lucide-lightbulb h-6 w-6 shrink-0 text-blue-600" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
          <path d="M9 18h6"></path>
          <path d="M10 22h4"></path>
        </svg>
        <p class="text-sm text-blue-800">
          <strong>{{translations?.pages?.requests?.new?.steps?.description?.tip}}</strong>
        </p>
      </div>
    </div>
  `
})
export class TaskDescriptionComponent {
  description = '';
  translations?: Translations;

  constructor(
    private readonly stepperService: StepperService,
    private readonly translationService: TranslationService
  ) {
    this.translationService.getTranslations().subscribe(translations => {
      this.translations = translations;
    });
  }

}