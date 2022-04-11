import { TestBed } from '@angular/core/testing';

import { GetstudentService } from './getstudent.service';

describe('GetstudentService', () => {
  let service: GetstudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetstudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
