import { TestBed } from '@angular/core/testing';

import { AppTheme } from '@/app/app-theme';

describe('AppTheme', () => {
  let service: AppTheme;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppTheme);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
