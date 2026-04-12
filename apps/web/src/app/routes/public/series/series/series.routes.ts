import type { Routes } from '@angular/router';
import { SeriesSeriesPage } from './series';

export const routes: Routes = [
  {
    path: '',
    component: SeriesSeriesPage,
  },
  {
    path: 'characters',
    loadChildren: () => import('./characters/characters.routes').then((m) => m.routes),
  },
  {
    path: 'graph',
    loadChildren: () => import('./graph/graph.routes').then((m) => m.routes),
  },
  {
    path: 'families',
    loadChildren: () => import('./families/families.routes').then((m) => m.routes),
  },
  {
    path: 'books',
    loadChildren: () => import('./books/books.routes').then((m) => m.routes),
  },
];
