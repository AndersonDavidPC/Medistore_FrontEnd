export interface BaseUser {
  cedula: number;
  nombre: string;
  nombre_usuario: string;
  clave: string;
}

export interface Admin extends BaseUser {
  userType: 'admin';
}

export interface Regente extends BaseUser {
  userType: 'regente';
  activo: boolean;
}

export interface Coordinador extends BaseUser {
  userType: 'coordinador';
  activo: boolean;
}

export type User = Admin | Regente | Coordinador;
