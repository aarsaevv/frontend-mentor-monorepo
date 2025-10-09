import { Component, inject, Input } from '@angular/core';
import { Icon } from '@/app/components/ui/icon/icon.component';
import { AppIconService, AppIconSize } from '@/app/services/app-icon.service';

@Component({
  selector: 'app-icon-sun',
  imports: [Icon],
  template: `
    <app-icon [size]="size">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        [attr.viewBox]="getSVGViewboxByIconSize(size)"
      >
        <g clip-path="url(#a)">
          <path
            stroke="#FBFDFE"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.98"
            d="M11 1.833v1.834m0 14.666v1.834M3.667 11H1.833m3.955-5.212L4.492 4.492m11.72 1.296 1.297-1.296M5.788 16.215l-1.296 1.296m11.72-1.296 1.297 1.296M20.167 11h-1.834m-2.75 0a4.583 4.583 0 1 1-9.167 0 4.583 4.583 0 0 1 9.167 0Z"
          />
        </g>
        <defs>
          <clipPath id="a"><path fill="#fff" d="M0 0h22v22H0z" /></clipPath>
        </defs>
      </svg>
    </app-icon>
  `,
  styles: `
    .icon {
      display: inline-block;
      width: 1em;
      height: 1em;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  `,
})
export class IconSun {
  appIconService: AppIconService = inject(AppIconService);

  @Input() size: AppIconSize = { width: 22, height: 22 };

  getSVGViewboxByIconSize(size: AppIconSize): string {
    return this.appIconService.getSVGViewboxByIconSize(size);
  }
}
