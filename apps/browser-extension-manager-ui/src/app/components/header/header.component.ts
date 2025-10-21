import { Component, computed, inject } from '@angular/core';
import { AppThemeMode, AppThemeService } from '@/app/services/app-theme.service';
import { IconLogo } from '@/app/components/ui/icon/icon-logo.component';
import { SlotButton } from '@/app/components/ui/button/slot-button.component';
import { IconMoon } from '@/app/components/ui/icon/icon-moon.component';
import { IconSun } from '@/app/components/ui/icon/icon-sun.component';

@Component({
  selector: 'app-header',
  imports: [IconLogo, SlotButton, IconMoon, IconSun],
  template: `
    <div class="app-header">
      <app-icon-logo />

      @if (this.appThemeService.isLightTheme()) {
        <app-slot-button
          class="app-header__button"
          title="Change theme"
          (click)="changeTheme(AppThemeMode.DARK)"
        >
          <app-icon-moon />
        </app-slot-button>
      } @else {
        <app-slot-button
          class="app-header__button"
          title="Change theme"
          (click)="changeTheme(AppThemeMode.LIGHT)"
        >
          <app-icon-sun />
        </app-slot-button>
      }
    </div>
  `,
  styles: `
    .app-header {
      display: flex;
      gap: var(--spacing-8);
      align-items: center;
      justify-content: space-between;
      margin-top: var(--spacing-24);
      padding: var(--spacing-10) var(--spacing-14);
      border-radius: var(--border-radius-16);
      background-color: var(--header-bg-color);
      box-shadow: var(--header-box-shadow);
      outline: var(--header-outline);

      &__button {
        padding: var(--spacing-8);
        background-color: var(--theme-button-bg-color);
        border-radius: var(--border-radius-8);
        cursor: pointer;
        transition: background-color 250ms;

        &:hover {
          background-color: var(--theme-button-bg-hover);
        }
      }
    }
  `,
})
export class Header {
  appThemeService = inject(AppThemeService);

  AppThemeMode = AppThemeMode;

  changeTheme(theme: AppThemeMode) {
    this.appThemeService.changeTheme(theme);
  }
}
