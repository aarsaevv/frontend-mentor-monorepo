import { Component, inject } from '@angular/core';
import { AppThemeMode, AppThemeService } from '@/app/services/app-theme.service';
import { IconLogo } from '@/app/components/icon/icon-logo/icon-logo.component';

@Component({
  selector: 'app-header',
  imports: [IconLogo],
  template: `
    <div class="app-header">
      <app-icon-logo [size]="{ width: 180, height: 40 }" />

      <button class="app-header__button" (click)="changeTheme(AppThemeMode.DARK)">
        Change Theme DARK
      </button>
      <button class="app-header__button" (click)="changeTheme(AppThemeMode.LIGHT)">
        Change Theme LIGHT
      </button>
    </div>
  `,
  styles: `
    .app-header {
      display: flex;
      gap: var(--spacing-8);
      align-items: center;
      margin-top: var(--spacing-24);
      padding: var(--spacing-16);
      border-radius: var(--border-radius-16);
      background: var(--card-bg-color);
    }
  `,
})
export class Header {
  appThemeService = inject(AppThemeService);

  AppThemeMode = AppThemeMode;

  changeTheme(theme: AppThemeMode) {
    this.appThemeService.changeTheme(theme);
  }

  ngOnInit() {
    this.appThemeService.initTheme();
  }
}
