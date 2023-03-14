import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { EstudianteModel } from '../modules/estudiante.modul';
import { EstudianteHttpservice } from '../services/estudiante-http.service';



@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css'],
  
})
export class EstudianteComponent implements OnInit {

  cedula! : string;
  fecha! : string;
  id! : string;

  selectedId! : number;

  estudiante: EstudianteModel[] = [];
  

  constructor(private estudiantesService: EstudianteHttpservice) {}

  ngOnInit(): void {
    this.buscardatos;
    this.getEstudiantes();

    
    
    
  }

  buscardatos(cedula: string,fecha:string,id:string) {
    this.estudiantesService
      .getone(cedula,fecha,id)
      .subscribe((response: EstudianteModel[]) => {
        this.estudiante = response;
      });
    console.log(this.estudiante);
  }

  /* getEstudiantes(){
    this.estudiantesService.getAll3().subscribe(response=>{
      this.estudiante = response;
      console.log(this.estudiante)

    })
  } */

  getEstudiantes() {
    const obs1 = this.estudiantesService.getAll1();
    const obs2 = this.estudiantesService.getAll2();
    const obs3 = this.estudiantesService.getAll3();
    const obs4 = this.estudiantesService.getAll4();
    const obs5 = this.estudiantesService.getAll5();
    const obs6 = this.estudiantesService.getAll6();
    const obs7 = this.estudiantesService.getAll7();
    const obs8 = this.estudiantesService.getAll8();
    const obs9 = this.estudiantesService.getAll9();
    const obs10 = this.estudiantesService.getAll10();
    const obs11 = this.estudiantesService.getAll11();
  
  
    forkJoin([obs1, obs2, obs3,obs4,obs5,obs6,obs7,obs8,obs9,obs10,obs11]).subscribe(([res1, res2, res3,res4,res5,res6,res7,res8,res9,res10,res11]) => {
      this.estudiante = [...res1, ...res2, ...res3, ...res4, ...res5, ...res6, ...res7, ...res8, ...res9, ...res10, ...res11];
      console.log(this.estudiante);
    });
  } 
  

  

  getEventValue($event:any) :string {
    return $event.target.value;
  }
  
  /* GetOne(cedula:string){
    this.estudiantesService.getone(cedula).subscribe((response:EstudianteModel[])=>{
      this.estudiante = response;
    })
  } */



  


 




}
