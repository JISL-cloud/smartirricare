import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodenetworkdataframeComponent } from './nodenetworkdataframe.component';

describe('NodenetworkdataframeComponent', () => {
  let component: NodenetworkdataframeComponent;
  let fixture: ComponentFixture<NodenetworkdataframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodenetworkdataframeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodenetworkdataframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
