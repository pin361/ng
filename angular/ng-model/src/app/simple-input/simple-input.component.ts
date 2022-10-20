import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-input',
  template: `
    <input [value]="name" [(ngModel)]="name" #ctrl="ngModel" required>

    <p>Value: {{ name }}</p>
    <p>Valid: {{ ctrl.valid }}</p>

    <button (click)="setValue()">Set value</button>
  `,
  styles: [
  ]
})
export class SimpleInputComponent {
  name = 'ng-model';

  setValue() {
    this.name = 'test name';
  }
}
