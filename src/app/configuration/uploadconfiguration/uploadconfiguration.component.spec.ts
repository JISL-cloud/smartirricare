import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadconfigurationComponent } from './uploadconfiguration.component';

describe('UploadconfigurationComponent', () => {
  let component: UploadconfigurationComponent;
  let fixture: ComponentFixture<UploadconfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadconfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
