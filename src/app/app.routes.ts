import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {path: 'content', loadChildren: () => import('./content/content.routes').then(m => m.routes)},
  { path: 'home', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.routes) }
];
