/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PropsComponent } from './props.component';

describe('PropsComponent', () => {
  let component: PropsComponent;
  let fixture: ComponentFixture<PropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
