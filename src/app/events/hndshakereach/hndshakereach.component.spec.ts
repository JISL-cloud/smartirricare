import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HndshakereachComponent } from './hndshakereach.component';

describe('HndshakereachComponent', () => {
  let component: HndshakereachComponent;
  let fixture: ComponentFixture<HndshakereachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HndshakereachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HndshakereachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
