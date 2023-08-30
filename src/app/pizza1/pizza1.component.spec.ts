import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pizza1Component } from './pizza1.component';

describe('Pizza1Component', () => {
  let component: Pizza1Component;
  let fixture: ComponentFixture<Pizza1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pizza1Component]
    });
    fixture = TestBed.createComponent(Pizza1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
