import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterModule, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HeaderService } from './core/services/header.service';

interface RouteConfig {
  title: string;
  hasBack: boolean;
}

const ROUTE_CONFIGS: Record<string, RouteConfig> = {
  '/': { title: 'Home', hasBack: false },
  '/find-master': { title: 'Find master', hasBack: true },
  '/requests/new': { title: 'New Request', hasBack: true },
  '/profile/customer': { title: 'Customer Profile', hasBack: true },
  '/profile/provider': { title: 'Provider Profile', hasBack: true },
  '/profile/admin': { title: 'Admin Profile', hasBack: true },
  '/settings': { title: 'Settings', hasBack: true },
};

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  standalone: true,
  imports: [RouterOutlet]
})
export class AppComponent implements OnInit {

  constructor(
    private readonly router: Router,
    private readonly headerService: HeaderService
  ) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe(this.handleNavigation);
  }

  private handleNavigation = (): void => {
    const url = this.router.url;
    const config = this.getRouteConfig(url);

    this.headerService.setTitle(config.title);
    this.headerService.setShowBackButton(config.hasBack);
  }

  private getRouteConfig(url: string): RouteConfig {
    const defaultConfig: RouteConfig = { title: 'Home', hasBack: false };
    const exactMatch = ROUTE_CONFIGS[url];

    if (exactMatch) return exactMatch;

    const partialMatch = Object.entries(ROUTE_CONFIGS)
      .find(([route]) => route !== '/' && url.startsWith(route));

    return partialMatch ? partialMatch[1] : defaultConfig;
  }
}
