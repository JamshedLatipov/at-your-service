import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { MasterProfileComponent } from './pages/master/master-profile/master-profile.component';
import { ClientProfileComponent } from './pages/client/client-profile/client-profile.component';
import { RequestListComponent } from './pages/requests/request-list/request-list.component';
import { NewRequestComponent } from './pages/requests/new-request/new-request.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { FindMasterComponent } from './pages/master/find-master/find-master.component';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: '', component: HomeComponent },
            {
                path: 'search',
                redirectTo: () => {
                    const authService = inject(AuthService);
                    const router = inject(Router);
                    const userRole = authService.getUserRole();

                    if (userRole === 'client') {
                        return '/find-master';
                    } else if (userRole === 'master') {
                        return '/requests/available';
                    } else {
                        router.navigate(['/']);
                        return '/';
                    }
                },
                pathMatch: 'full',
            },
            { path: 'orders', component: OrdersComponent },
            {
                path: 'profile',
                redirectTo: () => {
                    const authService = inject(AuthService);
                    const userRole = authService.getUserRole();
                    return `/profile/${userRole}`;
                },
                pathMatch: 'full'
            },
            { path: 'reviews', component: ReviewsComponent },
            { path: 'requests/new', component: NewRequestComponent },
            { path: 'requests/available', component: RequestListComponent },
            { path: 'profile/master', component: MasterProfileComponent },
            { path: 'profile/client', component: ClientProfileComponent },
            { path: 'find-master', component: FindMasterComponent },

        ]
    }
];
