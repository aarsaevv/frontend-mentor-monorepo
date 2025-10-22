import { Component, inject, input, Input } from '@angular/core';
import { Icon } from '@/app/components/ui/icon/icon.component';
import { AppIconService, AppIconSize } from '@/app/services/app-icon.service';

@Component({
  selector: 'app-icon-moon',
  imports: [Icon],
  template: `
    <app-icon [size]="size()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        [attr.viewBox]="getSVGViewboxByIconSize(size())"
      >
        <g clip-path="url(#a)">
          <path
            stroke="#091540"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.98"
            d="M20.125 11.877A7.333 7.333 0 1 1 10.124 1.875a9.168 9.168 0 1 0 10.001 10.002Z"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path
              fill="#fff"
              d="M0 0h22v22H0z"
            />
          </clipPath>
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
export class IconMoon {
  appIconService: AppIconService = inject(AppIconService);

  size = input<AppIconSize>({ width: 22, height: 22 });

  getSVGViewboxByIconSize(size: AppIconSize): string {
    return this.appIconService.getSVGViewboxByIconSize(size);
  }
}
