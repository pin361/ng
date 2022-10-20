import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {
  @Input() testCallback = () => {};

  @Input() confirmText = 'Are you sure?';

  @HostListener('click', ['$event'])
  confirmFirst() {
    window.confirm(this.confirmText)
      ? this.testCallback()
      : null;
  }
}
