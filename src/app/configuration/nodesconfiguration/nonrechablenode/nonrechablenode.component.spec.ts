import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonrechablenodeComponent } from './nonrechablenode.component';

describe('NonrechablenodeComponent', () => {
  let component: NonrechablenodeComponent;
  let fixture: ComponentFixture<NonrechablenodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonrechablenodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonrechablenodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
