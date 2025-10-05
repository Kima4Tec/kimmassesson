import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideMarkdown } from 'ngx-markdown';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { App } from './app/app';
import { appConfig } from './app/app.config';

// Kombiner alle providers
const mergedProviders = [
  provideHttpClient(),
  importProvidersFrom(FormsModule),
  ...(appConfig.providers ?? []), // eventuelle andre providers
];

const { providers, ...appConfigWithoutProviders } = appConfig;

bootstrapApplication(App, {
  providers: mergedProviders,
  ...appConfigWithoutProviders,
}).catch((err) => console.error(err));
