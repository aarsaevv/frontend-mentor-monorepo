import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ExtensionCard } from '@/app/components/extension-card/extension-card.component';
import { AppFilterService, AppFilterType } from '@/app/services/app-filter.service';
import { SlotButton } from '@/app/components/ui/button/slot-button.component';
import { Extension, ExtensionService } from '@/app/services/extension.service';

@Component({
  selector: 'app-home-page',
  imports: [ExtensionCard, SlotButton],
  template: `
    <section class="home-page">
      <div class="heading">
        <h1 class="heading__title">Extensions List</h1>
        <div class="heading__filters">
          @for (filter of filterList; track filter.type) {
            <app-slot-button
              [class]="[
                'filter-button',
                isFilterSelected(filter.type) ? 'filter-button--active' : '',
              ]"
              (click)="applyFilter(filter.type)"
            >
              {{ filter.title }}
            </app-slot-button>
          }
        </div>
      </div>
      <div class="extension-list">
        @for (extension of extensions; track extension.name) {
          <app-extension-card [extension]="extension" />
        }
      </div>
    </section>
  `,
  styles: `
    .home-page {
      padding-bottom: var(--spacing-72);
    }

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

    .extension-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--spacing-14);
      margin-top: var(--spacing-24);
    }
  `,
})
export class Home {
  appFilterService: AppFilterService = inject(AppFilterService);
  extensionService: ExtensionService = inject(ExtensionService);

  filterList = this.appFilterService.filterList;
  selectedFilter = this.appFilterService.selectedFilter;

  extensions: Extension[] = [];

  applyFilter(type: AppFilterType) {
    this.selectedFilter.set(type);
    console.log('appliedFilter:', this.selectedFilter());
  }

  isFilterSelected(filterType: AppFilterType): boolean {
    return this.selectedFilter() === filterType;
  }

  async fetchExtensions() {
    this.extensions = await this.extensionService.fetchExtensions();
  }

  ngOnInit() {
    this.fetchExtensions();
  }
}
