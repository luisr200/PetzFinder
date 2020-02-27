import { TestBed } from '@angular/core/testing';

import { Aws.ServiceService } from './aws.service.service';

describe('Aws.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Aws.ServiceService = TestBed.get(Aws.ServiceService);
    expect(service).toBeTruthy();
  });
});
