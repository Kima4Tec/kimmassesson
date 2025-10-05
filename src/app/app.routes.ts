import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./pages/projects/projects').then((m) => m.Projects),
  },
  {
    path: 'programming',
    loadComponent: () =>
      import('./pages/programming/programming').then((m) => m.Programming),
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
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'edit',
    loadComponent: () =>
      import('./pages/edit/edit.component').then((m) => m.EditComponent),
  },
  {
    path: 'ghpages',
    loadComponent: () =>
      import('./pages/deploy-ghpages/deploy-ghpages').then(
        (m) => m.DeployGhpages
      ),
  },
];
