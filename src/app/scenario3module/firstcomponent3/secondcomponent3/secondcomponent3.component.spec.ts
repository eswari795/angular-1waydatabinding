import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Secondcomponent3Component } from './secondcomponent3.component';

describe('Secondcomponent3Component', () => {
  let component: Secondcomponent3Component;
  let fixture: ComponentFixture<Secondcomponent3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Secondcomponent3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Secondcomponent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
