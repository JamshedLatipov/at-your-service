import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isAuthenticated = new BehaviorSubject<boolean>(false);
    private userRole: 'client' | 'master' | null = null;
    isAuthenticated$ = this.isAuthenticated.asObservable();

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        if (isPlatformBrowser(this.platformId)) {
            const token = localStorage.getItem('auth_token');
            this.isAuthenticated.next(!!token);
            this.userRole = this.fetchUserRole();
        }
    }

    login(token: string) {
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('auth_token', token);
        }
        this.isAuthenticated.next(true);
    }

    logout() {
        if (isPlatformBrowser(this.platformId)) {
            localStorage.removeItem('auth_token');
            localStorage.removeItem('userRole');
        }
        this.isAuthenticated.next(false);
        this.userRole = null;
    }

    getUserRole(): 'client' | 'master' | null {
        return this.userRole;
    }

    private fetchUserRole(): 'client' | 'master' | null {
        let role = 'client';
        if (isPlatformBrowser(this.platformId) && localStorage.getItem('userRole')) {
            role = localStorage.getItem('userRole') as 'client' | 'master';
        }

        return role as 'client' | 'master' | null;
    }
}