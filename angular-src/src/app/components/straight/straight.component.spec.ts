/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StraightComponent } from './straight.component';

describe('StraightComponent', () => {
  let component: StraightComponent;
  let fixture: ComponentFixture<StraightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StraightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StraightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
