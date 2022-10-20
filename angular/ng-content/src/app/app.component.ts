import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-test>
      <p question>
        Question content
      </p>
      <button (click)="onClick()">
        Test
      </button>
    </app-test>
  `,
  styles: []
})
export class AppComponent {
  title = 'ng-content';

  onClick() {
    console.log('click');
  }
}
