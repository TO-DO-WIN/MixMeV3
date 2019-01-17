import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDrinkPage } from './create-drink.page';

describe('CreateDrinkPage', () => {
  let component: CreateDrinkPage;
  let fixture: ComponentFixture<CreateDrinkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDrinkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDrinkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
