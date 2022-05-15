import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValveeventsComponent } from './valveevents.component';

describe('ValveeventsComponent', () => {
  let component: ValveeventsComponent;
  let fixture: ComponentFixture<ValveeventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValveeventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValveeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
