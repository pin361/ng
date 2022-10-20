import { ChangeDetectionStrategy, Component, DoCheck, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-feature>
    </app-feature>
    <br>
    {{title}}
    {{test[0].a}}
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, DoCheck {
  title = 'root component';
  test = [{ a: 123 }];

  constructor(private ref: ChangeDetectorRef){
  }

  ngOnInit() {
    console.log('ngOnInit');
    setTimeout(() => {
      this.test[0].a = 234;
    }, 1000);
  }

  ngDoCheck() {
    console.log('ngDoCheck');
    this.ref.markForCheck();
  }
}
