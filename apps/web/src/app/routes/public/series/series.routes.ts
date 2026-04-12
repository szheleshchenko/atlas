import type { Routes } from '@angular/router';
import { SeriesPage } from './series';

export const routes: Routes = [
  {
    path: '',
    component: SeriesPage,
  },
  {
    path: ':series_slug',
    loadChildren: () => import('./series/series.routes').then((m) => m.routes),
  },
];
