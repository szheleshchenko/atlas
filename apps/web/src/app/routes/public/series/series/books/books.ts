import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-series-books',
  template: `<h1>Books</h1>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeriesBooksPage {}
