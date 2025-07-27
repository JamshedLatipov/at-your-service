import { Component } from '@angular/core';
import { SearchComponent } from './components/search/search.component';
import { PopularServicesComponent } from './components/popular-services/popular-services.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { TopProfessionalsComponent } from './components/top-professionals/top-professionals.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { CtaButtonComponent } from './components/cta-button/cta-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SearchComponent,
    PopularServicesComponent,
    HeroBannerComponent,
    TopProfessionalsComponent,
    ReviewsComponent,
    CtaButtonComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent { }