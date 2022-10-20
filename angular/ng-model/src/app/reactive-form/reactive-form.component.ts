import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  template: `
    <p>Reactive Form</p>
    <form>
      <input type="text" [formControl]="testFormControl">
      <input type="button" (click)="onCLick()" value="test">
    </form>
  `,
  styles: [
  ]
})
export class ReactiveFormComponent implements OnInit {
  counter = 0;
  testFormControl = new FormControl('test');

  constructor() { }

  ngOnInit(): void {
    this.testFormControl
      .valueChanges
      .subscribe((value) => console.log(value));
  }

  onCLick(): void {
    this.testFormControl.setValue('updated value');
  }
}
