import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooktimePage } from './booktime.page';

describe('BooktimePage', () => {
  let component: BooktimePage;
  let fixture: ComponentFixture<BooktimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooktimePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooktimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
