import { TestBed } from '@angular/core/testing';

import { AppIconService } from '@/app/services/app-icon.service';

describe('AppIconService', () => {
  let service: AppIconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppIconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
