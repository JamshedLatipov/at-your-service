import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { SocialAuthComponent } from './social-auth.component';
import { AuthFormComponent } from './components/auth-form.component';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { LanguageSelectorComponent } from '../../components/language-selector/language-selector.component';

@Component({
    selector: 'app-sign-in',
    standalone: true,
    imports: [CommonModule, RouterModule, AuthFormComponent, SocialAuthComponent, TranslatePipe, LanguageSelectorComponent],
    template: `
    <div class="relative flex min-h-screen flex-col group/design-root">
        <div class="absolute top-4 right-4">
            <app-language-selector></app-language-selector>
        </div>
        <main class="flex-grow flex flex-col justify-center items-center">
            <div class="w-full max-w-sm">
                <app-auth-form 
                    [submitText]="'pages.auth.logIn' | translate | async"
                    (onSubmit)="onSubmit($event)"
                    (methodChange)="onAuthMethodChange($event)"></app-auth-form>
                <div class="mt-4 px-4 text-center">
                    <p class="text-[var(--text-secondary)] text-sm font-normal leading-normal pt-2">
                        {{ 'pages.auth.noAccount' | translate | async }} <a class="font-bold text-[var(--primary-color)]" routerLink="/auth/signup">{{ 'pages.auth.signUp' | translate | async }}</a>
                    </p>
                </div>
            </div>
            <app-social-auth [hidden]="true" (socialSignIn)="socialSignIn($event)"></app-social-auth>
        </main>
    </div>
    `,
    styles: [`
        :host {
            --primary-color: #1978e5;
            --background-color: #f0f2f4;
            --text-primary: #111418;
            --text-secondary: #637488;
        }
    `]
})
export class SignInComponent {
    constructor(private router: Router) { }

    onSubmit(data: { method: 'Email' | 'Phone', value: string }) {
        console.log('Login', data);
        // TODO: Implement login logic
    }

    onAuthMethodChange(method: 'Email' | 'Phone') {
        const query = method === 'Email' ? '?method=email' : '';
        this.router.navigateByUrl('/login' + query);
    }

    socialSignIn(provider: 'google' | 'facebook' | 'youtube') {
        console.log('Social login with', { provider });
        // TODO: Implement social login logic
    }
}