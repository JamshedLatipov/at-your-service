import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-auth',
    standalone: true,
    imports: [CommonModule, RouterModule, FormsModule],
    template: `
    <div class="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
        <main class="flex-grow flex flex-col justify-center items-center">
            <div class="w-full max-w-sm">
                <div class="flex items-center p-4 pb-2 justify-center relative">
                    <button class="absolute left-4" routerLink="/">
                        <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18L9 12L15 6" stroke="var(--text-primary)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                        </svg>
                    </button>
                    <h1 class="text-[var(--text-primary)] text-lg font-bold leading-tight tracking-[-0.015em]">{{isSignup ? 'Sign Up' : 'Log In'}}</h1>
                </div>
                <div class="p-4">
                    <div class="flex h-12 flex-1 items-center justify-center rounded-xl bg-[var(--background-color)] p-1 max-w-sm mx-auto">
                        <label class="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-3 py-2 text-sm font-medium leading-normal transition-all duration-300 has-[:checked]:bg-white has-[:checked]:shadow-sm has-[:checked]:text-[var(--text-primary)] text-[var(--text-secondary)]">
                            <span class="truncate">Email</span>
                            <input class="sr-only" name="auth_method" type="radio" value="Email" [(ngModel)]="authMethod" (change)="onAuthMethodChange()" />
                        </label>
                        <label class="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-3 py-2 text-sm font-medium leading-normal transition-all duration-300 has-[:checked]:bg-white has-[:checked]:shadow-sm has-[:checked]:text-[var(--text-primary)] text-[var(--text-secondary)]">
                            <span class="truncate">Phone Number</span>
                            <input class="sr-only" name="auth_method" type="radio" value="Phone" [(ngModel)]="authMethod" (change)="onAuthMethodChange()" />
                        </label>
                    </div>
                </div>
                <form class="px-4 space-y-4 max-w-sm mx-auto w-full" (ngSubmit)="onSubmit()">
                    <div class="relative">
                        <input [type]="authMethod === 'Email' ? 'email' : 'tel'"
                               [id]="authMethod.toLowerCase()"
                               [placeholder]="authMethod === 'Email' ? 'Email' : 'Phone number'"
                               [(ngModel)]="authValue"
                               [name]="authMethod.toLowerCase()"
                               class="form-input peer w-full resize-none rounded-xl border-none bg-[var(--background-color)] h-14 placeholder:text-transparent text-base font-normal leading-normal text-[var(--text-primary)] p-4 focus:ring-2 focus:ring-inset focus:ring-[var(--primary-color)]" />
                        <label [for]="authMethod.toLowerCase()"
                               class="absolute left-4 top-4 text-[var(--text-secondary)] transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-[var(--primary-color)] -top-2.5 text-xs bg-[var(--background-color)] px-1 rounded-sm">
                            {{authMethod === 'Email' ? 'Email' : 'Phone number'}}
                        </label>
                    </div>
                    <button class="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-[var(--primary-color)] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-colors duration-300" type="submit">
                        <span class="truncate">{{isSignup ? 'Sign Up' : 'Log In'}}</span>
                    </button>
                </form>
                <div class="mt-4 px-4 text-center">
                    <p class="text-[var(--text-secondary)] text-xs font-normal leading-normal">
                        By signing up, you agree to our <a class="font-medium text-[var(--text-primary)]" routerLink="/terms">Terms of Service</a> and
                        <a class="font-medium text-[var(--text-primary)]" routerLink="/privacy">Privacy Policy</a>.
                    </p>
                    <p class="text-[var(--text-secondary)] text-sm font-normal leading-normal pt-2">
                        {{ isSignup ? 'Already have an account?' : 'Don\'t have an account?' }} 
                        <a class="font-bold text-[var(--primary-color)]" [routerLink]="isSignup ? '/login' : '/signup'">
                            {{isSignup ? 'Log in' : 'Sign up'}}
                        </a>
                    </p>
                </div>
                <div class="mt-auto pt-6">
                    <div class="flex items-center gap-4 px-4">
                        <div class="h-px flex-1 bg-gray-200"></div>
                        <p class="text-[var(--text-secondary)] text-sm font-normal">or continue with</p>
                        <div class="h-px flex-1 bg-gray-200"></div>
                    </div>
                    <div class="flex justify-center gap-4 p-4">
                        <button type="button" (click)="socialSignIn('google')" class="flex h-14 w-14 items-center justify-center rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
                            <img alt="Google" class="h-6 w-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKNOtq78COKMskEOidtnZdxJsGPJKyJQt3uytuYC8lbyJ_4YTaPAdAuQRmtT73kKdlDmdfwrEunFZ3NQD2MAxO1k4CezAzFpl_blBR6Mhd4JpjZHDAz-fRbwkWCFdm0WXL9v-j4SXsdapKK42Q-2Go2TPXwcXCK23fYxgiZA9A0-Y-vPi0e1XEM2ZaWD8i0AQp8V6ky4oS5epUGtK1aYLBmIKvjre34x2TAk3Gj7pc7vQj204E1x9BaG5k5MowudKE_atSZ7MRgg"/>
                        </button>
                        <button type="button" (click)="socialSignIn('facebook')" class="flex h-14 w-14 items-center justify-center rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
                            <img alt="Facebook" class="h-6 w-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOHebbyNfttBySBNDgA2aO3YepURkvkbmIbnCC4Y6urVu3tgNNW6EtYmgOBCCXPoMV_Vk2yhnWFzOqmVUDIh23fKRQ6akemA8-009iFdX7rQQxpTv-HY-azVWS65WGfGy6ORAmYghDsGGRGycMVn16rLcEDqVYLN_dUVHPDLtRPJ3ZhdbfWdVSJLvLOLHZ6JM-8tWmVw_5nBKTQD0EZx9kcB1e8mC1X54ShH8V2RK04681CA0Um7d2ovi7D31PC8yQtRtlExvjOg"/>
                        </button>
                        <button type="button" (click)="socialSignIn('youtube')" class="flex h-14 w-14 items-center justify-center rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
                            <svg class="h-6 w-6" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M128 0C57.31 0 0 57.31 0 128s57.31 128 128 128c70.69 0 128-57.31 128-128S198.69 0 128 0zm43.344 192h-31.5L96.5 98.688V192H64V64h31.5l43.344 93.312V64h32.5v128z" fill="#FF0000"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
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
export class AuthComponent {
    authMethod: 'Email' | 'Phone' = 'Phone';
    authValue: string = '';
    isSignup = true;

    constructor(private router: Router) {
        this.isSignup = this.router.url.includes('signup');
        this.authMethod = this.router.url.includes('email') ? 'Email' : 'Phone';
    }

    onAuthMethodChange() {
        const path = this.isSignup ? '/auth/signup' : '/auth/login';
        const query = this.authMethod === 'Email' ? '?method=email' : '';
        this.router.navigateByUrl(path + query);
    }

    onSubmit() {
        console.log('Submit', {
            type: this.isSignup ? 'signup' : 'login',
            method: this.authMethod,
            value: this.authValue
        });
        // TODO: Implement authentication logic
    }

    socialSignIn(provider: 'google' | 'facebook' | 'youtube') {
        console.log('Social sign in with', {
            type: this.isSignup ? 'signup' : 'login',
            provider
        });
        // TODO: Implement social authentication logic
    }
}