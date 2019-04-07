import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { Alumnos } from "../../models/alumnos"
import { AlumnosService } from "../../services/alumnos.service"

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  crearForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private AlumnosService: AlumnosService) { 
    this.crearForm = this.formBuilder.group({
      name: new FormControl(),
      address: new FormControl(),
      home: new FormControl(),
      movil: new FormControl()
    })
  }

  ngOnInit() {
    
  }

  addAlumno() {
    //funcion para añadir un alumno
    console.log("añadir usuario  " + this.crearForm.value);
    let alumno = new Alumnos(this.crearForm.value.name, this.crearForm.value.address, this.crearForm.value.home, this.crearForm.value.movil);
    this.AlumnosService.add(alumno)
      .subscribe( res => {
        if (res == 200){
          console.log("Anadido correctamente");
        }
        else {
          console.log ("Error");
        }
      }

      )
  }
}
