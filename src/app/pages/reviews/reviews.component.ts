import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderService } from '../../core/services/header.service';

interface Review {
  id: number;
  author: string;
  avatar: string;
  date: string;
  rating: number;
  content: string;
  likes: number;
  dislikes: number;
}

interface RatingStats {
  average: number;
  total: number;
  distribution: { [key: number]: number };
}

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="relative flex size-full min-h-screen flex-col justify-between overflow-x-hidden">
      <div class="flex flex-col">

        <!-- Rating Summary -->
        <div class="p-4 bg-white">
          <div class="flex flex-wrap items-center gap-x-8 gap-y-4">
            <div class="flex flex-col gap-1 items-center">
              <p class="text-[var(--primary-color)] text-5xl font-extrabold">{{stats.average.toFixed(1)}}</p>
              <div class="flex gap-0.5 text-yellow-400">
                <ng-container *ngFor="let star of [1,2,3,4,5]">
                  <svg *ngIf="star <= stats.average" fill="currentColor" height="18" width="18" viewBox="0 0 256 256">
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                  </svg>
                  <svg *ngIf="star > stats.average" class="text-gray-300" fill="currentColor" height="18" width="18" viewBox="0 0 256 256">
                    <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"></path>
                  </svg>
                </ng-container>
              </div>
              <p class="text-[var(--text-secondary)] text-sm font-medium">Based on {{stats.total}} reviews</p>
            </div>
            <div class="grid min-w-[200px] flex-1 grid-cols-[auto_1fr_auto] items-center gap-x-3 gap-y-2">
              <ng-container *ngFor="let i of [5,4,3,2,1]">
                <p class="text-[var(--text-secondary)] text-sm font-medium">{{i}}</p>
                <div class="flex h-2 flex-1 overflow-hidden rounded-full bg-gray-200">
                  <div class="rounded-full bg-[var(--primary-color)]" [style.width]="(stats.distribution[i] || 0) + '%'"></div>
                </div>
                <p class="text-[var(--text-secondary)] text-sm font-medium text-right">{{stats.distribution[i] || 0}}%</p>
              </ng-container>
            </div>
          </div>
        </div>

        <!-- Filter Buttons -->
        <div class="px-4 pt-4 pb-2">
          <div class="flex gap-3 flex-wrap">
            <button *ngFor="let filter of filters" 
                    (click)="setActiveFilter(filter)"
                    [class]="filter === activeFilter ? activeFilterClass : inactiveFilterClass">
              <p class="text-sm font-semibold">{{filter}}</p>
            </button>
          </div>
        </div>

        <!-- Reviews List -->
        <div class="flex flex-col gap-4 p-4">
          <div *ngFor="let review of reviews" class="flex flex-col gap-3 rounded-xl bg-white p-4 shadow-sm">
            <div class="flex items-center gap-3">
              <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                   [style.backgroundImage]="'url(' + review.avatar + ')'">
              </div>
              <div class="flex-1">
                <p class="text-[var(--text-primary)] text-base font-semibold">{{review.author}}</p>
                <p class="text-[var(--text-secondary)] text-sm">{{review.date}}</p>
              </div>
            </div>
            <div class="flex gap-0.5 text-yellow-400">
              <ng-container *ngFor="let star of [1,2,3,4,5]">
                <svg *ngIf="star <= review.rating" fill="currentColor" height="20" width="20" viewBox="0 0 256 256">
                  <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                </svg>
                <svg *ngIf="star > review.rating" class="text-gray-300" fill="currentColor" height="20" width="20" viewBox="0 0 256 256">
                  <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"></path>
                </svg>
              </ng-container>
            </div>
            <p class="text-[var(--text-secondary)] text-base">{{review.content}}</p>
            <div class="flex gap-4 text-[var(--text-secondary)]">
              <button class="flex items-center gap-2">
                <svg fill="currentColor" height="20" width="20" viewBox="0 0 256 256">
                  <path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"></path>
                </svg>
                <p class="font-medium">{{review.likes}}</p>
              </button>
              <button class="flex items-center gap-2">
                <svg fill="currentColor" height="20" width="20" viewBox="0 0 256 256">
                  <path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z"></path>
                </svg>
                <p class="font-medium">{{review.dislikes}}</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ReviewsComponent implements OnInit {
  activeFilter = 'All Reviews';
  filters = ['All Reviews', 'Recent', 'Highest Rated'];

  activeFilterClass = 'flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[var(--primary-color)] px-4 text-white';
  inactiveFilterClass = 'flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white px-4 text-[var(--text-primary)]';

  stats: RatingStats = {
    average: 4.8,
    total: 124,
    distribution: {
      5: 75,
      4: 15,
      3: 5,
      2: 3,
      1: 2
    }
  };

  reviews: Review[] = [
    {
      id: 1,
      author: 'Sophia Bennett',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBflDi5SBPvzEZ75HqpaUirYPw09b3TomhUgyoqgglhRyy5iyJuHBuzIgdW-LdVddHEFphLCT1m4jHRzjqdB-8dK-kaZNtbZbZeL6QI-XgVThJQcjMkEkdSMiouuXu_5EWBSi6EKmhtni6aOU2jY9XTtemHXX3GtM0PZND92qfi09uFGc-iqsUuwcBBe_4UUcMRG0Zl15h0AJvvoYcDkoaVXe9BHwNSnBXhUzEc8AJa4VO4bHVCcqFK7gShm5mpVQmvMG5o7e8fiw',
      date: '2 months ago',
      rating: 5,
      content: 'Absolutely thrilled with the service! The professional was punctual, efficient, and incredibly skilled. Highly recommend!',
      likes: 12,
      dislikes: 2
    },
    {
      id: 2,
      author: 'Ethan Carter',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA68W2CvUpRnkt9S1b6Wpop4dSt2a_CPUbet_7uBs4Q9RGfyXVlLdLlcSrGz1yywAu-xQfdcBL3qGLQfC5kygvkKydf7GOuTyWW3PowMp-5kLxBSddONi4KSvLOeNDn-ueSlSf4ny_m0NJay3RfTnjbEkX6FFuEUbgc3r3x87p8dgsVwvzD7c68PAFSnd3h68TGa2hqJi4QKybkmEFh0QAhC_GZKbezSjY4KU3YbIBRpwGmQhDndPud8NOXubnpZ0kzVvvQOitaFQ',
      date: '3 months ago',
      rating: 4,
      content: 'Good service overall, but there were a few minor issues that could have been handled better. Still, a positive experience.',
      likes: 8,
      dislikes: 1
    }
  ];

  constructor(public headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.setShowBackButton(true);
    this.headerService.setTitle('Reviews');
  }

  setActiveFilter(filter: string) {
    this.activeFilter = filter;
    // TODO: Implement filter logic
  }
}