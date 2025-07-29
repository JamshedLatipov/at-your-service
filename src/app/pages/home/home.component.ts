import { Component, OnInit, OnDestroy, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/i18n/translation.service';
import { Subject, takeUntil } from 'rxjs';
import { RouterModule } from '@angular/router';
import { PopularServicesComponent } from './components/popular-services/popular-services.component';
import { TopProfessionalsComponent } from './components/top-professionals/top-professionals.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { CtaButtonComponent } from './components/cta-button/cta-button.component';
import { AsyncTranslatePipe } from '../../core/i18n/async-translate.pipe';

interface HomeTranslations {
  hero: {
    title1: string;
    pro: string;
    title2: string;
    subtitle: string;
  };
  search: { servicePrompt: string };
  services: {
    plumbing: string;
    electrical: string;
    cleaning: string;
    handyman: string;
    painting: string;
    landscaping: string;
  };
  popularServices: {
    title: string;
    subtitle: string;
    viewMore: string;
  };
  experts: {
    title: string;
    subtitle: string;
  };
  reviews: {
    title: string;
    subtitle: string;
  };
  cta: {
    title: string;
    subtitle: string;
  };
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    PopularServicesComponent,
    TopProfessionalsComponent,
    ReviewsComponent,
    CtaButtonComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  translations: HomeTranslations | null = null;
  private destroy$ = new Subject<void>();

  constructor(private translationService: TranslationService) { }

  ngOnInit() {
    this.translationService.getTranslations()
      .pipe(takeUntil(this.destroy$))
      .subscribe(translations => {
        this.translations = translations.pages.home;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}