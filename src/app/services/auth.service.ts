import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private userRole: 'client' | 'master' | null = null;

    constructor() {
        // Simulate fetching user role from a backend or local storage
        this.userRole = this.fetchUserRole();
    }

    getUserRole(): 'client' | 'master' | null {
        return this.userRole;
    }

    private fetchUserRole(): 'client' | 'master' | null {
        // Replace this logic with actual implementation
        // For example, fetch from local storage or an API
        return 'client'; // Default role for demonstration
    }
}