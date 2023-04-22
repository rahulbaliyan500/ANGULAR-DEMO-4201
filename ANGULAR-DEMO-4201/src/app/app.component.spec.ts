import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { addition, multiply } from './calculator';

describe('AppComponent', () => {
  let component = new AppComponent();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  xit(`should have as title 'ANGULAR-DEMO-4201'`, () => {

    expect(component.title).toEqual('ANGULAR-DEMO-4201');
  });

  xit('show alert message', () => {
    expect(component.showMessage("Hello")).toEqual('Hello');
    expect(component.showMessage("Hello")).toBe('Hello');
  })

  xit('calculate addition of two number', () => {
    expect(addition(10, 20)).toBe(30);
    expect(multiply(10, 20)).toEqual(200);
  })

  it('calculate multiply of two number', () => {
    expect(multiply(10, 20)).toEqual(200);
  })
});
