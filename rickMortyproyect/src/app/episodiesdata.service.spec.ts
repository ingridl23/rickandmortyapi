import { TestBed } from '@angular/core/testing';

import { EpisodiesdataService } from './episodiesdata.service';

describe('EpisodiesdataService', () => {
  let service: EpisodiesdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpisodiesdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
