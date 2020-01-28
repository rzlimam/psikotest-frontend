import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KakiComponent } from './kaki.component';

describe('KakiComponent', () => {
  let component: KakiComponent;
  let fixture: ComponentFixture<KakiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KakiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KakiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
