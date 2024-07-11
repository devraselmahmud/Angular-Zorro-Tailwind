import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {path: 'content', loadChildren: () => import('./content/content.routes').then(m => m.routes)},
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.routes) }
];
