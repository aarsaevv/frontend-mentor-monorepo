import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionFilters } from '@/app/components/extension-filters/extension-filters.component';

describe('ExtensionFilters', () => {
  let component: ExtensionFilters;
  let fixture: ComponentFixture<ExtensionFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtensionFilters],
    }).compileComponents();

    fixture = TestBed.createComponent(ExtensionFilters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
