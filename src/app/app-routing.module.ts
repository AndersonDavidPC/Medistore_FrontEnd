// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { RegenteDashboardComponent } from './pages/regente-dashboard/regente-dashboard.component';
import { CoordinadorDashboardComponent } from './pages/coordinador-dashboard/coordinador-dashboard.component';
import { ProductListComponent } from './components/productos/productos.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'productos', component: ProductListComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard], data: { allowedUserTypes: ['admin'] } },
  { path: 'regente', component: RegenteDashboardComponent, canActivate: [AuthGuard], data: { allowedUserTypes: ['regente'] } },
  { path: 'coordinador', component: CoordinadorDashboardComponent, canActivate: [AuthGuard], data: { allowedUserTypes: ['coordinador'] } },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: '**', redirectTo: '/productos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
