import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { EstudianteModel } from '../modules/estudiante.modul';

@Injectable({
  providedIn: 'root'
})
export class EstudianteHttpservice{

  readonly URL_API: string =
   'http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/0703844696/2022/1';

  constructor(private httClient: HttpClient) {}

  getAll(): Observable<EstudianteModel[]> {
    return this.httClient.get<EstudianteModel[]>(this.URL_API);
  }

}

