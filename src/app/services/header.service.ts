import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Location } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class HeaderService {
    private titleSubject = new BehaviorSubject<string>('Handy');
    private showBackButtonSubject = new BehaviorSubject<boolean>(false);

    title$ = this.titleSubject.asObservable();
    showBackButton$ = this.showBackButtonSubject.asObservable();

    constructor(private location: Location) { }

    setTitle(title: string) {
        this.titleSubject.next(title);
    }

    setShowBackButton(show: boolean) {
        this.showBackButtonSubject.next(show);
    }

    goBack() {
        this.location.back();
    }
}