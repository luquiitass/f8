import { TestBed } from '@angular/core/testing';

import { UtilPhotoService } from './util-photo.service';

describe('UtilPhotoService', () => {
  let service: UtilPhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilPhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
