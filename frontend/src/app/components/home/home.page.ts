import { Component, OnInit } from '@angular/core';
import { StationService } from 'src/app/services/station.service';
import { Router } from '@angular/router';
import { Station } from 'src/app/models/station';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  stations: Station[];
  constructor(private stationService: StationService, private router: Router) {

  }

  ngOnInit() {
    this.stationList();
  }

  stationList() {
    this.stationService.getStations()
      .subscribe(res => {
        this.stations = res;
        console.log('Lista de estaciones:  ' + this.stations);
      });
  }
}
