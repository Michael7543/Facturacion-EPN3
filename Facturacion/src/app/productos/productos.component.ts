import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../modules/producto.modul';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  
  first = 0;

  rows = 5;

  loading: boolean = true;

  products:ProductModel[] = [];


  constructor(private productHttpService: ProductoService) {
  } 

  ngOnInit(): void {
    this.getProducts();
    this.loading = false;
  }

  getProducts() {
    return this.productHttpService.getAll().subscribe((response) => {
      this.products = response;
    });
  }

  next() {
    this.first = this.first + this.rows;
}

prev() {
    this.first = this.first - this.rows;
}

reset() {
    this.first = 0;
}

isLastPage(): boolean {
    return this.products ? this.first === (this.products.length - this.rows): true;
}

isFirstPage(): boolean {
    return this.products ? this.first === 0 : true;
}
}
