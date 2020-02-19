import { TestBed } from '@angular/core/testing';

import { SpamService } from './spam.service';

describe('SpamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpamService = TestBed.get(SpamService);
    expect(service).toBeTruthy();
  });
});
