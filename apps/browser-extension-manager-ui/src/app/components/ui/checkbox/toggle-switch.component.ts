import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toggle-switch',
  imports: [],
  template: `
    <label for="toggle-switch" class="toggle-switch">
      <input id="toggle-switch" type="checkbox" [checked]="isChecked" />
      <span class="slider"></span>
    </label>
  `,
  styles: `
    .toggle-switch {
      position: relative;
      display: inline-block;
      width: 36px;
      height: 20px;

      input {
        width: 0;
        height: 0;
        opacity: 0;
      }
    }

    .slider {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: var(--toggle-switch-bg-color);
      transition: background-color 250ms;
      border-radius: var(--border-radius-24);
      cursor: pointer;

      &:before {
        content: '';
        position: absolute;
        height: 16px;
        width: 16px;
        left: var(--spacing-2);
        top: var(--spacing-2);
        background-color: var(--toggle-switch-bg-handle);
        transition: transform 250ms;
        border-radius: 50%;
      }
    }

    input:checked + .slider {
      background-color: var(--toggle-switch-bg-active);
    }

    input:focus + .slider {
      outline: var(--toggle-switch-outline);
      outline-offset: var(--outline-offset-2);
    }

    input:checked + .slider:before {
      transform: translateX(100%);
    }
  `,
})
export class ToggleSwitch {
  @Input() isChecked: boolean = false;
}
