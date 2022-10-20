import {
  AfterViewInit,
  Component,
  Input
} from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-item',
  template: `
    <div
      [formGroup]="formGroup"
    >
      <label for="{{id}}">{{caption}}</label>
      <input
        type="text"
        id="{{id}}"
        formControlName={{name}}>
    </div>
  `,
})
export class FormItemComponent implements AfterViewInit {
  @Input() formGroup!: FormGroup;
  @Input() name!: string;
  @Input() caption!: string;

  id = `id-${this.name}`;

  ngAfterViewInit() {
    console.warn('formGroup', this.formGroup);
  }
}
