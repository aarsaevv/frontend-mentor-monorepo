import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '@/app/components/header/header.component';
import { AppThemeService } from '@/app/services/app-theme.service';

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

      @media (max-width: 480px) {
        padding: 0 var(--spacing-24);
      }
    }
  `,
})
export class App {
  appThemeService = inject(AppThemeService);

  ngOnInit() {
    this.appThemeService.initTheme();
  }
}
