import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditsequenceComponent } from './addeditsequence.component';

describe('AddeditsequenceComponent', () => {
  let component: AddeditsequenceComponent;
  let fixture: ComponentFixture<AddeditsequenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditsequenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditsequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
