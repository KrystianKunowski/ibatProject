import { TestBed } from '@angular/core/testing';

import { DublinbikesService } from './dublinbikes.service';

describe('DublinbikesService', () => {
  let service: DublinbikesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DublinbikesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
