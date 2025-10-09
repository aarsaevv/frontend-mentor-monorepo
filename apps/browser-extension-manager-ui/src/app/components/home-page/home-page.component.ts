import { Component, inject } from '@angular/core';
import { ExtensionCard } from '@/app/components/extension-card/extension-card.component';
import { AppFilterService, AppFilterType } from '@/app/services/app-filter.service';
import { SlotButton } from '@/app/components/ui/button/slot-button.component';

@Component({
  selector: 'app-home-page',
  imports: [ExtensionCard, SlotButton],
  template: `
    <div class="heading">
      <h1 class="heading__title">Extensions List</h1>
      <div class="heading__filters">
        @for (filter of filterList; track filter.type) {
          <app-slot-button class="filter-button" (click)="applyFilter(filter.type)">
            {{ filter.title }}
          </app-slot-button>
        }
      </div>
    </div>
    <div class="extension-list">
      @for (n of [].constructor(10); track n) {
        <app-extension-card />
      }
    </div>
  `,
  styles: `
    .heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: var(--spacing-48);

      &__title {
        font-size: var(--app-font-size-24);
      }

      &__filters {
        display: flex;
        gap: var(--spacing-8);
      }
    }

    .filter-button {
      padding: var(--spacing-8) var(--spacing-16);
      background-color: var(--filter-button-bg-color);
      border-radius: var(--border-radius-24);
      cursor: pointer;
      transition: background-color 250ms;
      box-shadow: var(--filter-button-box-shadow);
      outline: var(--filter-button-outline);

      &:hover {
        background-color: var(--filter-button-bg-hover);
      }
    }

    .extension-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: var(--spacing-8);
      margin-top: var(--spacing-24);
    }
  `,
})
export class Home {
  appFilterService: AppFilterService = inject(AppFilterService);

  filterList = this.appFilterService.filterList;

  applyFilter(type: AppFilterType) {
    console.log('appliedFilter:', type);
  }
}
