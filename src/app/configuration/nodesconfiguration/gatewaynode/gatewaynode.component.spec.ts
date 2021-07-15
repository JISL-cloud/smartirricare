import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewaynodeComponent } from './gatewaynode.component';

describe('GatewaynodeComponent', () => {
  let component: GatewaynodeComponent;
  let fixture: ComponentFixture<GatewaynodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatewaynodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewaynodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
