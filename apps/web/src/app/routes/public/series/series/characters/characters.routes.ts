import type { Routes } from '@angular/router';
import { SeriesCharactersPage } from './characters';

export const routes: Routes = [
  {
    path: '',
    component: SeriesCharactersPage,
  },
  {
    path: ':character_slug',
    loadChildren: () => import('./character/character.routes').then((m) => m.routes),
  },
];
