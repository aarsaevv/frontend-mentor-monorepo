import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '@/app/header/header.component';
import { AppTheme } from '@/app/app-theme.service';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet],
  template: `
    <app-header />
    <router-outlet />
  `,
  styleUrl: './app.component.scss',
})
export class App {
  appThemeService = new AppTheme();

  ngOnInit() {
    this.appThemeService.initTheme();
  }
}
