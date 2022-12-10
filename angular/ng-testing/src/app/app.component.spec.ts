import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TestService } from './test.service';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        TestService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    spyOn(component.testObj, 'test').and.callFake(() => {
      console.log('Fake test');
    })

    fixture.detectChanges();
  });

  it('test', () => {
    expect(component)
      .toBeDefined();

    fixture.whenStable();
  });
});
