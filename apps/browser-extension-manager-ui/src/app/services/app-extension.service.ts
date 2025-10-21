import { computed, inject, Injectable, signal } from '@angular/core';
import { AppFilterService, AppFilterType } from '@/app/services/app-filter.service';

export interface AppExtension {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AppExtensionService {
  appFilterService: AppFilterService = inject(AppFilterService);

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

  async fetchExtensions(): Promise<any> {
    try {
      const data = await fetch('/extensions.json');

      return data.json();
    } catch (error) {
      console.error(error);
    }
  }

  removeExtension(extensionName: string) {
    const list = this.extensions().filter((item) => item.name !== extensionName);

    this.extensions.update(() => list);
  }

  toggleExtension(extensionName: string) {
    // TODO: Написать функцию, которая принимает новое значение тоггла

    const list = this.extensions().map((item) => {
      if (item.name === extensionName) {
        return { ...item, isActive: !item.isActive };
      }

      return item;
    });

    this.extensions.update(() => list);
  }
}
