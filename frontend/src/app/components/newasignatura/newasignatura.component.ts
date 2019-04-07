import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AsignaturaService} from "../../services/asignatura.service";
import {Asignaturas} from "../../models/asignaturas";


@Component({
  selector: 'app-newasignatura',
  templateUrl: './newasignatura.component.html',
  styleUrls: ['./newasignatura.component.css']
})
export class NewasignaturaComponent implements OnInit {

  newasignaturaForm: FormGroup;

  validation_messages: any;

  constructor(private newasignaturaService: AsignaturaService,
              private router: Router, private formBuilder: FormBuilder) {

    this.newasignaturaForm = this.formBuilder.group({
        name: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern(/.{1,20}$/)])),
      }
    )
  }

  ngOnInit() {
    this.validation_messages = {
      'name': [
        { type: 'required', message: 'Name is required'},
        { type: 'pattern', message: 'It has to be between 1 and 20 characters long'}
      ]
    }
  }

  addAsignatura() {
    console.log(this.newasignaturaForm.value);
    let asignatura = new Asignaturas();
    asignatura._id = "";
    asignatura.name = this.newasignaturaForm.value.name;
    asignatura.alumnos = "";

    this.newasignaturaService.addAsignatura(asignatura)
      .subscribe(
        res => {
          console.log(res);
          let token = res['token'];
          localStorage.setItem('token', token);

          this.router.navigateByUrl("api/add_alumno");
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
