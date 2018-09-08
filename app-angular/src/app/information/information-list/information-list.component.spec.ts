/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InformationListComponent } from './information-list.component';

describe('InformationListComponent', () => {
  let component: InformationListComponent;
  let fixture: ComponentFixture<InformationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
