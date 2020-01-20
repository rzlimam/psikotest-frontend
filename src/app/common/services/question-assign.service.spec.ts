import { TestBed } from '@angular/core/testing';

import { QuestionAssignService } from './question-assign.service';

describe('QuestionAssignService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionAssignService = TestBed.get(QuestionAssignService);
    expect(service).toBeTruthy();
  });
});
