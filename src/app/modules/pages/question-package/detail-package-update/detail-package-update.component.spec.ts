import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPackageUpdateComponent } from './detail-package-update.component';

describe('DetailPackageUpdateComponent', () => {
  let component: DetailPackageUpdateComponent;
  let fixture: ComponentFixture<DetailPackageUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPackageUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPackageUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
