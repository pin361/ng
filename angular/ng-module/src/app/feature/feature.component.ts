import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  template: `{{title}}`,
  styles: [
  ],
})
export class FeatureComponent implements OnInit {

  title = 'feature component';

  constructor() { }

  ngOnInit(): void {
  }
}
