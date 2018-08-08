import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario2componentComponent } from './scenario2component.component';

describe('Scenario2componentComponent', () => {
  let component: Scenario2componentComponent;
  let fixture: ComponentFixture<Scenario2componentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario2componentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario2componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
