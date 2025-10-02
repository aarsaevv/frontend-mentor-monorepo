import { Routes } from '@angular/router';
import { Home } from '@/app/components/home-page/home-page.component';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home page',
  },
];
