import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StepperService } from '../../../services/stepper.service';
import { ServiceSelectionComponent } from './steps/service-selection/service-selection.component';
import { TaskDescriptionComponent } from './steps/task-description/task-description.component';
import { AdditionalDetailsComponent } from './steps/additional-details/additional-details.component';
import { HeaderService } from '../../../services/header.service';

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

      <footer class="sticky bottom-0 bg-white/80 p-4 shadow-[0_-2px_4px_rgba(0,0,0,0.05)] backdrop-blur-sm">
        <div class="mx-auto max-w-7xl">
          <button 
            (click)="nextStep()"
            class="w-full cursor-pointer rounded-full bg-[var(--primary-600)] py-4 text-center text-base font-bold text-white transition duration-200 hover:bg-[var(--primary-700)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-500)] focus:ring-offset-2">
            <ng-container *ngIf="stepperService.currentStep === 2; else continueBtn">Finish</ng-container>
            <ng-template #continueBtn>Continue ({{stepperService.currentStep + 1}}/3)</ng-template>
          </button>
        </div>
      </footer>
    </div>
  `
})
export class NewRequestComponent implements OnInit {
    constructor(
        public stepperService: StepperService,
        private headerService: HeaderService
    ) { }

    ngOnInit() {
        this.stepperService.resetSteps();
        this.headerService.setTitle('New Request');
        this.headerService.setShowBackButton(true);
    }

    nextStep() {
        this.stepperService.nextStep();
    }
}