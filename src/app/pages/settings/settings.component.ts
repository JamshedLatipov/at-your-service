import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { LanguageSelectorComponent } from '../../components/language-selector/language-selector.component';
import { TranslationService } from '../../core/i18n/translation.service';
import { Translations } from '../../core/i18n/translation.types';

@Component({
    selector: 'app-settings',
    standalone: true,
    imports: [CommonModule, LanguageSelectorComponent],
    template: `
    <div class="relative flex size-full min-h-screen flex-col justify-between">
      <div>
        <main class="p-4">
          <section class="space-y-4">
            <h2 class="text-sm font-semibold uppercase text-neutral-600">
              {{translations?.pages?.settings?.notificationSettings || 'Notification Settings'}}
            </h2>
            <div class="divide-y divide-neutral-200 overflow-hidden rounded-xl bg-white shadow-sm">
              <div class="flex items-center justify-between p-4">
                <div class="pr-4">
                  <p class="font-semibold">{{translations?.pages?.settings?.enableNotifications?.title || 'Enable Notifications'}}</p>
                  <p class="text-sm text-neutral-600">
                    {{translations?.pages?.settings?.enableNotifications?.description || 'Receive all updates and alerts.'}}
                  </p>
                </div>
                <label class="relative inline-flex cursor-pointer items-center">
                  <input [checked]="settings.enableNotifications" (change)="toggleSetting('enableNotifications')" class="peer sr-only" type="checkbox"/>
                  <div class="peer h-6 w-11 rounded-full bg-neutral-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-neutral-200 after:bg-white after:transition-all after:content-[''] peer-checked:!bg-[var(--primary-500)] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[var(--primary-200)]"></div>
                </label>
              </div>
              <div class="flex items-center justify-between p-4">
                <div class="pr-4">
                  <p class="font-semibold">{{translations?.pages?.settings?.serviceResponses?.title || 'Service Responses'}}</p>
                  <p class="text-sm text-neutral-600">
                    {{translations?.pages?.settings?.serviceResponses?.description || 'When a professional responds.'}}
                  </p>
                </div>
                <label class="relative inline-flex cursor-pointer items-center">
                  <input [checked]="settings.serviceResponses" (change)="toggleSetting('serviceResponses')" class="peer sr-only" type="checkbox"/>
                  <div class="peer h-6 w-11 rounded-full bg-neutral-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-neutral-200 after:bg-white after:transition-all after:content-[''] peer-checked:!bg-[var(--primary-500)] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[var(--primary-200)]"></div>
                </label>
              </div>
              <div class="flex items-center justify-between p-4">
                <div class="pr-4">
                  <p class="font-semibold">{{translations?.pages?.settings?.appointmentReminders?.title || 'Appointment Reminders'}}</p>
                  <p class="text-sm text-neutral-600">{{translations?.pages?.settings?.appointmentReminders?.description || 'For upcoming services.'}}</p>
                </div>
                <label class="relative inline-flex cursor-pointer items-center">
                  <input [checked]="settings.appointmentReminders" (change)="toggleSetting('appointmentReminders')" class="peer sr-only" type="checkbox"/>
                  <div class="peer h-6 w-11 rounded-full bg-neutral-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-neutral-200 after:bg-white after:transition-all after:content-[''] peer-checked:!bg-[var(--primary-500)] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[var(--primary-200)]"></div>
                </label>
              </div>
              <div class="flex items-center justify-between p-4">
                <div class="pr-4">
                  <p class="font-semibold">{{translations?.pages?.settings?.promotionalOffers?.title || 'Promotional Offers'}}</p>
                  <p class="text-sm text-neutral-600">
                    {{translations?.pages?.settings?.promotionalOffers?.description || 'Special offers and updates.'}}
                  </p>
                </div>
                <label class="relative inline-flex cursor-pointer items-center">
                  <input [checked]="settings.promotionalOffers" (change)="toggleSetting('promotionalOffers')" class="peer sr-only" type="checkbox"/>
                  <div class="peer h-6 w-11 rounded-full bg-neutral-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-neutral-200 after:bg-white after:transition-all after:content-[''] peer-checked:!bg-[var(--primary-500)] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[var(--primary-200)]"></div>
                </label>
              </div>
            </div>
          </section>
          <section class="mt-8">
            <h2 class="text-sm font-semibold uppercase text-neutral-600">
              {{translations?.pages?.settings?.language?.title || 'Language'}}
            </h2>
            <div class="mt-4 rounded-xl bg-white shadow-sm">
              <div class="flex items-center justify-between p-4">
                <div class="pr-4">
                  <p class="font-semibold">{{translations?.pages?.settings?.language?.selectLanguage || 'Select Language'}}</p>
                  <p class="text-sm text-neutral-600">{{translations?.pages?.settings?.language?.description || 'Choose your preferred language'}}</p>
                </div>
                <app-language-selector></app-language-selector>
              </div>
            </div>
          </section>
        </main>
      </div>
      <footer class="p-4 pt-8">
        <button (click)="logout()" class="flex w-full items-center justify-center gap-2 rounded-full bg-neutral-200 py-3 text-base font-bold text-neutral-700 transition-colors hover:bg-neutral-300">
          <svg fill="none" height="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" x2="9" y1="12" y2="12"></line>
          </svg>
          {{translations?.common?.logout || 'Log Out'}}
        </button>
      </footer>
    </div>
  `,
    styles: [`
    :host {
      display: block;
    }
    :root {
      --primary-50: #f0f6ff;
      --primary-100: #e0edff;
      --primary-200: #c2daff;
      --primary-500: #4a8eff;
      --primary-600: #297aff;
      --neutral-50: #f8f9fa;
      --neutral-100: #f1f3f5;
      --neutral-200: #e9ecef;
      --neutral-400: #ced4da;
      --neutral-600: #868e96;
      --neutral-700: #495057;
      --neutral-900: #212529;
    }
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background-color: var(--neutral-50);
      min-height: max(884px, 100dvh);
    }
    .switch-bg:checked {
      background-color: var(--primary-500);
    }
  `]
})
export class SettingsComponent {
    translations?: Translations;
    settings = {
        enableNotifications: true,
        serviceResponses: true,
        appointmentReminders: true,
        promotionalOffers: false
    };

    constructor(
        private authService: AuthService,
        public router: Router,
        private translationService: TranslationService
    ) {
        this.loadSettingsFromLocalStorage();
        this.translationService.getTranslations().subscribe(translations => {
            this.translations = translations;
        });
    }

    toggleSetting(setting: keyof typeof this.settings) {
        this.settings[setting] = !this.settings[setting];
        this.saveSettingsToLocalStorage();
    }

    private saveSettingsToLocalStorage(): void {
        // Check if window exists to avoid SSR issues
        if (typeof window !== 'undefined') {
            localStorage.setItem('userSettings', JSON.stringify(this.settings));
        }
    }

    private loadSettingsFromLocalStorage(): void {
        // Check if window exists to avoid SSR issues
        if (typeof window !== 'undefined') {
            const savedSettings = localStorage.getItem('userSettings');
            if (savedSettings) {
                this.settings = { ...this.settings, ...JSON.parse(savedSettings) };
            }
        }
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/auth/login']);
    }
}