import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prj01Component } from './prj-01.component';

describe('Prj01Component', () => {
  let component: Prj01Component;
  let fixture: ComponentFixture<Prj01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prj01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prj01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
