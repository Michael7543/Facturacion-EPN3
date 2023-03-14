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
   'http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/${cedula}/2022/2';

  readonly URL_API1: string =
   'http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/0101827806/2022/2';

  readonly URL_API2: string =
   'http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/0502951403/2022/2';

  readonly URL_API3: string =
   'http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/1725022329/2022/2';

  readonly URL_API4: string =
   'http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/1712622164/2022/2';

  readonly URL_API5: string =
   'http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/1802467793/2022/2';

  readonly URL_API6: string =
   'http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/1719387852/2022/2';

  readonly URL_API7: string =
   'http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/1717677007/2022/2';

  readonly URL_API8: string =
   'http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/1756943757/2022/2';

  readonly URL_API9: string =
   'http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/0703844696/2022/2';

  readonly URL_API10: string =
   'http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/0102007176/2022/2';

  readonly URL_API11: string =
   'http://172.31.5.24:8080/WSSIIEPN/webresources/SilaboEPN/carga/1706280243/2022/2';


  





  getAll1(): Observable<EstudianteModel[]> {
    return this.httpClient.get<EstudianteModel[]>(this.URL_API1);
  }
  getAll2(): Observable<EstudianteModel[]> {
    return this.httpClient.get<EstudianteModel[]>(this.URL_API2);
  }
  getAll3(): Observable<EstudianteModel[]> {
    return this.httpClient.get<EstudianteModel[]>(this.URL_API3);
  }
  getAll4(): Observable<EstudianteModel[]> {
    return this.httpClient.get<EstudianteModel[]>(this.URL_API4);
  }
  getAll5(): Observable<EstudianteModel[]> {
    return this.httpClient.get<EstudianteModel[]>(this.URL_API5);
  }
  getAll6(): Observable<EstudianteModel[]> {
    return this.httpClient.get<EstudianteModel[]>(this.URL_API6);
  }
  getAll7(): Observable<EstudianteModel[]> {
    return this.httpClient.get<EstudianteModel[]>(this.URL_API7);
  }
  getAll8(): Observable<EstudianteModel[]> {
    return this.httpClient.get<EstudianteModel[]>(this.URL_API8);
  }
  getAll9(): Observable<EstudianteModel[]> {
    return this.httpClient.get<EstudianteModel[]>(this.URL_API9);
  }
  getAll10(): Observable<EstudianteModel[]> {
    return this.httpClient.get<EstudianteModel[]>(this.URL_API10);
  }
  getAll11(): Observable<EstudianteModel[]> {
    return this.httpClient.get<EstudianteModel[]>(this.URL_API11);
  }


  

/*   getAll3(): Observable<EstudianteModel[]> {
    const obs1 = this.httpClient.get<EstudianteModel[]>(this.URL_API);
    const obs2 = this.httpClient.get<EstudianteModel[]>(this.URL_API2);
    const obs3 = this.httpClient.get<EstudianteModel[]>(this.URL_API3);
    
  
    return forkJoin([obs1, obs2,obs3]).pipe(
      map(([res1, res2]) => {
        const combinedResult = [...res1, ...res2];
        return combinedResult;
      })
    );
  }  */



  getone(cedula:string): Observable<EstudianteModel[]>{
    return this.httpClient.get<EstudianteModel[]>(this.URL_API.replace('${cedula}',cedula))
  }



}

