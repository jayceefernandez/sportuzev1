import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookchoosePage } from './bookchoose.page';

describe('BookchoosePage', () => {
  let component: BookchoosePage;
  let fixture: ComponentFixture<BookchoosePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookchoosePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookchoosePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
