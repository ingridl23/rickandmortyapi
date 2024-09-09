import { TestBed } from '@angular/core/testing';

import { CharacterpageService } from './characterpage.service';

describe('CharacterpageService', () => {
  let service: CharacterpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
