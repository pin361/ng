import {
  Directive,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[app-spy-directive]'
})
export class SpyDirective implements OnInit, DoCheck, OnChanges, OnDestroy {
  constructor() { }

  ngDoCheck() {
    console.log('SpyDirective ngDoCheck');
  }

  ngOnChanges() {
    console.log('SpyDirective OnChanges');
  }

  ngOnInit(): void {
    console.log('SpyDirective OnInit');
  }

  ngOnDestroy(): void {
    console.log('SpyDirective OnDestroy');
  }
}
