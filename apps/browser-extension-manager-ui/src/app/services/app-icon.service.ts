import { Injectable } from '@angular/core';

export interface AppIconSize {
  width: number;
  height: number;
}

@Injectable({
  providedIn: 'root',
})
export class AppIconService {
  getSVGViewboxByIconSize(size: AppIconSize): string {
    const { width, height } = size;

    return `0 0 ${width} ${height}`;
  }

  toPixel(value: number): string {
    return value + 'px';
  }
}
