import { Component } from '@angular/core';

@Component({
  selector: 'app-extension-card',
  imports: [],
  template: `
    <div class="card">
      <p class="text-primary">Extension Title</p>
      <p class="text-secondary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eos ipsam iste iusto ratione
        voluptas?
      </p>
    </div>
  `,
  styles: `
    .card {
      padding: var(--spacing-16);
      background: var(--card-bg-color);
      border-radius: var(--border-radius-12);
      box-shadow: var(--card-box-shadow);
      outline: var(--card-outline);
    }

    .text-primary {
      color: var(--app-text-color-primary);
      font-weight: var(--app-font-weight-700);
    }

    .text-secondary {
      margin-top: var(--spacing-4);
      color: var(--app-text-color-secondary);
      font-size: var(--app-font-size-14);
    }
  `,
})
export class ExtensionCard {}
