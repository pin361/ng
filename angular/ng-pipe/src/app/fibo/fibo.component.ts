import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-fibo',
  template: `
    <div>
      <span>Value={{value}}</span>
    </div>
    <div>
      <span>Fibo={{value | computeFibo}}</span>
    </div>
    <input type="button" (click)="inc()" value="+">
    <input type="button" (click)="dec()" value="-">
  `,
  styles: [
  ]
})
export class FiboComponent implements OnInit, OnChanges {
  @Input() value = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    console.log('FiboComponent DoCheck');
  }

  ngOnChanges(): void {
    console.log('FiboComponent OnChanges');
  }

  inc(): void {
    // this.value = fibonacci(5);
    // if(this.value < 10) {
    //   this.value = 5;
    // }
    ++this.value;
  }

  dec(): void {
    if(this.value > 0) {
      --this.value;
    }
  }
}
