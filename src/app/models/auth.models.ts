export interface LoginRequest {
  nombre_usuario: string;
  clave: string;
  userType: 'admin' | 'regente' | 'coordinador';
}

export interface RegisterRequest {
  cedula: number;
  nombre: string;
  nombre_usuario: string;
  clave: string;
  userType: 'regente' | 'coordinador';
}

export interface User {
  cedula: number;
  nombre: string;
  apellido: string;
  email: string;
  userType: string;
  token?: string; // Add the token property
  // Add other properties as needed
}