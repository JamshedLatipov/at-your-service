import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ROUTES } from '../../core/constants/routes';
import { TranslationService } from '../../core/i18n/translation.service';
import { Translations } from '../../core/i18n/translation.types';

interface NavItem {
  path: string;
  icon: string;
  label: 'home' | 'search' | 'requests' | 'profile' | 'settings';
  isAccent?: boolean;
}

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bottom-nav.component.html'
})
export class BottomNavComponent implements OnInit {
  readonly navItems: NavItem[] = [
    { path: ROUTES.HOME, icon: 'house', label: 'home' },
    { path: ROUTES.SEARCH, icon: 'magnifying-glass', label: 'search' },
    { path: ROUTES.REQUEST_NEW, icon: 'plus', label: 'requests', isAccent: true },
    { path: ROUTES.PROFILE, icon: 'user', label: 'profile' },
    { path: ROUTES.SETTINGS, icon: 'gear', label: 'settings' }
  ];

  activeItem: NavItem | null = null;
  translations?: Translations;

  constructor(
    private readonly router: Router,
    private readonly translationService: TranslationService
  ) {
    this.activeItem = this.navItems.find(item => this.router.url.startsWith(item.path)) || this.navItems[0];
  }

  ngOnInit(): void {
    this.translationService.getTranslations().subscribe(translations => {
      this.translations = translations;
    });
  }

  onNavClick(item: NavItem): void {
    this.activeItem = item;
    this.router.navigate([item.path]);
  }

  getTranslation(label: NavItem['label']): string {
    return (this.translations?.navigation as any)[label] || label;
  }
}
