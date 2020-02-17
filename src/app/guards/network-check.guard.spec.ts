import { TestBed } from '@angular/core/testing';

import { NetworkCheckGuard } from './network-check.guard';

describe('NetworkCheckGuard', () => {
  let guard: NetworkCheckGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NetworkCheckGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
