// app.routes.ts
import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./components/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'productos',
    loadChildren: () =>
      import('./components/productos/productos.module').then(
        (m) => m.ProductosModule
      ),
    canActivate: [AuthGuard],
  },
  // {
  //   path: 'admin',
  //   loadChildren: () =>
  //     import('./pages/admin/admin.module').then((m) => m.AdminModule),
  //   canActivate: [AuthGuard],
  //   data: { allowedUserTypes: ['admin'] },
  // },
  // {
  //   path: 'regente',
  //   loadChildren: () =>
  //     import('./pages/regente/regente.module').then((m) => m.RegenteModule),
  //   canActivate: [AuthGuard],
  //   data: { allowedUserTypes: ['regente'] },
  // },
  // {
  //   path: 'coordinador',
  //   loadChildren: () =>
  //     import('./pages/coordinador/coordinador.module').then(
  //       (m) => m.CoordinadorModule
  //     ),
  //   canActivate: [AuthGuard],
  //   data: { allowedUserTypes: ['coordinador'] },
  // },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Cambiado de productos a login
  { path: '**', redirectTo: '/login' }, // Cambiado de productos a login
];
