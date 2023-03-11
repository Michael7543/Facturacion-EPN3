import { Component, OnInit } from '@angular/core';
import { EstudianteModel } from '../modules/estudiante.modul';
import { EstudianteHttpservice } from '../services/estudiante-http.service';



@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  estudiante: EstudianteModel[] = [];

  constructor(private estudiantesService: EstudianteHttpservice) {}

  ngOnInit(): void {
    this.getEstudiantes();
  }

  getEstudiantes(){
    this.estudiantesService.getAll().subscribe(response=>{
      this.estudiante = response;
      console.log(this.estudiante)
    })
  }

}
