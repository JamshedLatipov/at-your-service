import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderService } from '../../../core/services/header.service';

@Component({
    selector: 'app-master-profile',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './master-profile.component.html'
})
export class MasterProfileComponent implements OnInit {
    constructor(private headerService: HeaderService) { }

    ngOnInit() {
        this.headerService.setTitle('Dashboard');
        this.headerService.setShowBackButton(true);
    }

    stats = [
        { value: '4.9', label: 'Rating', icon: 'star' },
        { value: '120', label: 'Reviews' },
        { value: '50', label: 'Bookings' }
    ];

    orderRequests = [
        {
            name: 'Olivia Chen',
            service: 'Deep Tissue Massage',
            date: 'July 25, 2024',
            description: 'I\'m experiencing severe back pain and need a massage to relieve the tension. Preferably in the evening.'
        },
        {
            name: 'Benjamin Lee',
            service: 'Swedish Massage',
            date: 'July 28, 2024',
            description: 'Looking for a relaxing massage to de-stress after a long work week. Flexible with timing.'
        }
    ];

    profileItems = [
        { icon: 'user', label: 'Edit Profile', link: '/profile/edit' },
        { icon: 'list', label: 'Services', link: '/profile/services' },
        { icon: 'calendar', label: 'Availability', link: '/profile/availability' },
        { icon: 'star', label: 'Reviews', link: '/profile/reviews' },
        { icon: 'eye', label: 'Profile Views', link: '/profile/views' }
    ];
}