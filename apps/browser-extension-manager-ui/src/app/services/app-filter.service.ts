import { Injectable, signal } from '@angular/core';

export enum AppFilterType {
  ALL = 'all',
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

export interface AppFilter {
  title: string;
  type: AppFilterType;
}

@Injectable({
  providedIn: 'root',
})
export class AppFilterService {
  filterList: AppFilter[] = [
    {
      title: 'All',
      type: AppFilterType.ALL,
    },
    {
      title: 'Active',
      type: AppFilterType.ACTIVE,
    },
    {
      title: 'Inactive',
      type: AppFilterType.INACTIVE,
    },
  ];

  selectedFilter = signal<AppFilterType>(AppFilterType.ALL);
}
