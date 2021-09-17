import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodesettingComponent } from './nodesetting.component';

describe('NodesettingComponent', () => {
  let component: NodesettingComponent;
  let fixture: ComponentFixture<NodesettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodesettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodesettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
