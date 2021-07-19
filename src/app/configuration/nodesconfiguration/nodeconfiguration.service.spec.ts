import { TestBed } from '@angular/core/testing';

import { NodeconfigurationService } from './nodeconfiguration.service';

describe('NodeconfigurationService', () => {
  let service: NodeconfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeconfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
