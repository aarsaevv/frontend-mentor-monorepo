import { TestBed } from '@angular/core/testing';

import { AppFilterService } from '@/app/services/app-filter.service';

describe('AppFilterService', () => {
  let service: AppFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
