import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooktimeinfoPage } from './booktimeinfo.page';

describe('BooktimeinfoPage', () => {
  let component: BooktimeinfoPage;
  let fixture: ComponentFixture<BooktimeinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooktimeinfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooktimeinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
