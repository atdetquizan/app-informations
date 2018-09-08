/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InformationNewComponent } from './information-new.component';

describe('InformationNewComponent', () => {
  let component: InformationNewComponent;
  let fixture: ComponentFixture<InformationNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
