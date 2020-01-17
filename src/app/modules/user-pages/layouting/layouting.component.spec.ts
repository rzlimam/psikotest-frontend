import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutingComponent } from './layouting.component';

describe('LayoutingComponent', () => {
  let component: LayoutingComponent;
  let fixture: ComponentFixture<LayoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
