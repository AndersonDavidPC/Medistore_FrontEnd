import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User, LoginRequest, RegisterRequest } from '../models/auth.models';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User | null>(
      this.getUserFromStorage()
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // Getters útiles
  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  public isAuthenticated(): boolean {
    return !!this.currentUserValue;
  }

  public getCurrentUserType(): string | null {
    return this.currentUserValue?.userType || null;
  }

  // Obtener usuario del localStorage
  private getUserFromStorage(): User | null {
    try {
      const userStr = localStorage.getItem('currentUser');
      return userStr ? JSON.parse(userStr) : null;
    } catch (error) {
      console.error('Error al obtener usuario del localStorage:', error);
      return null;
    }
  }

  // Login
  login(nombre_usuario: string, clave: string, endpoint: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${endpoint}`, { nombre_usuario, clave });
  }

  // Registro de nuevo usuario
  register(registerData: RegisterRequest): Observable<any> {
    // Validamos que solo se puedan registrar regentes y coordinadores
    if (
      registerData.userType === ('admin' as 'regente' | 'coordinador' | 'admin')
    ) {
      return throwError(
        () => new Error('No se permite el registro de administradores')
      );
    }
    let endpoint = registerData.userType;
    if (endpoint === 'regente') {
      endpoint += 's';
    } else if (endpoint === 'coordinador') {
      endpoint += 'es';
    }
    return this.http
      .post<any>(`${this.apiUrl}/${endpoint}/registro`, registerData)
      .pipe(catchError(this.handleError));
  }

  // Restablecer contraseña
  resetPassword(nombre_usuario: string): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/auth/reset-clave`, { nombre_usuario })
      .pipe(catchError(this.handleError));
  }

  // Cambiar contraseña
  changePassword(oldPassword: string, newPassword: string): Observable<any> {
    let endpoint = this.currentUserValue?.userType;
    if (endpoint === 'regente') {
      endpoint += 's';
    } else if (endpoint === 'coordinador') {
      endpoint += 'es';
    }
    return this.http
      .post<any>(`${this.apiUrl}/${endpoint}/registro`, {
        cedula: this.currentUserValue?.cedula,
        oldPassword,
        newPassword,
      })
      .pipe(catchError(this.handleError));
  }

  // Actualizar datos del usuario
  updateUserProfile(userData: Partial<User>): Observable<User> {
    return this.http
      .put<User>(
        `${this.apiUrl}/users/${this.currentUserValue?.cedula}`,
        userData
      )
      .pipe(
        tap((updatedUser) => this.setCurrentUser(updatedUser)),
        catchError(this.handleError)
      );
  }

  // Verificar estado de activación (para regentes y coordinadores)
  checkActivationStatus(cedula: number): Observable<boolean> {
    return this.http
      .get<{ activo: boolean }>(`${this.apiUrl}/users/${cedula}/status`)
      .pipe(
        map((response) => response.activo),
        catchError(this.handleError)
      );
  }

  // Establecer usuario actual
  setCurrentUser(user: User): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  // Cerrar sesión
  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  private handleLogoutSuccess(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  // Manejo de errores HTTP
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ha ocurrido un error en el servidor.';

    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = error.error.message;
    } else {
      // Error del lado del servidor
      switch (error.status) {
        case 400:
          errorMessage = 'Datos inválidos. Por favor verifica la información.';
          break;
        case 401:
          errorMessage = 'Usuario o contraseña incorrectos.';
          break;
        case 403:
          errorMessage = 'Acceso denegado.';
          break;
        case 404:
          errorMessage = 'Recurso no encontrado.';
          break;
        case 409:
          errorMessage = 'El usuario ya existe en el sistema.';
          break;
        case 500:
          errorMessage = 'Error interno del servidor.';
          break;
        default:
          errorMessage = `Error ${error.status}: ${
            error.error?.message || 'Error desconocido'
          }`;
      }
    }

    console.error('Error en AuthService:', error);
    return throwError(() => new Error(errorMessage));
  }

  // Interceptor de token (opcional, si usas JWT)
  getAuthorizationHeader(): string | null {
    const user = this.currentUserValue;
    if (user && user.token) {
      return `Bearer ${user.token}`;
    }
    return null;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
