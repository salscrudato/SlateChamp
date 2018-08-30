/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SlatechampComponent } from './slatechamp.component';

describe('SlatechampComponent', () => {
  let component: SlatechampComponent;
  let fixture: ComponentFixture<SlatechampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlatechampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlatechampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
