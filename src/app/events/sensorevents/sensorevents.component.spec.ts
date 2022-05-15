import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensoreventsComponent } from './sensorevents.component';

describe('SensoreventsComponent', () => {
  let component: SensoreventsComponent;
  let fixture: ComponentFixture<SensoreventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensoreventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensoreventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
