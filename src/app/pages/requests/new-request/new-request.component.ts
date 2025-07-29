import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StepperService } from '../../../services/stepper.service';
import { ServiceSelectionComponent } from './steps/service-selection/service-selection.component';
import { TaskDescriptionComponent } from './steps/task-description/task-description.component';
import { AdditionalDetailsComponent } from './steps/additional-details/additional-details.component';
import { HeaderService } from '../../../services/header.service';
import { Observable } from 'rxjs';
import { TranslationService } from '../../../core/i18n/translation.service';
import { Translations } from '../../../core/i18n/translation.types';

@Component({
  selector: 'app-new-request',
  standalone: true,
  imports: [CommonModule, RouterModule, ServiceSelectionComponent, TaskDescriptionComponent, AdditionalDetailsComponent],
  template: `
    <div class="relative flex size-full min-h-screen flex-col justify-between group/design-root overflow-x-hidden">
      <div class="flex-grow">
        <main class="p-6">
          <ng-container [ngSwitch]="stepperService.currentStep">
            <app-service-selection *ngSwitchCase="0"></app-service-selection>
            <app-task-description *ngSwitchCase="1"></app-task-description>
            <app-additional-details *ngSwitchCase="2"></app-additional-details>
          </ng-container>
        </main>
      </div>

      <footer class=" p-4">
        <div class="mx-auto max-w-7xl">
          <button 
            (click)="nextStep()"
            class="w-full cursor-pointer rounded-full bg-[var(--primary-600)] py-4 text-center text-base font-bold text-white transition duration-200 hover:bg-[var(--primary-700)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-500)] focus:ring-offset-2">
            <ng-container *ngIf="stepperService.currentStep === 2; else continueBtn">
              {{translations?.pages?.requests?.new?.navigation?.finish}}
            </ng-container>
            <ng-template #continueBtn>
              {{translations?.pages?.requests?.new?.navigation?.continue}} ({{stepperService.currentStep + 1}} {{translations?.pages?.requests?.new?.navigation?.step}} 3)
            </ng-template>
          </button>
          <button 
            *ngIf="(currentStep$ | async) || 0 > 1" 
            (click)="goBack()" 
            class="mt-4 w-full flex items-center justify-center py-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
            <svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            {{translations?.common?.actions?.back}}
          </button>
        </div>
      </footer>
    </div>
  `
})
export class NewRequestComponent implements OnInit {
  currentStep$: Observable<number>;
  translations?: Translations;

  constructor(
    public stepperService: StepperService,
    private headerService: HeaderService,
    private translationService: TranslationService
  ) {
    this.currentStep$ = this.stepperService.currentStep$;
    this.translationService.getTranslations().subscribe(translations => {
      this.translations = translations;
      this.headerService.setTitle(translations.pages.requests.new.title || 'New Request');
    });
  }

  ngOnInit() {
    this.stepperService.resetSteps();
    this.headerService.setShowBackButton(true);

  }

  goBack() {
    this.stepperService.previousStep();
  }

  nextStep() {
    this.stepperService.nextStep();
  }
}