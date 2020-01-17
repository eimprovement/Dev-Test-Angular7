import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertYesNoComponent } from './alert-yes-no.component';

describe('AlertYesNoComponent', () => {
  let component: AlertYesNoComponent;
  let fixture: ComponentFixture<AlertYesNoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlertYesNoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertYesNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
