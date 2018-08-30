/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ParlayComponent } from './parlay.component';

describe('ParlayComponent', () => {
  let component: ParlayComponent;
  let fixture: ComponentFixture<ParlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
