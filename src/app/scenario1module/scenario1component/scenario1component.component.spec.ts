import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario1componentComponent } from './scenario1component.component';

describe('Scenario1componentComponent', () => {
  let component: Scenario1componentComponent;
  let fixture: ComponentFixture<Scenario1componentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario1componentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario1componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
