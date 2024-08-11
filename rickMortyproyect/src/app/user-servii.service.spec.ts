import { TestBed } from '@angular/core/testing';

import { UserServiiService } from './user-servii.service';

describe('UserServiiService', () => {
  let service: UserServiiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServiiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
