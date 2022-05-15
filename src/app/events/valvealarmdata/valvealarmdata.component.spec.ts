import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValvealarmdataComponent } from './valvealarmdata.component';

describe('ValvealarmdataComponent', () => {
  let component: ValvealarmdataComponent;
  let fixture: ComponentFixture<ValvealarmdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValvealarmdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValvealarmdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
