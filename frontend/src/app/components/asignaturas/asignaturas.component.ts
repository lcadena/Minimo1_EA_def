import { Component, OnInit } from '@angular/core';
import { AsignaturaService} from "../../services/asignatura.service";
import {Router} from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, NgForm} from "@angular/forms";
import { Asignaturas } from "../../models/asignaturas"
import {AlumnosService} from "../../services/alumnos.service";
import {Alumnos} from "../../models/alumnos";

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {

  constructor(private asignaturaService: AsignaturaService, private router: Router) {

  }

  asignaturas: Asignaturas[];

  ngOnInit() {
    this.getSubjects();
  }

  getSubjects(){
    this.asignaturaService.getAsignaturas()
      .subscribe(res =>{
        this.asignaturas = res; //res me recibe la lista de users
      });
  }

  /**
   *
   * @param id
   */
  confirmDelete(id: string, i: number) {
    if(confirm('El alumno se borrará')){
      this.asignaturaService.deleteAsignatura(id)
        .subscribe(
          res =>{
            console.log(res);
            console.log("Se ha borrado correctamente ", i);
            //this.getStudents();

            //Two way data binding!
            this.asignaturas.splice(i,1);
            console.log("Se ha borrado correctamente ", this.asignaturas);

          },
          err => {
            this.handleError(err);
          });
    }
  }

  /**
   *
   * @param err
   */
  private handleError(err: HttpErrorResponse) {
    if( err.status == 500 ) {
      alert(err);
    }
  }






  /*lista: Asignaturas[];
asignaturaId: string;
detallesForm: FormGroup;
detalle: Asignaturas; 

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
        this.detalle = res 
      });

  }*/
 

 
}
