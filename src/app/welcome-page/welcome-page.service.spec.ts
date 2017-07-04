import { TestBed, inject } from '@angular/core/testing';

import { WelcomePageService } from './welcome-page.service';

describe('WelcomePageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WelcomePageService]
    });
  });

  it('should be created', inject([WelcomePageService], (service: WelcomePageService) => {
    expect(service).toBeTruthy();
  }));
});
