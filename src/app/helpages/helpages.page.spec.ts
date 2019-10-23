import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpagesPage } from './helpages.page';

describe('HelpagesPage', () => {
  let component: HelpagesPage;
  let fixture: ComponentFixture<HelpagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpagesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
