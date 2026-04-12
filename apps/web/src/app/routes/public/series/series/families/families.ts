import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-series-families',
  template: `<h1>Families</h1>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeriesFamiliesPage {}
