import { TestBed } from '@angular/core/testing';

import { AuthhService } from './authh.service';

describe('AuthhService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthhService = TestBed.get(AuthhService);
    expect(service).toBeTruthy();
  });
});
