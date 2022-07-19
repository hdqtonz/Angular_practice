import { TestBed } from '@angular/core/testing';

import { ActiveteGuard } from './activete.guard';

describe('ActiveteGuard', () => {
  let guard: ActiveteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActiveteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
