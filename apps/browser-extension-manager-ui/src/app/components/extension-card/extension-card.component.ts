import { Component, Input } from '@angular/core';
import { Extension } from '@/app/services/extension.service';
import { SlotButton } from '@/app/components/ui/button/slot-button.component';

@Component({
  selector: 'app-extension-card',
  imports: [SlotButton],
  template: `
    <div class="card">
      <div class="card__info">
        <p class="text-primary">{{ extension.name }}</p>
        <p class="text-secondary">{{ extension.description }}</p>
      </div>
      <div class="card__controls">
        <app-slot-button class="remove-button" (click)="removeExtension(extension.name)"
          >Remove</app-slot-button
        >
      </div>
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

    .remove-button {
      padding: var(--spacing-8) var(--spacing-16);
      background-color: var(--remove-button-bg-color);
      border-radius: var(--border-radius-24);
      cursor: pointer;
      transition: background-color 250ms;
      outline: var(--remove-button-outline);
      font-size: var(--app-font-size-14);

      ::ng-deep {
        button {
          display: inline-block;
        }
      }

      &:hover {
        background-color: var(--app-button-bg-hover);
      }
    }
  `,
})
export class ExtensionCard {
  @Input() extension: Extension = {
    logo: '',
    name: '',
    description: '',
    isActive: false,
  };

  removeExtension(extensionName: string): void {
    console.warn('remove!', extensionName);
  }
}
