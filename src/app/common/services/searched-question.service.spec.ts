import { TestBed } from '@angular/core/testing';

import { SearchedQuestionService } from './searched-question.service';

describe('SearchedQuestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchedQuestionService = TestBed.get(SearchedQuestionService);
    expect(service).toBeTruthy();
  });
});
