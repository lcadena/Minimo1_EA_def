import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {AlumnosService} from "../../services/alumnos.service";
import {Alumnos} from "../../models/alumnos";

@Component({
  selector: 'app-newalumno',
  templateUrl: './newalumno.component.html',
  styleUrls: ['./newalumno.component.css']
})
export class NewalumnoComponent implements OnInit {

  newalumnoForm: FormGroup;

  validation_messages: any;

  constructor(private newalumnoService: AlumnosService,
              private router: Router, private formBuilder: FormBuilder) {

    this.newalumnoForm = this.formBuilder.group({
        name: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern(/.{1,40}$/)])),
        address: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern(/.{1,100}$/)])),
        homePhone: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern(/^((?!(0))[0-9]{9})$/)])),
        mobilePhone: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern(/^((?!(0))[0-9]{9})$/)])),
      }
    )
  }

  ngOnInit() {
    this.validation_messages = {
      'name': [
        { type: 'required', message: 'Name is required'},
        { type: 'pattern', message: 'It has to be between 1 and 40 characters long'}
      ],
      'address': [
        { type: 'required', message: 'Address is required'},
        { type: 'pattern', message: 'It has to be between 1 and 100 characters long'}
      ],
      'homePhone': [
        { type: 'required', message: 'Home phone is required'},
        { type: 'pattern', message: 'It can not begin by a 0 and has to be 9 digits long'}
      ],
      'mobilePhone': [
        { type: 'required', message: 'Name is required'},
        { type: 'pattern', message: 'It has to be between 1 and 20 characters long'}
      ]
    }
  }

  addAlumno() {
    console.log(this.newalumnoForm.value);
    let alumno = new Alumnos();
    alumno._id = "";
    alumno.name = this.newalumnoForm.value.name;
    alumno.address = this.newalumnoForm.value.address;
    alumno.phone = this.newalumnoForm.value.homePhone; //no envia bien el array
   // alumno.phone = this.newalumnoForm.value.mobilePhone;

    this.newalumnoService.addAlumno(alumno)
      .subscribe(
        res => {
          console.log(res);
          let token = res['token'];
          localStorage.setItem('token', token);

          this.router.navigateByUrl("");
        },

        err => {
          console.log(err);
          this.handleError(err);
        });

  }

  private handleError(err: HttpErrorResponse) {
    if( err.status == 500 ) {
      alert(err);
    } else if ( err.status == 404 ) {
      alert('404 not found');
    }

  }
}
