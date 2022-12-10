import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      {{title}}
    <div>
  `,
  styles: [],
  providers: [TestService],
})
export class AppComponent implements OnInit {
  title = 'ng-spec';
  testObj = {
    test() {
      console.log('testObj.test');
    }
  };

  constructor(private service: TestService) {
  }

  ngOnInit() {
    this.title = this.service.prepareTitle('title1');

    new Promise((resolve) => {
      setTimeout(() => {
        this.testObj.test();
        resolve(null);
      }, 1000);
    })
  }

  testSpyOn() {
    this.title = this.service.prepareTitle('title2');
  }
}
