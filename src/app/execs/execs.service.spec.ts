import { TestBed, inject } from '@angular/core/testing';

import { ExecsService } from './execs.service';

describe('ExecsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExecsService]
    });
  });

  it('should be created', inject([ExecsService], (service: ExecsService) => {
    expect(service).toBeTruthy();
  }));
});
