import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'frontend',
    loadComponent: () =>
      import('./pages/frontend/frontend').then((m) => m.Frontend),
  },
  {
    path: 'backend',
    loadComponent: () =>
      import('./pages/backend/backend').then((m) => m.Backend),
  },
  {
    path: 'hobby',
    loadComponent: () => import('./pages/hobby/hobby').then((m) => m.Hobby),
  },
  {
    path: 'jobs',
    loadComponent: () => import('./pages/jobs/jobs').then((m) => m.Jobs),
  },
  {
    path: 'education',
    loadComponent: () =>
      import('./pages/education/education').then((m) => m.Education),
  },
  {
    path: 'apinoter',
    loadComponent: () =>
      import('./pages/api-noter/api-noter').then((m) => m.ApiNoter),
  },
];
