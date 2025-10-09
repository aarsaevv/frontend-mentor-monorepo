import { Injectable } from '@angular/core';

export interface Extension {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ExtensionService {
  async fetchExtensions(): Promise<any> {
    try {
      const data = await fetch('/extensions.json');

      return data.json();
    } catch (error) {
      console.error(error);
    }
  }
}
