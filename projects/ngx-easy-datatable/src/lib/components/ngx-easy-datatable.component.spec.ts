import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEasyDatatableComponent } from './ngx-easy-datatable.component';

describe('NgxEasyDatatableComponent', () => {
  let component: NgxEasyDatatableComponent;
  let fixture: ComponentFixture<NgxEasyDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxEasyDatatableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxEasyDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
