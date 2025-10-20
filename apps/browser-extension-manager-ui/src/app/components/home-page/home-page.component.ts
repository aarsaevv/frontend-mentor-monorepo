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
  `,
})
export class Home {
  appFilterService: AppFilterService = inject(AppFilterService);
  appExtensionService: AppExtensionService = inject(AppExtensionService);

  selectedFilter = this.appFilterService.selectedFilter;

  extensions = signal<AppExtension[]>([]);

  filteredExtensions = computed(() => {
    switch (this.selectedFilter()) {
      case AppFilterType.ALL:
        return this.extensions();
      case AppFilterType.ACTIVE:
        return this.extensions().filter((item) => item.isActive);
      case AppFilterType.INACTIVE:
        return this.extensions().filter((item) => !item.isActive);
      default:
        return this.extensions();
    }
  });

  async fetchExtensions() {
    const extensions = await this.appExtensionService.fetchExtensions();

    this.extensions.set(extensions);
  }

  ngOnInit() {
    this.fetchExtensions();
  }
}
