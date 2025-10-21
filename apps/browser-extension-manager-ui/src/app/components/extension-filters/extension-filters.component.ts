import { AppFilterService, AppFilterType } from '@/app/services/app-filter.service';
import { Component, inject } from '@angular/core';
import { SlotButton } from '@/app/components/ui/button/slot-button.component';

@Component({
  selector: 'app-extension-filters',
  imports: [SlotButton],
  template: `
    <div class="filters">
      @for (filter of filterList; track filter.type) {
        <app-slot-button
          [class]="['filter-button', isFilterSelected(filter.type) ? 'filter-button--active' : '']"
          title="Apply filter"
          (click)="applyFilter(filter.type)"
        >
          {{ filter.title }}
        </app-slot-button>
      }
    </div>
  `,
  styles: `
    .filters {
      display: flex;
      gap: var(--spacing-8);
    }

    .filter-button {
      padding: var(--spacing-8) var(--spacing-16);
      background-color: var(--filter-button-bg-color);
      border-radius: var(--border-radius-24);
      cursor: pointer;
      transition:
        background-color 250ms,
        border 250ms;
      box-shadow: var(--filter-button-box-shadow);
      border: var(--filter-button-border);

      &:hover {
        background-color: var(--app-button-bg-hover);
      }

      &:focus-within {
        outline: var(--filter-button-outline);
        outline-offset: var(--outline-offset-2);
      }

      &--active {
        background-color: var(--filter-button-bg-active);
        border: var(--filter-button-border-active);

        ::ng-deep {
          button {
            color: var(--app-text-color-primary-negative);
          }
        }

        &:hover {
          background-color: var(--filter-button-bg-hover-active);
          border: var(--filter-button-border-hover-active);
        }
      }
    }
  `,
})
export class ExtensionFilters {
  appFilterService: AppFilterService = inject(AppFilterService);

  filterList = this.appFilterService.filterList;
  selectedFilter = this.appFilterService.selectedFilter;

  applyFilter(type: AppFilterType) {
    this.selectedFilter.set(type);
  }

  isFilterSelected(filterType: AppFilterType): boolean {
    return this.selectedFilter() === filterType;
  }
}
