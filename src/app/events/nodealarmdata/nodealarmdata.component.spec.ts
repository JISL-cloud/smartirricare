import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodealarmdataComponent } from './nodealarmdata.component';

describe('NodealarmdataComponent', () => {
  let component: NodealarmdataComponent;
  let fixture: ComponentFixture<NodealarmdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodealarmdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodealarmdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
