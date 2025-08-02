import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
    selector: 'app-social-auth',
    standalone: true,
    imports: [CommonModule, TranslatePipe],
    template: `
        <div class="mt-25">
            <div class="flex items-center gap-4 px-4">
                <div class="h-px flex-1 bg-gray-200"></div>
                <p class="text-[var(--text-secondary)] text-sm font-normal">{{ 'pages.auth.continueWith' | translate | async }}</p>
                <div class="h-px flex-1 bg-gray-200"></div>
            </div>
            <div class="flex justify-center gap-4 p-4">
                <button type="button" (click)="onSocialSignIn('google')" class="flex h-14 w-14 items-center justify-center rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
                    <img alt="Google" class="h-6 w-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKNOtq78COKMskEOidtnZdxJsGPJKyJQt3uytuYC8lbyJ_4YTaPAdAuQRmtT73kKdlDmdfwrEunFZ3NQD2MAxO1k4CezAzFpl_blBR6Mhd4JpjZHDAz-fRbwkWCFdm0WXL9v-j4SXsdapKK42Q-2Go2TPXwcXCK23fYxgiZA9A0-Y-vPi0e1XEM2ZaWD8i0AQp8V6ky4oS5epUGtK1aYLBmIKvjre34x2TAk3Gj7pc7vQj204E1x9BaG5k5MowudKE_atSZ7MRgg"/>
                </button>
                <button type="button" (click)="onSocialSignIn('facebook')" class="flex h-14 w-14 items-center justify-center rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
                    <img alt="Facebook" class="h-6 w-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOHebbyNfttBySBNDgA2aO3YepURkvkbmIbnCC4Y6urVu3tgNNW6EtYmgOBCCXPoMV_Vk2yhnWFzOqmVUDIh23fKRQ6akemA8-009iFdX7rQQxpTv-HY-azVWS65WGfGy6ORAmYghDsGGRGycMVn16rLcEDqVYLN_dUVHPDLtRPJ3ZhdbfWdVSJLvLOLHZ6JM-8tWmVw_5nBKTQD0EZx9kcB1e8mC1X54ShH8V2RK04681CA0Um7d2ovi7D31PC8yQtRtlExvjOg"/>
                </button>
                <button type="button" (click)="onSocialSignIn('youtube')" class="flex h-14 w-14 items-center justify-center rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
                    <svg class="h-6 w-6" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M128 0C57.31 0 0 57.31 0 128s57.31 128 128 128c70.69 0 128-57.31 128-128S198.69 0 128 0zm43.344 192h-31.5L96.5 98.688V192H64V64h31.5l43.344 93.312V64h32.5v128z" fill="#FF0000"></path>
                    </svg>
                </button>
            </div>
        </div>
    `
})
export class SocialAuthComponent {
    @Output() socialSignIn = new EventEmitter<'google' | 'facebook' | 'youtube'>();

    onSocialSignIn(provider: 'google' | 'facebook' | 'youtube') {
        this.socialSignIn.emit(provider);
    }
}