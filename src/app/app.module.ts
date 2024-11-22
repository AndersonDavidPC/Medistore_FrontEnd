import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { RegenteDashboardComponent } from './pages/regente-dashboard/regente-dashboard.component';
import { CoordinadorDashboardComponent } from './pages/coordinador-dashboard/coordinador-dashboard.component';
import { LoginModule } from './components/login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './components/productos/productos.component';
import { ProductoService } from './services/producto.service';

@NgModule({
  declarations: [
    DashboardLayoutComponent,
    AdminDashboardComponent,
    RegenteDashboardComponent,
    CoordinadorDashboardComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    LoginModule,
    AppRoutingModule,
  ],
  providers: [AuthService, AuthGuard, ProductoService],
  // bootstrap: [AppComponent],
})
export class AppModule {}
