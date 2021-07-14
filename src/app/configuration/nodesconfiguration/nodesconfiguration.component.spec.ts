import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodesconfigurationComponent } from './nodesconfiguration.component';

describe('NodesconfigurationComponent', () => {
  let component: NodesconfigurationComponent;
  let fixture: ComponentFixture<NodesconfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodesconfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodesconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
