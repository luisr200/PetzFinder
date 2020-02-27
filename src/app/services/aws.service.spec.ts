import { TestBed } from '@angular/core/testing';

import { AwsService } from './aws.service';

describe('Aws.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AwsService = TestBed.get(AwsService);
    expect(service).toBeTruthy();
  });
});
