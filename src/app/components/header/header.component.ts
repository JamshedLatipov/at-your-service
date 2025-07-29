import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderService } from '../../services/header.service';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, LanguageSelectorComponent],
  template: `
    <div>
      <header class="sticky top-0 z-10 bg-white/80 backdrop-blur-sm shadow-sm">
        <div class="flex items-center px-4 py-3">
          <ng-container *ngIf="headerService.showBackButton$ | async; else menuButton">
            <button class="text-[var(--foreground-primary)] hover:text-[var(--foreground-secondary)]" 
                    (click)="headerService.goBack()">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"/>
              </svg>
            </button>
          </ng-container>
          <ng-template #menuButton>
            <button class="flex size-10 items-center justify-center rounded-full text-[var(--foreground-primary)]"
                    (click)="toggleMenu()">
              <svg fill="currentColor" height="24" width="24" viewBox="0 0 256 256">
                <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
              </svg>
            </button>
          </ng-template>
          <h1 class="flex-1 text-center text-lg font-bold text-[var(--foreground-primary)]">{{ headerService.title$ | async }}</h1>
          <app-language-selector></app-language-selector>
        </div>
      </header>

      <!-- Sidebar Menu -->
      <div *ngIf="showMenu" 
           class="fixed inset-0 z-50 bg-black/50"
           (click)="toggleMenu()">
        <div class="absolute bottom-0 left-0 right-0 top-0 w-64 bg-white p-6"
             (click)="$event.stopPropagation()">
          <div class="mb-8 flex items-center gap-4">
            <img alt="User avatar" class="h-12 w-12 rounded-full object-cover" 
                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5ny4MYAvOgsTU6Fnzw2ZUJTmmY9Ikf19jQuGWK9KnNJKBGf33KM62y3KmtGaANXbvpqa1nrgZm4N34Z2n1opjk7GF96tZNag5LnSpTN3GKfEA2j9cafUWiBjpUW76-pXDBzubQOL4QXuFVbHrQOurCv-isOJOhNSmdhp1Rb_ZxiY8kM2n-g8nuVQ-sic4o7ozgCfswnUPh7hqwZFP-8c3iArojyGtAqPoI6FvWy4SASqEQact_MAt56jDXGFYc6jFXXXI6XRTNQ"/>
            <div>
              <h3 class="font-bold text-[var(--foreground-primary)]">John Doe</h3>
              <p class="text-sm text-[var(--foreground-secondary)]">Client</p>
            </div>
          </div>
          <nav class="space-y-1">
            <a routerLink="/home" class="flex items-center gap-3 rounded-lg px-4 py-2.5 text-[var(--foreground-primary)] hover:bg-[var(--brand-secondary)]">
              <svg fill="currentColor" height="20" width="20" viewBox="0 0 256 256">
                <path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"/>
              </svg>
              Home
            </a>
            <a routerLink="/requests" class="flex items-center gap-3 rounded-lg px-4 py-2.5 text-[var(--foreground-primary)] hover:bg-[var(--brand-secondary)]">
              <svg fill="currentColor" height="20" width="20" viewBox="0 0 256 256">
                <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"/>
              </svg>
              Requests
            </a>
            <a routerLink="/messages" class="flex items-center gap-3 rounded-lg px-4 py-2.5 text-[var(--foreground-primary)] hover:bg-[var(--brand-secondary)]">
              <svg fill="currentColor" height="20" width="20" viewBox="0 0 256 256">
                <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z"/>
              </svg>
              Messages
            </a>
            <a routerLink="/profile" class="flex items-center gap-3 rounded-lg px-4 py-2.5 text-[var(--foreground-primary)] hover:bg-[var(--brand-secondary)]">
              <svg fill="currentColor" height="20" width="20" viewBox="0 0 256 256">
                <path d="M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z"/>
              </svg>
              Profile
            </a>
          </nav>
        </div>
      </div>
    </div>
  `
})
export class HeaderComponent {
  constructor(public headerService: HeaderService) { }

  showMenu = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
