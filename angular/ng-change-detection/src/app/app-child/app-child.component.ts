import {
  Component,
  DoCheck,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { getDiffMs } from '../../utils/getDiffMs';
import { ParentComponent } from '../app.parent.component';

@Component({
  selector: 'app-child',
  template: `
    <div>
      child
      <span>value={{value}}</span>
    </div>
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements DoCheck, OnChanges {
  @Input() value = 0;
  parent: ParentComponent;

  constructor(parent: ParentComponent) {
    this.parent = parent;
  }

  time = Date.now();

  getValue(): number {
    console.log(`getValue(), ms=${getDiffMs(this.time)}`);
    return this.value;
  }

  ngDoCheck(): void {
    console.log('child doCheck');
    //this.value = this.parent.value.toString();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('child onChanges', changes);
  }
}
