import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadconfigurationsequencComponent } from './uploadconfigurationsequenc.component';

describe('UploadconfigurationsequencComponent', () => {
  let component: UploadconfigurationsequencComponent;
  let fixture: ComponentFixture<UploadconfigurationsequencComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadconfigurationsequencComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadconfigurationsequencComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
