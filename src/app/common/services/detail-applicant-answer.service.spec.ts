import { TestBed } from '@angular/core/testing';

import { DetailApplicantAnswerService } from './detail-applicant-answer.service';

describe('DetailApplicantAnswerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailApplicantAnswerService = TestBed.get(DetailApplicantAnswerService);
    expect(service).toBeTruthy();
  });
});
