import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-series',
  template: `<h1>Series</h1>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeriesPage {}
