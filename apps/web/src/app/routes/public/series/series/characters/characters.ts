import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-series-characters',
  template: `<h1>Characters</h1>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeriesCharactersPage {}
