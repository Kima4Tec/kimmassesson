import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideMarkdown } from 'ngx-markdown';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// kombinér providers
const mergedProviders = [
  ...(appConfig.providers ?? []),
  provideHttpClient(),
  provideMarkdown(),
];

bootstrapApplication(App, {
  ...appConfig,
  providers: mergedProviders,
}).catch((err) => console.error(err));
