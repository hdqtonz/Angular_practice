import { TestBed } from '@angular/core/testing';

import { DeactiveteGuard } from './deactivete.guard';

describe('DeactiveteGuard', () => {
  let guard: DeactiveteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeactiveteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
