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

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'search', component: SearchComponent },
            { path: 'orders', component: OrdersComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'client-profile', component: ClientProfileComponent },
            { path: 'reviews', component: ReviewsComponent },
            { path: 'requests/new', component: NewRequestComponent },
            { path: 'requests/available', component: RequestListComponent },
            { path: 'master-profile', component: MasterProfileComponent }
        ]
    }
];
