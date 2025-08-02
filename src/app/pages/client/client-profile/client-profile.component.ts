import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../../components/header/header.component';
import { HeaderService } from '../../../core/services/header.service';

interface Order {
  date: string;
  service: string;
  provider: string;
  status: string;
  amount: string;
}

interface Activity {
  type: string;
  title: string;
  status: string;
  time: string;
}

@Component({
  selector: 'app-client-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="relative flex size-full min-h-screen flex-col justify-between overflow-x-hidden">
      <div class="flex-1">
        <main class="p-4">
          <!-- Quick Actions -->
          <section class="mb-6">
            <h2 class="text-xl font-bold text-[var(--foreground-primary)]">Quick Actions</h2>
            <div class="mt-3 grid grid-cols-2 gap-4">
              <button routerLink="/requests/new" class="flex h-12 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[var(--brand-primary)] text-sm font-bold text-white">
                <svg fill="currentColor" height="20" width="20" viewBox="0 0 256 256">
                  <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
                </svg>
                <span>New Request</span>
              </button>
              <button routerLink="/search" class="flex h-12 cursor-pointer items-center justify-center gap-2 rounded-xl bg-white text-sm font-bold text-[var(--foreground-primary)] shadow-sm">
                <svg fill="currentColor" height="20" width="20" viewBox="0 0 256 256">
                  <path d="M229.66,218.34,179.52,168.2a95.8,95.8,0,1,0-11.32,11.31L218.34,229.66a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
                <span>Find Pros</span>
              </button>
            </div>
          </section>

          <!-- Upcoming Booking -->
          <section class="mb-6">
            <h2 class="text-xl font-bold text-[var(--foreground-primary)]">Upcoming Booking</h2>
            <div class="mt-3 overflow-hidden rounded-xl bg-white shadow-sm">
              <div class="h-32 w-full bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDzxShCHT5Uq-NIQW7SxGMi3C7hFxzLN22fSyJalroTYE-zpzWXZMArJIHYB5eS9B5dzAZAFkafx1rpdFNBq5pD9EdkmkeUZmzzn60J9l0Xw8hz4ApiuOjwsRYQRT8rtegdbRJKv2yftLyg-ClC43Ahha94Az-jmlH4RH-GjJn_XsCsuH2u2pxVz1BmGZI3uQWf8fw6DpNUAqpaJTprR-XhXoqDqjkf06TNzu-T4MDb8Brz8kNQ4NeKXEgUUz-tW_cCdafWK0g6hg');"></div>
              <div class="p-4">
                <p class="text-sm font-medium text-[var(--brand-primary)]">Tomorrow, 10:00 AM</p>
                <p class="mt-1 text-base font-bold text-[var(--foreground-primary)]">Home Cleaning</p>
                <p class="text-sm text-[var(--foreground-secondary)]">With Sarah Miller</p>
              </div>
            </div>
          </section>

          <!-- Orders -->
          <section class="mb-6">
            <div class="flex items-center justify-between">
              <h2 class="text-xl font-bold text-[var(--foreground-primary)]">Orders</h2>
            </div>
            <div class="mt-3 space-y-3">
              <div *ngFor="let order of orders" class="rounded-xl bg-white p-4 shadow-sm">
                <div class="flex items-start justify-between">
                  <div>
                    <p class="text-sm font-medium text-[var(--foreground-secondary)]">{{order.date}}</p>
                    <p class="mt-1 text-base font-bold text-[var(--foreground-primary)]">{{order.service}}</p>
                    <p class="text-sm text-[var(--foreground-secondary)]">with {{order.provider}}</p>
                  </div>
                  <span [class]="getStatusClass(order.status)">{{order.status}}</span>
                </div>
                <div class="mt-3 border-t border-[var(--border-primary)] pt-3">
                  <div class="flex items-center justify-between">
                    <span class="text-sm font-medium text-[var(--foreground-secondary)]">{{order.status === 'Scheduled' ? 'Total Quote' : 'Total Paid'}}</span>
                    <span class="text-base font-bold text-[var(--foreground-primary)]">{{order.amount}}</span>
                  </div>
                </div>
                <button class="mt-4 w-full rounded-lg bg-[var(--brand-secondary)] py-2.5 text-sm font-bold text-[var(--brand-primary)]">View Details</button>
              </div>
            </div>
          </section>

          <!-- Recent Activity -->
          <section>
            <div class="flex items-center justify-between">
              <h2 class="text-xl font-bold text-[var(--foreground-primary)]">Recent Activity</h2>
              <a class="text-sm font-bold text-[var(--brand-primary)]" href="#">View All</a>
            </div>
            <div class="mt-3 space-y-2">
              <div *ngFor="let activity of activities" class="flex items-center gap-4 rounded-xl bg-white p-3 shadow-sm">
                <div class="flex size-12 shrink-0 items-center justify-center rounded-full bg-[var(--brand-secondary)] text-[var(--brand-primary)]">
                  <svg fill="currentColor" height="24" width="24" viewBox="0 0 256 256">
                    <path [attr.d]="getActivityIcon(activity.type)"></path>
                  </svg>
                </div>
                <div class="flex-1">
                  <p class="font-semibold text-[var(--foreground-primary)]">{{activity.title}}</p>
                  <p class="text-sm text-[var(--foreground-secondary)]">{{activity.status}}</p>
                </div>
                <div class="text-xs text-[var(--foreground-tertiary)]">{{activity.time}}</div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  `
})
export class ClientProfileComponent implements OnInit {
  orders: Order[] = [
    {
      date: 'May 20, 2024',
      service: 'Plumbing Service',
      provider: 'John Smith',
      status: 'Completed',
      amount: '$150.00'
    },
    {
      date: 'June 5, 2024',
      service: 'House Painting',
      provider: 'Emily White',
      status: 'Scheduled',
      amount: '$850.00'
    },
    {
      date: 'April 15, 2024',
      service: 'Gardening',
      provider: 'Michael Brown',
      status: 'Cancelled',
      amount: '$0.00'
    }
  ];

  activities: Activity[] = [
    {
      type: 'completed',
      title: 'Plumbing Service',
      status: 'Completed',
      time: '3d ago'
    },
    {
      type: 'review',
      title: 'Electrical Repair',
      status: 'Reviewed',
      time: '5d ago'
    },
    {
      type: 'inProgress',
      title: 'Landscaping',
      status: 'In Progress',
      time: '1w ago'
    }
  ];

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.setTitle('Dashboard');
    this.headerService.setShowBackButton(false);
  }

  getStatusClass(status: string): string {
    const baseClasses = 'rounded-full px-3 py-1 text-xs font-semibold';
    switch (status) {
      case 'Completed':
        return `${baseClasses} bg-[var(--status-completed-bg)] text-[var(--status-completed)]`;
      case 'Scheduled':
        return `${baseClasses} bg-[var(--status-scheduled-bg)] text-[var(--status-scheduled)]`;
      case 'Cancelled':
        return `${baseClasses} bg-[var(--status-cancelled-bg)] text-[var(--status-cancelled)]`;
      default:
        return baseClasses;
    }
  }

  getActivityIcon(type: string): string {
    switch (type) {
      case 'completed':
        return 'M128,24a104,104,0,1,0,104,104A104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z';
      case 'review':
        return 'M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z';
      case 'inProgress':
        return 'M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z';
      default:
        return '';
    }
  }
}