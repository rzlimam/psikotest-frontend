import { TestBed } from '@angular/core/testing';

import { ApplicantAnswerService } from './applicant-answer.service';

describe('ApplicantAnswerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicantAnswerService = TestBed.get(ApplicantAnswerService);
    expect(service).toBeTruthy();
  });
});
