import { TestBed } from '@angular/core/testing';

import { RymapiService } from './rymapi.service';

describe('RymapiService', () => {
  let service: RymapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RymapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
