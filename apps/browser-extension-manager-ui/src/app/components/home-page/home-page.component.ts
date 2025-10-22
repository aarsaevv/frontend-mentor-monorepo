import { Component, computed, inject, signal } from '@angular/core';
import { AppExtension, AppExtensionService } from '@/app/services/app-extension.service';
import { ExtensionFilters } from '@/app/components/extension-filters/extension-filters.component';
import { AppFilterService, AppFilterType } from '@/app/services/app-filter.service';
import { ExtensionList } from '@/app/components/extension-list/extension-list.component';

@Component({
  selector: 'app-home-page',
  imports: [ExtensionFilters, ExtensionList],
  template: `
    <section class="home-page">
      <div class="heading">
        <h1 class="heading__title">Extensions List</h1>
        <app-extension-filters />
      </div>

      <app-extension-list [extensions]="filteredExtensions()" />
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
    }

    @media (max-width: 600px) {
      .heading {
        flex-direction: column;
        gap: var(--spacing-16);

        &__title {
          font-size: var(--app-font-size-30);
        }
      }
    }
  `,
})
export class Home {
  appFilterService: AppFilterService = inject(AppFilterService);
  appExtensionService: AppExtensionService = inject(AppExtensionService);

  selectedFilter = this.appFilterService.selectedFilter;

  extensions = this.appExtensionService.extensions;
  filteredExtensions = this.appExtensionService.filteredExtensions;

  async fetchExtensions() {
    const extensions = await this.appExtensionService.fetchExtensions();

    this.extensions.set(extensions);
  }

  ngOnInit() {
    this.fetchExtensions();
  }
}
