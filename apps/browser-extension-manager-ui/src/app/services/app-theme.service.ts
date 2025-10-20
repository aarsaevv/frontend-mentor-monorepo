import { Injectable, signal, computed } from '@angular/core';
import LocalStorage from '@libs/sdk/src/local-storage';

enum LocalStorageKey {
  AppTheme = 'app_theme',
}

export enum AppThemeMode {
  LIGHT = 'theme-light',
  DARK = 'theme-dark',
}

interface LocalStorageValueMap {
  'app-theme': AppThemeMode;
  [k: string]: unknown;
}

@Injectable({
  providedIn: 'root',
})
export class AppThemeService {
  htmlElement = document.documentElement;

  localStorage = LocalStorage<LocalStorageKey, LocalStorageValueMap>();

  savedTheme = signal<AppThemeMode>(
    (this.localStorage.getValue(LocalStorageKey.AppTheme, AppThemeMode.LIGHT)
      ?.value as AppThemeMode) ?? AppThemeMode.DARK,
  );

  isLightTheme = computed(() => this.savedTheme() === AppThemeMode.LIGHT);

  applyTheme(theme: AppThemeMode) {
    this.htmlElement.classList.remove('theme-light', 'theme-dark');

    switch (theme) {
      case AppThemeMode.LIGHT:
        this.htmlElement.classList.add('theme-light');
        this.htmlElement.style.colorScheme = 'light';
        break;
      case AppThemeMode.DARK:
        this.htmlElement.classList.add('theme-dark');
        this.htmlElement.style.colorScheme = 'dark';
        break;
    }
  }

  changeTheme(theme: AppThemeMode) {
    this.htmlElement.classList.add('theme-transition');

    const transition = document.startViewTransition(() => {
      this.localStorage.setValue(LocalStorageKey.AppTheme, { value: theme });
      this.savedTheme.set(theme);

      this.applyTheme(theme);
    });

    transition.finished.finally(() => {
      this.htmlElement.classList.remove('theme-transition');
    });
  }

  initTheme() {
    this.applyTheme(this.savedTheme());
  }
}
