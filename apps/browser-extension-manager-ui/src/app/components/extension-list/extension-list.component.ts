import { AppExtension } from '@/app/services/app-extension.service';
import { Component, input, Input } from '@angular/core';
import { ExtensionCard } from '@/app/components/extension-card/extension-card.component';

@Component({
  selector: 'app-extension-list',
  imports: [ExtensionCard],
  template: `
    <div class="extension-list">
      @for (extension of extensions(); track extension.name) {
        <app-extension-card [extension]="extension" />
      }
    </div>
  `,
  styles: `
    .extension-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
      gap: var(--spacing-14);
      margin-top: var(--spacing-24);
    }
  `,
})
export class ExtensionList {
  extensions = input.required<AppExtension[]>();
}
