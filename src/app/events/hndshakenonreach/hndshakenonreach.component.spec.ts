import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HndshakenonreachComponent } from './hndshakenonreach.component';

describe('HndshakenonreachComponent', () => {
  let component: HndshakenonreachComponent;
  let fixture: ComponentFixture<HndshakenonreachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HndshakenonreachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HndshakenonreachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
