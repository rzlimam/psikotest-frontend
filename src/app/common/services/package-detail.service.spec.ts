import { TestBed } from '@angular/core/testing';

import { PackageDetailService } from './package-detail.service';

describe('PackageDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PackageDetailService = TestBed.get(PackageDetailService);
    expect(service).toBeTruthy();
  });
});
