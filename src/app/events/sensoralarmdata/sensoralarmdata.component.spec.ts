import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensoralarmdataComponent } from './sensoralarmdata.component';

describe('SensoralarmdataComponent', () => {
  let component: SensoralarmdataComponent;
  let fixture: ComponentFixture<SensoralarmdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensoralarmdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensoralarmdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
