import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadChildren: () => import('./routed/home/routes').then(mod => mod.ROUTES)},
  ];
  