import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodejoindataframeComponent } from './nodejoindataframe.component';

describe('NodejoindataframeComponent', () => {
  let component: NodejoindataframeComponent;
  let fixture: ComponentFixture<NodejoindataframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodejoindataframeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodejoindataframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
