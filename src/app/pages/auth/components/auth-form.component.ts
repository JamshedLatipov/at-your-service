import { Component, EventEmitter, Input, Output, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';

@Component({
    selector: 'app-auth-form',
    standalone: true,
    imports: [CommonModule, FormsModule, TranslatePipe],
    templateUrl: './auth-form.component.html',
    styles: [`
        :host {
            display: block;
        }
    `]
})
export class AuthFormComponent implements OnDestroy {
    @Input() submitText: string | null = 'Submit';
    @Output() onSubmit = new EventEmitter<{ method: 'Email' | 'Phone', value: string, otp?: string }>();
    @Output() methodChange = new EventEmitter<'Email' | 'Phone'>();

    authMethod: 'Email' | 'Phone' = 'Phone';
    authValue: string = '';
    otpValue: string = '';
    showOtp: boolean = false;
    timer: number = 0;
    isValidPhone: boolean = true;
    isValidEmail: boolean = true;
    private timerInterval: any;

    readonly authMethods = [
        { label: 'pages.auth.email', value: 'Email' },
        { label: 'pages.auth.phone', value: 'Phone' }
    ];

    get placeholder(): string {
        return this.authMethod === 'Email' ? 'pages.auth.email' : 'pages.auth.phone';
    }

    get inputType(): string {
        return this.authMethod === 'Email' ? 'email' : 'tel';
    }

    get inputLabel(): string {
        return this.authMethod === 'Email' ? 'pages.auth.email' : 'pages.auth.phone';
    }

    get submitButtonText(): string {
        return this.showOtp ? 'pages.auth.verify' : (this.submitText || 'Submit');
    }

    get inputId(): string {
        return this.authMethod.toLowerCase();
    }

    get isCurrentMethodInvalid(): boolean {
        return (this.authMethod === 'Phone' && !this.isValidPhone) ||
            (this.authMethod === 'Email' && !this.isValidEmail);
    }

    get validationMessage(): string {
        return this.authMethod === 'Phone' ?
            'Phone number must be 10-15 digits' :
            'Please enter a valid email address';
    }

    get showValidationError(): boolean {
        return Boolean(this.authValue) && this.isCurrentMethodInvalid;
    }

    get otpPlaceholder(): string {
        return 'pages.auth.enterOtp';
    }

    get showResendButton(): boolean {
        return !this.timer;
    }

    ngOnDestroy() {
        this.stopTimer();
    }

    onAuthMethodChange() {
        this.methodChange.emit(this.authMethod);
        this.showOtp = false;
        this.stopTimer();
    }

    private startTimer() {
        this.timer = 30;
        this.timerInterval = setInterval(() => {
            if (this.timer > 0) {
                this.timer--;
            } else {
                this.stopTimer();
            }
        }, 1000);
    }

    private stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
        this.timer = 0;
    }

    resendOtp() {
        this.startTimer();
        // TODO: Implement actual OTP resend logic
    }

    private validatePhone(phone: string): boolean {
        if (!phone) return false;
        // Remove any non-digit characters
        const cleanPhone = phone.replace(/\D/g, '');
        // Check if the cleaned phone number has 10-15 digits
        return cleanPhone.length >= 10 && cleanPhone.length <= 15;
    }

    private validateEmail(email: string): boolean {
        if (!email) return false;
        return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) !== null;
    }

    onAuthValueChange() {
        if (this.authMethod === 'Phone') {
            this.isValidPhone = this.validatePhone(this.authValue);
        } else if (this.authMethod === 'Email') {
            this.isValidEmail = this.validateEmail(this.authValue);
        }
    }

    handleSubmit() {
        if (this.authMethod === 'Phone' && !this.validatePhone(this.authValue)) {
            return;
        }

        if (!this.showOtp) {
            this.showOtp = true;
            this.otpValue = '';
            this.startTimer();
            return;
        }
        this.onSubmit.emit({
            method: this.authMethod,
            value: this.authValue,
            otp: this.otpValue
        });
    }
}