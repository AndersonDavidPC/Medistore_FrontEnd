import { Component, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  template: `
    <div class="min-h-screen bg-gray-100">
      <!-- Navbar -->
      <nav class="bg-indigo-600">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <!-- Logo/Título -->
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <span class="text-white text-lg font-bold">{{
                  dashboardTitle
                }}</span>
              </div>
            </div>

            <!-- Enlaces de navegación -->
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <ng-content select="[navLinks]"></ng-content>
              </div>
            </div>

            <!-- Menú de usuario -->
            <div class="flex items-center">
              <div class="ml-3 relative">
                <div class="flex items-center space-x-4">
                  <span class="text-white">{{ userName }}</span>
                  <button
                    (click)="logout()"
                    class="px-3 py-2 rounded-md text-sm font-medium text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
                  >
                    Cerrar Sesión
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Menú móvil -->
        <div class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <ng-content select="[mobileLinks]"></ng-content>
          </div>
        </div>
      </nav>

      <!-- Contenido principal -->
      <main class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <ng-content></ng-content>
      </main>
    </div>
  `,
})
export class DashboardLayoutComponent {
  @Input() dashboardTitle: string = '';
  userName: string = '';

  constructor(private authService: AuthService, private router: Router) {
    this.userName = this.authService.currentUserValue?.nombre || '';
  }

  logout(): void {
    this.authService.logout();
  }
}
