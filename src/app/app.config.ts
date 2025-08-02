import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AuthModule } from './core/auth/auth.module';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(AuthModule)],
};
