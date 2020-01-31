import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPackageAddComponent } from './detail-package-add.component';

describe('DetailPackageAddComponent', () => {
  let component: DetailPackageAddComponent;
  let fixture: ComponentFixture<DetailPackageAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPackageAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPackageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
