import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginbannerPage } from './loginbanner.page';

describe('LoginbannerPage', () => {
  let component: LoginbannerPage;
  let fixture: ComponentFixture<LoginbannerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginbannerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginbannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
