import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Secondcomponent4Component } from './secondcomponent4.component';

describe('Secondcomponent4Component', () => {
  let component: Secondcomponent4Component;
  let fixture: ComponentFixture<Secondcomponent4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Secondcomponent4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Secondcomponent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
