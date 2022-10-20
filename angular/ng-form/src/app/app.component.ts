import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-dynamic-form>
    </app-dynamic-form>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'ng-form';

  ngOnInit() {
  }
}
