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

  estudiante: EstudianteModel[] = [];
  

  constructor(private estudiantesService: EstudianteHttpservice) {}

  ngOnInit(): void {
    this.cargardatos;
    this.getEstudiantes2();

    
    
    
  }

  cargardatos(cedula: string) {
    this.estudiantesService
      .getone(cedula)
      .subscribe((response: EstudianteModel[]) => {
        this.estudiante = response;
      });
    console.log(this.estudiante);
  }

  getEstudiantes(){
    this.estudiantesService.getAll3().subscribe(response=>{
      this.estudiante = response;
      console.log(this.estudiante)

    })
  }
  getEstudiantes2() {
    const obs1 = this.estudiantesService.getAll();
    const obs2 = this.estudiantesService.getAll2();
    const obs3 = this.estudiantesService.getAll3();
    const obs4 = this.estudiantesService.getAll4();
  
  
    forkJoin([obs1, obs2, obs3,obs4]).subscribe(([res1, res2, res3,res4]) => {
      this.estudiante = [...res1, ...res2, ...res3, ...res4];
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
