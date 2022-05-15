import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GwsttusdataComponent } from './gwsttusdata.component';

describe('GwsttusdataComponent', () => {
  let component: GwsttusdataComponent;
  let fixture: ComponentFixture<GwsttusdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GwsttusdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GwsttusdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
