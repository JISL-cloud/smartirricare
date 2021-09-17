import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodelivedataComponent } from './nodelivedata.component';

describe('NodelivedataComponent', () => {
  let component: NodelivedataComponent;
  let fixture: ComponentFixture<NodelivedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodelivedataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodelivedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
