import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../../../../core/i18n/translation.service';
import { Translations } from '../../../../../core/i18n/translation.types';

@Component({
  selector: 'app-service-selection',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrl: './service-selection.component.scss',
  template: `
    <section class="mb-8">
      <h2 class="mb-4 text-xl font-bold text-gray-900">{{translations?.pages?.requests?.new?.steps?.service?.title}}</h2>
      <div class="relative">
        <select [(ngModel)]="selectedService" class="form-select w-full appearance-none rounded-xl border-gray-300 bg-white bg-[image:--select-button-svg] bg-[center_right_1rem] bg-no-repeat py-3.5 pl-4 pr-10 text-base text-gray-900 shadow-sm transition duration-150 ease-in-out focus:border-[var(--primary-color)] focus:ring focus:ring-[var(--primary-color)] focus:ring-opacity-50">
          <option value="">{{translations?.pages?.requests?.new?.steps?.service?.typeLabel}}</option>
          <option *ngFor="let service of services" [value]="service">{{service}}</option>
        </select>
      </div>
    </section>

    <section class="mb-8">
      <h2 class="mb-4 text-xl font-bold text-gray-900">{{translations?.pages?.requests?.new?.steps?.service?.timeframeTitle}}</h2>
      <div class="space-y-4">
        <label *ngFor="let option of timeOptions" class="flex cursor-pointer items-center justify-between rounded-xl border border-gray-300 bg-white p-4 shadow-sm has-[:checked]:border-[var(--primary-color)] has-[:checked]:bg-[var(--primary-color)] has-[:checked]:text-white">
          <span class="text-base font-medium">{{option.label}}</span>
          <input 
            [checked]="option.value === selectedTime"
            (change)="selectedTime = option.value"
            class="form-radio h-5 w-5 border-2 border-gray-300 text-transparent checked:border-[var(--primary-color)] checked:bg-[var(--primary-color)] checked:bg-[image:--radio-dot-svg] focus:ring-0 focus:ring-offset-0" 
            name="timeframe" 
            type="radio"
            [value]="option.value"/>
        </label>
      </div>
    </section>

    <section class="mb-8">
      <h2 class="mb-4 text-xl font-bold text-gray-900">{{translations?.pages?.requests?.new?.steps?.service?.activityTitle}}</h2>
      <div>
          <div class="space-y-4">
            <label *ngFor="let activity of activityOptions" class="flex cursor-pointer items-center justify-between rounded-xl border border-gray-300 bg-white p-4 shadow-sm has-[:checked]:border-[var(--primary-color)] has-[:checked]:bg-[var(--primary-color)] has-[:checked]:text-white">
              <span class="text-base font-medium">{{activity.label}}</span>
              <input 
                [checked]="activity.value === selectedActivity"
                (change)="selectedActivity = activity.value"
                class="form-radio h-5 w-5 border-2 border-gray-300 text-transparent checked:border-[var(--primary-color)] checked:bg-[var(--primary-color)] checked:bg-[image:--radio-dot-svg] focus:ring-0 focus:ring-offset-0" 
                name="active-masters" 
                type="radio"
                [value]="activity.value"/>
            </label>
          </div>
        </div>
    </section>

    <section>
      <h2 class="mb-4 text-xl font-bold text-gray-900">{{translations?.pages?.requests?.new?.steps?.service?.preferenceTitle}}</h2>
     
        <div class="rounded-xl border border-gray-300 bg-white p-4 shadow-sm">
          <div class="flex items-center justify-between">
            <p class="text-base font-medium text-gray-900">{{translations?.pages?.requests?.new?.steps?.service?.minRating}}</p>
            <span class="text-sm font-medium text-gray-500">{{selectedRating}} {{translations?.pages?.requests?.new?.steps?.service?.starsUp}}</span>
          </div>
          <div class="mt-2 flex items-center gap-1">
            <label *ngFor="let star of [1,2,3,4,5]" class="cursor-pointer star-label">
              <input 
                class="sr-only" 
                [id]="'rating-' + star"
                name="rating" 
                type="radio"
                [value]="star"
                [checked]="selectedRating === star"
                (change)="selectedRating = star"
                style="outline: none !important;"/>
              <svg class="h-8 w-8 transition-colors" [class.text-yellow-400]="star <= selectedRating" [class.text-gray-300]="star > selectedRating" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"></path>
              </svg>
            </label>
          </div>
        </div>
    </section>
  `
})
export class ServiceSelectionComponent {
  translations?: Translations;
  services: string[] = [];
  selectedService = '';
  timeOptions: { label: string; value: string; }[] = [];
  selectedTime = 'asap';
  selectedRating = 3;
  activityOptions: { label: string; value: string; }[] = [];
  selectedActivity = 'three_days';

  constructor(private translationService: TranslationService) {
    this.translationService.getTranslations().subscribe(translations => {
      this.translations = translations;
      this.updateServices(translations);
      this.updateTimeOptions(translations);
      this.updateActivityOptions(translations);
    });
  }

  private updateServices(translations: Translations) {
    this.services = [
      translations.pages.requests.new.steps.service.services.plumbing,
      translations.pages.requests.new.steps.service.services.electrical,
      translations.pages.requests.new.steps.service.services.cleaning,
      translations.pages.requests.new.steps.service.services.handyman
    ];
  }

  private updateTimeOptions(translations: Translations) {
    this.timeOptions = [
      { label: translations.pages.requests.new.steps.service.times.asap, value: 'asap' },
      { label: translations.pages.requests.new.steps.service.times.week, value: 'week' },
      { label: translations.pages.requests.new.steps.service.times.date, value: 'date' }
    ];
  }

  private updateActivityOptions(translations: Translations) {
    this.activityOptions = [
      { label: translations.pages.requests.new.steps.service.activity.any, value: 'any' },
      { label: translations.pages.requests.new.steps.service.activity.today, value: 'today' },
      { label: translations.pages.requests.new.steps.service.activity.threeDays, value: 'three_days' }
    ];
  }
}