import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asignaturas } from "../models/asignaturas";
import { Environments } from "./environments"

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {
  environment: Environments;
  selectedAlumno: Asignaturas; 

  constructor() { 
    this.selectedAlumno = new Asignaturas("","","");
    this.environment = new Environments();
  }
}
