import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPackageListComponent } from './question-package-list.component';

describe('QuestionPackageListComponent', () => {
  let component: QuestionPackageListComponent;
  let fixture: ComponentFixture<QuestionPackageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionPackageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionPackageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
