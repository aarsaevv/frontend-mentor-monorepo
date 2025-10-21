import { Component, computed, inject, input } from '@angular/core';
import { AppExtension, AppExtensionService } from '@/app/services/app-extension.service';
import { SlotButton } from '@/app/components/ui/button/slot-button.component';
import { ToggleSwitch } from '@/app/components/ui/checkbox/toggle-switch.component';

@Component({
  selector: 'app-extension-card',
  imports: [SlotButton, ToggleSwitch],
  template: `
    <div class="card">
      <div class="card__info">
        <img
          [title]="imgTitle()"
          [src]="extension().logo"
          [alt]="extension().name"
          [width]="logoWidth"
          [height]="logoHeight"
        />
        <div>
          <p class="text-primary">{{ extension().name }}</p>
          <p class="text-secondary">{{ extension().description }}</p>
        </div>
      </div>
      <div class="card__controls">
        <app-slot-button
          class="remove-button"
          title="Remove extension"
          (click)="removeExtension(extension().name)"
        >
          Remove
        </app-slot-button>
        <app-toggle-switch
          title="Toggle extension"
          [checked]="extension().isActive"
          (checkedChange)="toggleExtension(extension().name)"
        />
      </div>
    </div>
  `,
  styles: `
    .card {
      display: flex;
      flex-direction: column;
      padding: var(--spacing-16);
      background: var(--card-bg-color);
      border-radius: var(--border-radius-12);
      box-shadow: var(--card-box-shadow);
      outline: var(--card-outline);
      min-height: 150px;
      justify-content: space-between;

      &__info {
        display: flex;
        gap: var(--spacing-14);
      }

      &__controls {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
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
      border: var(--remove-button-border);
      font-size: var(--app-font-size-14);

      ::ng-deep {
        button {
          display: inline-block;
        }
      }

      &:hover {
        background-color: var(--app-button-bg-hover);
      }

      &:focus-within {
        outline: var(--remove-button-outline);
        outline-offset: var(--outline-offset-2);
      }
    }
  `,
})
export class ExtensionCard {
  appExtensionService: AppExtensionService = inject(AppExtensionService);

  logoWidth: number = 54;
  logoHeight: number = 54;

  extension = input<AppExtension>({
    logo: '',
    name: '',
    description: '',
    isActive: false,
  });

  imgTitle = computed<string>(() => `${this.extension().name} logo image`);

  removeExtension(extensionName: string) {
    this.appExtensionService.removeExtension(extensionName);
  }

  toggleExtension(extensionName: string) {
    this.appExtensionService.toggleExtension(extensionName);
  }
}
