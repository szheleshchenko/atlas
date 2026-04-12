import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-series-book',
  template: `<h1>Book</h1>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeriesBookPage {}
