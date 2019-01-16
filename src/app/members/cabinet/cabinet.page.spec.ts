import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetPage } from './cabinet.page';

describe('CabinetPage', () => {
  let component: CabinetPage;
  let fixture: ComponentFixture<CabinetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabinetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
