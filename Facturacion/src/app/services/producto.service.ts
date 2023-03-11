import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../modules/producto.modul';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  readonly API_URL:string="https://api.escuelajs.co/api/v1/products";
  constructor(private httpClient: HttpClient) { }

  getAll():Observable<ProductModel[]>{
    return this.httpClient.get<ProductModel[]>(this.API_URL);
   }

}
