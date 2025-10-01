import { Component } from '@angular/core';
import { AppTheme, AppThemeMode } from '@/app/app-theme.service';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <div>
      <p>header works!</p>
      <button (click)="changeTheme(AppThemeMode.DARK)">Change Theme DARK</button>
      <button (click)="changeTheme(AppThemeMode.LIGHT)">Change Theme LIGHT</button>
    </div>
  `,
  styleUrl: './header.component.scss',
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
