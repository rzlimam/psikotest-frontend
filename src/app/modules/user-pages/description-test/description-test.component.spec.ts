import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionTestComponent } from './description-test.component';

describe('DescriptionTestComponent', () => {
  let component: DescriptionTestComponent;
  let fixture: ComponentFixture<DescriptionTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
