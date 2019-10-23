import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedpagePage } from './verifiedpage.page';

describe('VerifiedpagePage', () => {
  let component: VerifiedpagePage;
  let fixture: ComponentFixture<VerifiedpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifiedpagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifiedpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
