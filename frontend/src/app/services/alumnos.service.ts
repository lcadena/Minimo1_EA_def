import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Alumnos } from "../models/alumnos";
import { Environments } from "./environments"


@Injectable({
  providedIn: 'root'
})
export class AlumnosService {  
  environment: Environments;
  selectedAlumno: Alumnos; 

  constructor( private http: HttpClient) {
    this.selectedAlumno = new Alumnos("","","","");
    this.environment = new Environments();
   }
   //recoger los datos en http 
   
   add(alumno: Alumnos) {
    return this.http.post(this.environment.urlAlumno, alumno)
  }
   
}
