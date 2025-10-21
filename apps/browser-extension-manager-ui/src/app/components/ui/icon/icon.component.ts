import { Component, Input, inject, input } from '@angular/core';
import { AppIconSize, AppIconService } from '@/app/services/app-icon.service';

@Component({
  selector: 'app-icon',
  imports: [],
  template: `
    <div
      class="icon"
      [style]="{
        width: this.toPixel(size().width),
        height: this.toPixel(size().height),
      }"
    >
      <ng-content></ng-content>
    </div>
  `,
  styles: `
    .icon {
      display: flex;
      flex-shrink: 0;
      justify-content: center;
      color: currentColor;
      user-select: none;
      vertical-align: initial;
    }
  `,
})
export class Icon {
  appIconService: AppIconService = inject(AppIconService);

  size = input<AppIconSize>({ width: 24, height: 24 });

  toPixel(value: number): string | undefined {
    if (!value) {
      return undefined;
    }

    return this.appIconService.toPixel(value);
  }
}
