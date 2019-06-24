import { TestBed } from '@angular/core/testing';

import { NgxEasyDatatableService } from './ngx-easy-datatable.service';

describe('NgxEasyDatatableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxEasyDatatableService = TestBed.get(NgxEasyDatatableService);
    expect(service).toBeTruthy();
  });
});
