import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asignaturas } from "../models/asignaturas";
import { Environments } from "./environments"
import { Observable } from "rxjs";
import {Alumnos} from "../models/alumnos";

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {
  environment: Environments;
  selectedAlumno: Asignaturas; 

  constructor( private http: HttpClient) { 
    this.selectedAlumno = new Asignaturas("","","");
    this.environment = new Environments();
  }

  addAsignatura(asignatura: Asignaturas) {
    return this.http.post(this.environment.urlMinimo + "asignaturas" , asignatura)
  }

  getAsignaturas() :Observable<Asignaturas[]> {
    return this.http.get<Asignaturas[]>(this.environment.urlAsignaturas);
  }

  getAsignatura(_id: string) :Observable<Asignaturas> {
    return this.http.get<Asignaturas>(this.environment.urlAsignaturas + `/${_id}`);
  }

}
