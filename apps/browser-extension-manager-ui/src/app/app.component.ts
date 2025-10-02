import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '@/app/header/header.component';
import { AppTheme } from '@/app/app-theme.service';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet],
  template: `
    <div class="app-container">
      <app-header />
      <router-outlet />
    </div>
  `,
  styles: `
    .app-container {
      padding: 0 var(--spacing-72);
    }
  `,
})
export class App {
  appThemeService = new AppTheme();

  ngOnInit() {
    this.appThemeService.initTheme();
  }
}
