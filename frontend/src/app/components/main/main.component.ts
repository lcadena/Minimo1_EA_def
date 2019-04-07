import { Component, OnInit } from '@angular/core';
import {AsignaturaService} from "../../services/asignatura.service";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private newasignaturaService: AsignaturaService,
              private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
