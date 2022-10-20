import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h3>Multi Slot content projection</h3>

    Default:
    <ng-content>
    </ng-content>

    Question:
    <ng-content select="[question]">
    </ng-content>
  `,
  styles: [
  ]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
