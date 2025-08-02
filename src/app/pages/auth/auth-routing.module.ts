import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in.component';
import { SignUpComponent } from './sign-up.component';

export const AUTH_ROUTES: Routes = [
    {
        path: 'signup',
        component: SignUpComponent,
        title: 'Sign Up'
    },
    {
        path: 'login',
        component: SignInComponent,
        title: 'Log In'
    }
];