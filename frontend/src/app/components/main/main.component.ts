import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private newstationService: StationService,
              private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
