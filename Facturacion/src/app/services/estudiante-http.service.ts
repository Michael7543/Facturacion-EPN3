import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';
import { EstudianteModel } from '../modules/estudiante.modul';

@Injectable({
  providedIn: 'root'
})
export class EstudianteHttpservice {
  
  constructor(private httpClient: HttpClient) {}

  estudiante: EstudianteModel[] = [];

  readonly URL_API: string =
   'http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/0501553408/2022/2';

  readonly URL_API2: string =
   'http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/1719387852/2022/2';

  readonly URL_API3: string =
   'http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/0102007176/2022/2';

  readonly URL_API4: string =
   'http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/0102007176/2022/2';

  readonly URL_API5: string =
   'http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/0101827806/2022/2';


  




  readonly apiUrls = ['http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/0501553408/2022/2', 'http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/1719387852/2022/2'];


  

  getAll(): Observable<EstudianteModel[]> {
    return this.httpClient.get<EstudianteModel[]>(this.URL_API);
  }
  getAll2(): Observable<EstudianteModel[]> {
    return this.httpClient.get<EstudianteModel[]>(this.URL_API2);
  }
  getAll4(): Observable<EstudianteModel[]> {
    return this.httpClient.get<EstudianteModel[]>(this.URL_API4);
  }
  getAll5(): Observable<EstudianteModel[]> {
    return this.httpClient.get<EstudianteModel[]>(this.URL_API5);
  }

  

  getAll3(): Observable<EstudianteModel[]> {
    const obs1 = this.httpClient.get<EstudianteModel[]>(this.URL_API);
    const obs2 = this.httpClient.get<EstudianteModel[]>(this.URL_API2);
    const obs3 = this.httpClient.get<EstudianteModel[]>(this.URL_API3);
    
  
    return forkJoin([obs1, obs2,obs3]).pipe(
      map(([res1, res2]) => {
        const combinedResult = [...res1, ...res2];
        return combinedResult;
      })
    );
  }



}

