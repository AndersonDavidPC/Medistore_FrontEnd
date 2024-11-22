// src/app/pages/admin-dashboard/admin-dashboard.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  template: `
    <app-dashboard-layout dashboardTitle="Panel de Administración">
      <!-- Enlaces de navegación -->
      <div navLinks>
        <a
          routerLink="./overview"
          routerLinkActive="bg-indigo-700"
          class="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
        >
          Vista General
        </a>
        <a
          routerLink="./users"
          routerLinkActive="bg-indigo-700"
          class="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
        >
          Gestión de Usuarios
        </a>
        <a
          routerLink="./reports"
          routerLinkActive="bg-indigo-700"
          class="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
        >
          Reportes
        </a>
      </div>

      <!-- Enlaces móviles -->
      <div mobileLinks>
        <a
          routerLink="./overview"
          routerLinkActive="bg-indigo-700"
          class="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700"
        >
          Vista General
        </a>
        <a
          routerLink="./users"
          routerLinkActive="bg-indigo-700"
          class="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700"
        >
          Gestión de Usuarios
        </a>
        <a
          routerLink="./reports"
          routerLinkActive="bg-indigo-700"
          class="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700"
        >
          Reportes
        </a>
      </div>

      <!-- Contenido del dashboard -->
      <div class="bg-white rounded-lg shadow p-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Tarjeta de Usuarios -->
          <div class="bg-indigo-50 p-6 rounded-lg">
            <h3 class="text-lg font-semibold text-indigo-900">
              Usuarios Activos
            </h3>
            <p class="text-3xl font-bold text-indigo-600 mt-2">25</p>
            <p class="text-sm text-indigo-700 mt-1">
              ↑ 12% desde el último mes
            </p>
          </div>

          <!-- Tarjeta de Regentes -->
          <div class="bg-green-50 p-6 rounded-lg">
            <h3 class="text-lg font-semibold text-green-900">Regentes</h3>
            <p class="text-3xl font-bold text-green-600 mt-2">12</p>
            <p class="text-sm text-green-700 mt-1">8 activos</p>
          </div>

          <!-- Tarjeta de Coordinadores -->
          <div class="bg-blue-50 p-6 rounded-lg">
            <h3 class="text-lg font-semibold text-blue-900">Coordinadores</h3>
            <p class="text-3xl font-bold text-blue-600 mt-2">13</p>
            <p class="text-sm text-blue-700 mt-1">10 activos</p>
          </div>
        </div>

        <!-- Tabla de actividades recientes -->
        <div class="mt-8">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">
            Actividad Reciente
          </h3>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Usuario
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Tipo
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Acción
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Fecha
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">Juan Pérez</td>
                  <td class="px-6 py-4 whitespace-nowrap">Regente</td>
                  <td class="px-6 py-4 whitespace-nowrap">Inicio de sesión</td>
                  <td class="px-6 py-4 whitespace-nowrap">2024-03-21 10:30</td>
                </tr>
                <!-- Más filas aquí -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </app-dashboard-layout>
  `,
})
export class AdminDashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
