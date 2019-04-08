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

  constructor(private activatedRouter: ActivatedRoute, private alumnoService: AlumnosService) {
    this.alumno = new Alumnos();
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      if (typeof params['id'] !== 'undefined') {
        this.alumno._id = params['id'];
      } else {
        this.alumno._id = '';
      }
    });
    this.getStudent(this.alumno._id);
  }

  getStudent(id: string) {
    this.alumnoService.getAlumno(id)
      .subscribe(res =>{
        this.alumno = res["alumno"];
      });
    console.log(this.alumno);
  }

}
