import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import { AlumnosService } from "../../services/alumnos.service"
import { Alumnos } from "../../models/alumnos"

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  constructor(private alumnosService: AlumnosService, private router: Router) {

  }

  alumnos: Alumnos[];

  ngOnInit() {
    this.getStudents();
  }

  getStudents(){
    this.alumnosService.getAlumnos()
      .subscribe(res =>{
        this.alumnos = res 
         console.log("lista de usuarios  " + res )//res me recibe la lista de users
      });
  }

  /**
   *
   * @param id
   */
  confirmDelete(id: string, i: number) {
    if(confirm('El alumno se borrará')){
      this.alumnosService.deleteAlumno(id)
        .subscribe(
          res =>{
            console.log(res);
            console.log("Se ha borrado correctamente ", i);
            //this.getStudents();

            //Two way data binding!
            this.alumnos.splice(i,1);
            console.log("Se ha borrado correctamente ", this.alumnos);

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

}
