import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeupdatedataComponent } from './nodeupdatedata.component';

describe('NodeupdatedataComponent', () => {
  let component: NodeupdatedataComponent;
  let fixture: ComponentFixture<NodeupdatedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeupdatedataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeupdatedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
