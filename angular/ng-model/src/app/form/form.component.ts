import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  template: `
      <p>Form</p>
      <form #f="ngForm" (ngSubmit)="onSubmit(f)" novalidate>
        <!-- <input name="first" ngModel required #first="ngModel">
        <input name="last" ngModel> -->

        <input
          name="login"
          [(ngModel)]="login"
          placeholder="Login"
          (ngModelChange)="onChangeLogin($event)"
        >

        <input
          type="checkbox"
          ngModel
          [ngModelOptions]="{standalone: true}"
          (change)="onCheck()"
        >
        <button>Submit</button>
      </form>

      <!-- <p>First name value: {{ first.value }}</p>
      <p>First name valid: {{ first.valid }}</p>
      <p>Form value: {{ f.value | json }}</p>
      <p>Form valid: {{ f.valid }}</p> -->
    `,
  styles: []
})
export class FormComponent implements OnInit {
  login = '';

  constructor() { }

  ngOnInit(): void {
  }

  onChangeLogin(value: any) {
    console.log('value', value);
  }

  onCheck() {
    this.login = 'update login';
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
}
