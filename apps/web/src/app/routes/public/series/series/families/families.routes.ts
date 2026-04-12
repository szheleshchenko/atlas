import type { Routes } from '@angular/router';
import { SeriesFamiliesPage } from './families';

export const routes: Routes = [
  {
    path: '',
    component: SeriesFamiliesPage,
  },
  {
    path: ':family_slug',
    loadChildren: () => import('./family/family.routes').then((m) => m.routes),
  },
];
