import { Component } from '@angular/core';
import { ExtensionCard } from '@/app/components/extension-card/extension-card.component';

@Component({
  selector: 'app-home-page',
  imports: [ExtensionCard],
  template: `
    <p>home-page works!</p>
    <app-extension-card />
    <app-extension-card />
    <app-extension-card />
  `,
  styles: ``,
})
export class Home {}
