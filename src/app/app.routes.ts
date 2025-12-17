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
    path: 'prgnoter',
    loadComponent: () =>
      import('./pages/prg-noter/prg-noter').then((m) => m.PrgNoter),
  },
  {
    path: 'edit',
    loadComponent: () =>
      import('./pages/edit/edit.component').then((m) => m.EditComponent),
  },
    {
    path: 'landscape',
    loadComponent: () =>
      import('./pages/landscape-template/landscape').then((m) => m.Landscape),
  },
      {
    path: 'green',
    loadComponent: () =>
      import('./pages/green-template/green').then((m) => m.Green),
  },
        {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact-template/contact').then((m) => m.Contact),
  },
          {
    path: 'tech',
    loadComponent: () =>
      import('./pages/tech/tech').then((m) => m.Tech),
  },
            {
    path: 'paintings',
    loadComponent: () =>
      import('./pages/paintings/paintings').then((m) => m.Paintings),
  },
          {
    path: 'toolbar',
    loadComponent: () =>
      import('./pages/toolbar-template/toolbar').then((m) => m.Toolbar),
  },
  {
    path: 'ghpages',
    loadComponent: () =>
      import('./pages/deploy-ghpages/deploy-ghpages').then(
        (m) => m.DeployGhpages
      ),
  },
];
