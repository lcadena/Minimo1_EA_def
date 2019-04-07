import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { Asignaturas } from "../../models/asignaturas"
import { AsignaturaService } from "../../services/asignatura.service"


@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {

  
  constructor(private router: Router, private AsignaturaService: AsignaturaService) { }
  
  list: Asignaturas[];
  ngOnInit() {
    this.getAsignatura();
  }

  //listar asignaturas
  getAsignatura(){
    this.AsignaturaService.getAsignatura()
    .subscribe(res => {
        console.log(res)        
        this.list = res  
      });
  }
  //ver en detalle una asignatura

  //ver alumno de una asignatura

  //añadir alumno en asignatura
}
