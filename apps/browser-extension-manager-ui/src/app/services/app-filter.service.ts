import { Injectable, signal } from '@angular/core';

export type AppFilterType = 'all' | 'active' | 'inactive';

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
      type: 'all',
    },
    {
      title: 'Active',
      type: 'active',
    },
    {
      title: 'Inactive',
      type: 'inactive',
    },
  ];

  selectedFilter = signal('all');
}
