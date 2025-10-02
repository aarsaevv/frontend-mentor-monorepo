import { Component } from '@angular/core';
import { AppTheme, AppThemeMode } from '@/app/app-theme.service';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <div class="app-header">
      <img class="app-header__logo" src="" alt="" />
      <p class="app-header__title">Extensions</p>

      <button (click)="changeTheme(AppThemeMode.DARK)">Change Theme DARK</button>
      <button (click)="changeTheme(AppThemeMode.LIGHT)">Change Theme LIGHT</button>
    </div>
  `,
  styles: `
    .app-header {
      display: flex;
      gap: var(--spacing-8);
      align-items: center;
      margin-top: var(--spacing-24);
      padding: var(--spacing-8);
      border-radius: var(--border-radius-12);
      background: var(--card-bg-color);

      &__title {
        font-weight: var(--app-font-weight-700);
      }
    }
  `,
})
export class Header {
  AppThemeMode = AppThemeMode;

  appThemeService = new AppTheme();

  ngOnInit() {
    this.appThemeService.initTheme();
  }

  changeTheme(theme: AppThemeMode) {
    this.appThemeService.changeTheme(theme);
  }
}
