import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnChanges,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div app-spy-directive>
      {{getValue()}}
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, DoCheck, OnChanges {
  value = 0;

  ngOnInit(): void {
    setInterval(
      () => ++this.value,
      1000
    );
  }

  ngDoCheck() {
    console.log('AppComponent ngDoCheck');
  }

  ngOnChanges() {
    console.log('AppComponent OnChanges');
  }

  getValue() {
    return this.value;
  }
}
