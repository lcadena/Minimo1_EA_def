import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alumnos } from "../models/alumnos";
import { Environments } from "./environments"


@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  environment: Environments;
  selectedAlumno: Alumnos; 

  constructor() {
    this.selectedAlumno = new Alumnos("","","","");
    this.environment = new Environments();
   }
   //recoger los datos en http 
   /* ejmplo
   signup(user: User) {
    return this.http.post(this.environment.urlUser + "signup", user)
  }
   */
}
