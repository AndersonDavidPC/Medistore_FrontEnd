export interface Producto {
  id: number;
  marca: string;
  presentacion: string;
  precio_compra: number;
  precio_venta: number;
  registro_invima?: string;
  id_categoria: number;
  nombre?: string;
}