import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface RequestStep {
    title: string;
    completed: boolean;
    current: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class StepperService {
    private currentStepSubject = new BehaviorSubject<number>(0);
    currentStep$ = this.currentStepSubject.asObservable();

    steps: RequestStep[] = [
        { title: 'Service Details', completed: false, current: true },
        { title: 'Location & Schedule', completed: false, current: false },
        { title: 'Additional Details', completed: false, current: false }
    ];

    get currentStep() {
        return this.currentStepSubject.value;
    }

    nextStep() {
        if (this.currentStep < this.steps.length - 1) {
            this.steps[this.currentStep].completed = true;
            this.steps[this.currentStep].current = false;
            this.steps[this.currentStep + 1].current = true;
            this.currentStepSubject.next(this.currentStep + 1);
        }
    }

    previousStep() {
        if (this.currentStep > 0) {
            this.steps[this.currentStep].current = false;
            this.steps[this.currentStep - 1].current = true;
            this.currentStepSubject.next(this.currentStep - 1);
        }
    }

    resetSteps() {
        this.steps.forEach(step => {
            step.completed = false;
            step.current = false;
        });
        this.steps[0].current = true;
        this.currentStepSubject.next(0);
    }
}