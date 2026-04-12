import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-series-graph',
  template: `<h1>Graph</h1>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeriesGraphPage {}
