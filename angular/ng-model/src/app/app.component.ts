import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-simple-input>
    </app-simple-input>
    <br>
    <app-form>
    </app-form>
    <br>
    <app-reactive-form>
    </app-reactive-form>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
}
