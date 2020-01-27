import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPackageDetailComponent } from './add-package-detail.component';

describe('AddPackageDetailComponent', () => {
  let component: AddPackageDetailComponent;
  let fixture: ComponentFixture<AddPackageDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPackageDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPackageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
