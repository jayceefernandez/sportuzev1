import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookplacePage } from './bookplace.page';

describe('BookplacePage', () => {
  let component: BookplacePage;
  let fixture: ComponentFixture<BookplacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookplacePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookplacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
