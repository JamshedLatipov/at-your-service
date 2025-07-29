import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../../core/i18n/translation.service';
import { Translations } from '../../../core/i18n/translation.types';

@Component({
  selector: 'app-available-requests',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  template: `
    <div class="bg-gray-50 min-h-screen">
      <header class="sticky top-0 z-10 bg-white shadow-sm">
        <div class="flex items-center px-4 py-3">
          <button class="text-gray-700 hover:text-gray-900" routerLink="/requests">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" fill="currentColor">
              <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"/>
            </svg>
          </button>
          <h1 class="flex-1 text-center text-lg font-bold text-gray-900">{{translations?.pages?.requests?.available?.title}}</h1>
          <div class="w-6"></div>
        </div>
      </header>
      
      <main class="p-4 space-y-4">
        <!-- Filters -->
        <div class="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-bold text-gray-900">{{translations?.pages?.requests?.available?.filters?.title}}</h2>
            <button class="text-sm font-semibold text-gray-500" (click)="resetFilters()">{{translations?.pages?.requests?.available?.filters?.reset}}</button>
          </div>
          <div class="flex space-x-3 overflow-x-auto pb-3">
            <div class="relative">
              <select [(ngModel)]="selectedType" class="appearance-none w-full min-w-[120px] rounded-lg border border-gray-300 bg-white py-2.5 pl-4 pr-10 text-gray-900 shadow-sm focus:border-[var(--primary-500)] focus:ring-[var(--primary-500)] sm:text-sm">
                <option value="">{{translations?.pages?.requests?.available?.filters?.types?.all}}</option>
                <option *ngFor="let type of types" [value]="type">{{type}}</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path clip-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z" fill-rule="evenodd"/>
                </svg>
              </div>
            </div>
            <div class="relative">
              <select [(ngModel)]="selectedLocation" class="appearance-none w-full min-w-[120px] rounded-lg border border-gray-300 bg-white py-2.5 pl-4 pr-10 text-gray-900 shadow-sm focus:border-[var(--primary-500)] focus:ring-[var(--primary-500)] sm:text-sm">
                <option *ngFor="let location of locations" [value]="location.value">{{location.label}}</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path clip-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z" fill-rule="evenodd"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Request Cards -->
        <div *ngFor="let request of filteredRequests" class="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div class="p-4">
            <div class="flex items-start justify-between">
              <div>
                <h2 class="text-lg font-bold text-gray-900">{{request.title}}</h2>
                <p class="mt-1 text-sm text-gray-600">{{request.type}}</p>
              </div>
              <div class="flex items-center gap-2 text-sm text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM48,48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48ZM208,208H48V96H208V208Z"/>
                </svg>
                <span>{{request.datetime}}</span>
              </div>
            </div>
            <p class="mt-3 text-sm text-gray-700">{{request.description}}</p>
          </div>
          <div class="border-t border-gray-200 bg-gray-50 px-4 py-3">
            <button (click)="pickupRequest(request.id)" 
                    class="w-full rounded-full bg-[var(--primary-600)] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[var(--primary-700)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-500)] focus:ring-offset-2">
              {{translations?.pages?.requests?.available?.actions?.pickup}}
            </button>
          </div>
        </div>
      </main>
    </div>
  `
})
export class AvailableRequestsComponent {
  translations?: Translations;
  types: string[] = [];
  locations: { value: string; label: string; }[] = [];
  selectedType = '';
  selectedLocation = 'all';
  filteredRequests: any[] = [];

  constructor(private translationService: TranslationService) {
    this.translationService.getTranslations().subscribe(translations => {
      this.translations = translations;
      this.updateFilters(translations);
    });
  }

  private updateFilters(translations: Translations) {
    this.types = [
      translations.pages.requests.available.filters.types.plumbing,
      translations.pages.requests.available.filters.types.electrical,
      translations.pages.requests.available.filters.types.hvac
    ];
    this.locations = [
      { value: 'all', label: translations.pages.requests.available.filters.locations.all },
      { value: 'near', label: translations.pages.requests.available.filters.locations.near },
      { value: 'far', label: translations.pages.requests.available.filters.locations.far }
    ];
  }

  resetFilters() {
    this.selectedType = '';
    this.selectedLocation = 'all';
  }

  pickupRequest(id: string) {
    // Implementation will be added later
  }
}