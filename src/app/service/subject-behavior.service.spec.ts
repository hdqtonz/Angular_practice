import { TestBed } from '@angular/core/testing';

import { SubjectBehaviorService } from './subject-behavior.service';

describe('SubjectBehaviorService', () => {
  let service: SubjectBehaviorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectBehaviorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
