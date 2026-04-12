import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-series-character',
  template: `<h1>Character</h1>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeriesCharacterPage {}
