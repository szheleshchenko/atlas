import type { Routes } from '@angular/router';
import { SeriesBooksPage } from './books';

export const routes: Routes = [
  {
    path: '',
    component: SeriesBooksPage,
  },
  {
    path: ':book_slug',
    loadChildren: () => import('./book/book.routes').then((m) => m.routes),
  },
];
