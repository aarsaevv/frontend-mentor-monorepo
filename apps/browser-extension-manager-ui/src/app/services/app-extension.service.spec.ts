import { TestBed } from '@angular/core/testing';

import { AppExtensionService } from '@/app/services/app-extension.service';

describe('ExtensionsService', () => {
  let service: AppExtensionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppExtensionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
