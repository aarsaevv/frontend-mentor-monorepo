import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slot-button',
  imports: [],
  template: `
    <button
      tabindex="0"
      type="button"
      class="button"
      [disabled]="isDisabled"
      [title]="title"
      [attr.aria-label]="ariaLabel"
    >
      <ng-content />
    </button>
  `,
  styles: `
    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
      border: 0;
      background-color: transparent;
      font: inherit;
      cursor: pointer;
      color: var(--app-text-color-primary);

      &:disabled {
        cursor: default;
      }
    }
  `,
})
export class SlotButton {
  @Input() isDisabled: boolean = false;
  @Input() ariaLabel: string = '';
  @Input() title: string = '';
}
