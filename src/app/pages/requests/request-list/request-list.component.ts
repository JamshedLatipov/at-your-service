import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderService } from '../../../core/services/header.service';

@Component({
    selector: 'app-request-list',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule],
    templateUrl: './request-list.component.html'
})
export class RequestListComponent implements OnInit {
    constructor(private headerService: HeaderService) { }

    ngOnInit() {
        this.headerService.setTitle('Available Requests');
        this.headerService.setShowBackButton(true);
    }

    serviceTypes = ['Plumbing', 'Electrical', 'Cleaning', 'Handyman', 'Painting', 'Landscaping'];
    locations = [
        { value: 'tashkent', label: 'Tashkent' },
        { value: 'samarkand', label: 'Samarkand' },
        { value: 'bukhara', label: 'Bukhara' },
        { value: 'andijan', label: 'Andijan' }
    ];

    selectedService = '';
    selectedLocation = '';

    requests = [
        {
            title: 'Bathroom Plumbing Issue',
            service: 'Plumbing',
            date: '03/25/2024, 2:00 PM',
            location: 'Tashkent',
            description: 'Bathroom sink is clogged and water drains very slowly. Need urgent help.'
        },
        {
            title: 'House Painting',
            service: 'Painting',
            date: '03/26/2024, 10:00 AM',
            location: 'Samarkand',
            description: 'Need to paint 3 bedrooms and living room. Walls are in good condition.'
        },
        {
            title: 'Weekly House Cleaning',
            service: 'Cleaning',
            date: '03/27/2024, 11:00 AM',
            location: 'Bukhara',
            description: 'Regular house cleaning service needed for a 3-bedroom apartment.'
        },
        {
            title: 'Garden Maintenance',
            service: 'Landscaping',
            date: '03/28/2024, 9:00 AM',
            location: 'Andijan',
            description: 'Need help with lawn mowing, trimming bushes and general garden maintenance.'
        }
    ];

    get filteredRequests() {
        return this.requests.filter(request => {
            const matchesService = !this.selectedService || request.service === this.selectedService;
            const matchesLocation = !this.selectedLocation || request.location.toLowerCase() === this.selectedLocation;
            return matchesService && matchesLocation;
        });
    }

    resetFilters() {
        this.selectedService = '';
        this.selectedLocation = '';
    }
}