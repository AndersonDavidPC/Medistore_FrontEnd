import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductListComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.getProductos().subscribe((data) => {
      this.productos = data;
    });
  }
}