import { Component, OnInit } from '@angular/core';
import {AlumnosService} from "../../services/alumnos.service";
import {ActivatedRoute} from "@angular/router";
import {Alumnos} from "../../models/alumnos";

@Component({
  selector: 'app-alumnodetalle',
  templateUrl: './alumnodetalle.component.html',
  styleUrls: ['./alumnodetalle.component.css']
})
export class AlumnodetalleComponent implements OnInit {

  alumno: Alumnos;
  id: string;
  
  constructor(private activatedRouter: ActivatedRoute, private alumnoService: AlumnosService) {
    this.alumno = new Alumnos();
    
  }

  ngOnInit() {
    this.id = this.alumno._id;
  this.activatedRouter.params.subscribe(params => {
      if (typeof params['id'] !== 'undefined') {
        this.alumno._id = params['id'];
      } else {
        this.alumno._id = '';
      }
    });
    this.getStudent();
  }

  getStudent() {
    console.log("id del alumno   " + this.id)
    this.alumnoService.getAlumno(this.alumno._id)
      .subscribe(res =>{
        this.alumno = res;
      });
    console.log(this.alumno);
  }

}
