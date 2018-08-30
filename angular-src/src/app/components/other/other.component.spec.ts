/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Straight2Component } from './straight2.component';

describe('Straight2Component', () => {
  let component: Straight2Component;
  let fixture: ComponentFixture<Straight2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Straight2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Straight2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
