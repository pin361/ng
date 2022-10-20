import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  template: `
    <h2>Dynamic Form</h2>
    <form
      [formGroup]="testForm"
      (ngSubmit)="onSubmit()">

      <ng-container
        *ngTemplateOutlet="formItem;
        context: {
          name: 'el1',
          caption: 'El1'
        }"
      >
      </ng-container>


      <!-- <app-form-item [formGroup]="getFormGroup(testForm)"
        name="el1"
        caption="El1">
      </app-form-item>

      <app-form-item [formGroup]="testForm"
        name="el2"
        caption="El2">
      </app-form-item> -->

      <div formArrayName="aliases">
        <h3>Aliases</h3>
        <button
          type="button"
          (click)="addAlias()">
          + alias1
        </button>
        <button
          type="button"
          (click)="addAlias()">
          + alias2
        </button>

        <div *ngFor="let alias of aliases.controls; let i=index;">
          <label for="id-{{i}}">
            Alias {{i}}
          </label>
          <input
            type="text"
            id="id-{{i}}"
            formControlName="{{i}}"
          >

          <!-- <ng-container
            *ngTemplateOutlet="aliasFormItem;
            context: {
              name: i,
              caption: 'Alias' + i
            }"
          >
          </ng-container> -->

        </div>
      </div>
      <button type="submit">
        Submit
      </button>
    </form>

    <ng-template #formItem
      [formGroup]="testForm"
      let-name="name"
      let-caption="caption"
    >
      <label for="id-{{name}}">
        {{caption}}
      </label>
      <input
        type="text"
        id="id-{{name}}"
        formControlName="{{name}}"
      >
    </ng-template>
    <ng-template #aliasFormItem
      let-name="name"
      let-caption="caption"
    >
      <ng-container
        [formGroup]="testForm"
        formArrayName="aliases"
        *ngTemplateOutlet="formItem;
        context: {
          name,
          caption
        }"
      >
      </ng-container>
    </ng-template>
  `,
})
export class DynamicFormComponent implements OnInit {
  testForm = this.fb.group({
    el1: ['0-0'],
    el2: ['0-1'],
    aliases: this.fb.array([
      this.fb.control(''),
    ]),
  });

  getFormGroup(item: any): FormGroup {
    debugger;
    return item as FormGroup;
  }

  get aliases(): FormArray {
    return this.testForm.get('aliases') as FormArray;
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    console.warn(this.testForm.value);
  }
}
