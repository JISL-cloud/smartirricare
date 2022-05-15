import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationaleventsComponent } from './operationalevents.component';

describe('OperationaleventsComponent', () => {
  let component: OperationaleventsComponent;
  let fixture: ComponentFixture<OperationaleventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationaleventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationaleventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
