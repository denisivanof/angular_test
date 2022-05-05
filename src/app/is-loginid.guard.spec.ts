import { TestBed } from '@angular/core/testing';

import { IsLoginidGuard } from './is-loginid.guard';

describe('IsLoginidGuard', () => {
  let guard: IsLoginidGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsLoginidGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
