import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechablenodeComponent } from './rechablenode.component';

describe('RechablenodeComponent', () => {
  let component: RechablenodeComponent;
  let fixture: ComponentFixture<RechablenodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechablenodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechablenodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
