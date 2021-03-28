import { TestBed } from '@angular/core/testing';

import { UtilArrayService } from './util-array.service';

describe('UtilArrayService', () => {
  let service: UtilArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
