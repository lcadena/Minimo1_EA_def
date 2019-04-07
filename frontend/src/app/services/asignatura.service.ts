import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asignaturas } from "../models/asignaturas";
import { Environments } from "./environments"
import {Observable} from "rxjs";

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

  getAsignatura() :Observable<Asignaturas[]> {
    return this.http.get<Asignaturas[]>(this.environment.urlAsignaturas)
  }
}
