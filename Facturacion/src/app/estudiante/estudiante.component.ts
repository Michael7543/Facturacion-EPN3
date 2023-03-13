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

  

  estudiante: EstudianteModel[] = [];

  constructor(private estudiantesService: EstudianteHttpservice) {}

  ngOnInit(): void {
    this.getEstudiantes2();

    
    
    
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
    const obs5 = this.estudiantesService.getAll5();
  
    forkJoin([obs1, obs2, obs3,obs4,obs5]).subscribe(([res1, res2, res3,res4,res5]) => {
      this.estudiante = [...res1, ...res2, ...res3, ...res4, ...res5];
      console.log(this.estudiante);
    });
  }

  

  getEventValue($event:any) :string {
    return $event.target.value;
  }
  

  
  


 




}
