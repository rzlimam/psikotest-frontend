import { TestBed } from '@angular/core/testing';

import { PointForEachTypeService } from './point-for-each-type.service';

describe('PointForEachTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PointForEachTypeService = TestBed.get(PointForEachTypeService);
    expect(service).toBeTruthy();
  });
});
