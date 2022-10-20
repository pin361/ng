import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <div>
      parent
      <span>value={{this.value}}</span>
      <input>
      <app-child [value]="value">
      </app-child>
    </div>
  `,
})
export class ParentComponent implements OnInit {
  value = 0;

  ngOnInit(): void {
    this.test();
  }

  test() {
    setInterval(() => {
      this.value++;
    }, 1000);
  }
}
