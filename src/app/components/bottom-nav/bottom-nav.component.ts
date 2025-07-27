import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ROUTES, AppRoutes } from '../../core/constants/routes';

interface NavItem {
  path: string;
  icon: string;
  label: string;
}

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './bottom-nav.component.html',
  styleUrl: './bottom-nav.component.scss'
})
export class BottomNavComponent {
  readonly navItems: NavItem[] = [
    { path: ROUTES.HOME, icon: 'house', label: 'Home' },
    { path: ROUTES.SEARCH, icon: 'magnifying-glass', label: 'Search' },
    { path: ROUTES.ORDERS, icon: 'receipt', label: 'Orders' },
    { path: ROUTES.PROFILE, icon: 'user', label: 'Profile' }
  ];

  private _activeIndex = 0;

  get activeIndex(): number {
    return this._activeIndex;
  }

  constructor(private readonly router: Router) { }

  onNavClick(index: number): void {
    if (index < 0 || index >= this.navItems.length) {
      return;
    }

    this._activeIndex = index;
    const { path } = this.navItems[index];
    this.router.navigate([path]);
  }
}
