import { TestBed } from '@angular/core/testing';

import { HeaderApplicantAnswerService } from './header-applicant-answer.service';

describe('HeaderApplicantAnswerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeaderApplicantAnswerService = TestBed.get(HeaderApplicantAnswerService);
    expect(service).toBeTruthy();
  });
});
