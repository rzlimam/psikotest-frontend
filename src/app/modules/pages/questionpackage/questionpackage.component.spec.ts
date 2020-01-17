import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionpackageComponent } from './questionpackage.component';

describe('QuestionpackageComponent', () => {
  let component: QuestionpackageComponent;
  let fixture: ComponentFixture<QuestionpackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionpackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionpackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
