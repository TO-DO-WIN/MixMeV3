import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDrinkPage } from './find-drink.page';

describe('FindDrinkPage', () => {
  let component: FindDrinkPage;
  let fixture: ComponentFixture<FindDrinkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindDrinkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindDrinkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
