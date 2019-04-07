import { Component, OnInit } from '@angular/core';
import { AsignaturaService} from "../../services/asignatura.service";
import {Router} from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, NgForm} from "@angular/forms";
import { Asignaturas } from "../../models/asignaturas"

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {
lista: Asignaturas[];
asignaturaId: string;
detallesForm: FormGroup;
asignatura: Asignaturas; 

  constructor(private router: Router, private formBuilder: FormBuilder, private asignaturaService: AsignaturaService){

  }
  ngOnInit() {
   this.listaAsignaturas
  }

  listaAsignaturas(){
    console.log ("lista de asignaturas")
    this.asignaturaService.getAsignaturas()
    .subscribe( res =>{
      this.lista = res;
    });
  }

  asignaturadetalle(){
    console.log("detalles de la asignatura")
    this.asignaturaId = this.detallesForm.value.asignaturaId;
    this.asignaturaService.getAsignatura(this.asignaturaId).subscribe(
      res => {
        console.log(res)
        this.asignatura = res 
      });

  }
 

 
}