import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedQuestionListComponent } from './assigned-question-list.component';

describe('AssignedQuestionListComponent', () => {
  let component: AssignedQuestionListComponent;
  let fixture: ComponentFixture<AssignedQuestionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedQuestionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedQuestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
