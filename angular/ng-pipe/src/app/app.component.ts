import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  DoCheck,
  OnChanges,
} from '@angular/core';
import { ComputeFiboPipe } from './compute-fibo.pipe';

@Component({
  selector: 'app-root',
  template: `
    <app-fibo></app-fibo>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, DoCheck, OnChanges {
  value = 0;

  constructor(pipe: ComputeFiboPipe) {
  }

  ngOnInit() {
  }

  ngDoCheck(): void {
      console.log('AppComponent DoCheck');
  }

  ngOnChanges(): void {
    console.log('AppComponent OnChanges');
  }
}
