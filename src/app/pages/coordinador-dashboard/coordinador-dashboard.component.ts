// src/app/pages/coordinador-dashboard/coordinador-dashboard.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coordinador-dashboard',
  template: `
    <app-dashboard-layout dashboardTitle="Panel de Coordinación">
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
          routerLink="./teachers"
          routerLinkActive="bg-indigo-700"
          class="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
        >
          Profesores
        </a>
        <a
          routerLink="./courses"
          routerLinkActive="bg-indigo-700"
          class="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
        >
          Cursos
        </a>
        <a
          routerLink="./schedule"
          routerLinkActive="bg-indigo-700"
          class="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
        >
          Horarios
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
          routerLink="./teachers"
          routerLinkActive="bg-indigo-700"
          class="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700"
        >
          Profesores
        </a>
        <a
          routerLink="./courses"
          routerLinkActive="bg-indigo-700"
          class="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700"
        >
          Cursos
        </a>
        <a
          routerLink="./schedule"
          routerLinkActive="bg-indigo-700"
          class="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700"
        >
          Horarios
        </a>
      </div>

      <!-- Contenido del dashboard -->
      <div class="bg-white rounded-lg shadow p-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Tarjeta de Profesores -->
          <div class="bg-purple-50 p-6 rounded-lg">
            <h3 class="text-lg font-semibold text-purple-900">
              Total Profesores
            </h3>
            <p class="text-3xl font-bold text-purple-600 mt-2">45</p>
            <p class="text-sm text-purple-700 mt-1">42 activos</p>
          </div>

          <!-- Tarjeta de Cursos -->
          <div class="bg-indigo-50 p-6 rounded-lg">
            <h3 class="text-lg font-semibold text-indigo-900">
              Cursos Activos
            </h3>
            <p class="text-3xl font-bold text-indigo-600 mt-2">28</p>
            <p class="text-sm text-indigo-700 mt-1">↑ 2 nuevos este mes</p>
          </div>

          <!-- Tarjeta de Horarios -->
          <div class="bg-blue-50 p-6 rounded-lg">
            <h3 class="text-lg font-semibold text-blue-900">
              Clases Programadas
            </h3>
            <p class="text-3xl font-bold text-blue-600 mt-2">156</p>
            <p class="text-sm text-blue-700 mt-1">Esta semana</p>
          </div>
        </div>

        <!-- Asignaciones Pendientes -->
        <div class="mt-8">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">
            Asignaciones Pendientes
          </h3>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Curso
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Profesor
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Horario
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Estado
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">
                    Matemáticas Avanzadas
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">Por asignar</td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    Lun/Mie 14:00-16:00
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800"
                    >
                      Pendiente
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm">
                    <button class="text-indigo-600 hover:text-indigo-900">
                      Asignar
                    </button>
                  </td>
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
export class CoordinadorDashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
