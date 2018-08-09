import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponent1 } from './firstcomponent4.component';

describe('FirstcomponentComponent', () => {
  let component: FirstComponent1;
  let fixture: ComponentFixture<FirstComponent1>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstComponent1 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
