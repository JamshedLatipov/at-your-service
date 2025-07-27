import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { BottomNavComponent } from '../../components/bottom-nav/bottom-nav.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterModule, HeaderComponent, BottomNavComponent],
  template: `
    <div class="flex min-h-screen flex-col">
      <app-header />
      <main class="flex-1 pb-16">
        <router-outlet />
      </main>
      <app-bottom-nav />
    </div>
  `,
})
export class MainLayoutComponent { }