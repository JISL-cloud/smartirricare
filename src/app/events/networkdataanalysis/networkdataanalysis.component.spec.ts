import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkdataanalysisComponent } from './networkdataanalysis.component';

describe('NetworkdataanalysisComponent', () => {
  let component: NetworkdataanalysisComponent;
  let fixture: ComponentFixture<NetworkdataanalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkdataanalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkdataanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
