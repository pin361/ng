import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input #test123>
    <button
      appTest
      [testCallback]="onClick"
      confirmText="{{test123.value | json}}"
    >
      Test
    </button>
  `,
  styles: []
})
export class AppComponent {
  title = 'ng-directive';

  onClick() {
    console.log('clicked');
  }
}
