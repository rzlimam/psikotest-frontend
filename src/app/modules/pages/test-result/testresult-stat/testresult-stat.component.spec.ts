import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestresultStatComponent } from './testresult-stat.component';

describe('TestresultStatComponent', () => {
  let component: TestresultStatComponent;
  let fixture: ComponentFixture<TestresultStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestresultStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestresultStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
