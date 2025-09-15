import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { MenuPage } from './menu/menu.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: MenuPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('./dashboard/dashboard.page').then((m) => m.DashboardPage),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('./estoque/estoque.page').then((m) => m.EstoquePage),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('./user/user.page').then((m) => m.UserPage),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];
