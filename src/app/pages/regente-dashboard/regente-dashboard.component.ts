// src/app/pages/regente-dashboard/regente-dashboard.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regente-dashboard',
  template: `
    <app-dashboard-layout dashboardTitle="Panel de Regente">
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
          routerLink="./schedules"
          routerLinkActive="bg-indigo-700"
          class="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
        >
          Horarios
        </a>
        <a
          routerLink="./students"
          routerLinkActive="bg-indigo-700"
          class="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
        >
          Estudiantes
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
          routerLink="./schedules"
          routerLinkActive="bg-indigo-700"
          class="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700"
        >
          Horarios
        </a>
        <a
          routerLink="./students"
          routerLinkActive="bg-indigo-700"
          class="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700"
        >
          Estudiantes
        </a>
      </div>

      <!-- Contenido del dashboard -->
      <div class="bg-white rounded-lg shadow p-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Tarjeta de Estudiantes -->
          <div class="bg-blue-50 p-6 rounded-lg">
            <h3 class="text-lg font-semibold text-blue-900">
              Total Estudiantes
            </h3>
            <p class="text-3xl font-bold text-blue-600 mt-2">150</p>
            <p class="text-sm text-blue-700 mt-1">↑ 5% este período</p>
          </div>

          <!-- Tarjeta de Clases -->
          <div class="bg-green-50 p-6 rounded-lg">
            <h3 class="text-lg font-semibold text-green-900">Clases Hoy</h3>
            <p class="text-3xl font-bold text-green-600 mt-2">8</p>
            <p class="text-sm text-green-700 mt-1">2 pendientes</p>
          </div>

          <!-- Tarjeta de Asistencia -->
          <div class="bg-yellow-50 p-6 rounded-lg">
            <h3 class="text-lg font-semibold text-yellow-900">Asistencia</h3>
            <p class="text-3xl font-bold text-yellow-600 mt-2">92%</p>
            <p class="text-sm text-yellow-700 mt-1">Promedio mensual</p>
          </div>
        </div>

        <!-- Horario del día -->
        <div class="mt-8">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">
            Horario de Hoy
          </h3>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Hora
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Clase
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Grupo
                  </th>
                  <th
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Estado
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">08:00 - 09:30</td>
                  <td class="px-6 py-4 whitespace-nowrap">Matemáticas</td>
                  <td class="px-6 py-4 whitespace-nowrap">10-A</td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                    >
                      Completada
                    </span>
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
export class RegenteDashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
