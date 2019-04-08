import { Component, OnInit } from '@angular/core';
import { StationService } from 'src/app/services/station.service';
import { Router } from '@angular/router';
import { Stations } from 'src/app/models/stations';
import { Bikes } from 'src/app/models/bikes';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {

  constructor(private stationService: StationService, private router: Router) {

  }
  
  stationId: string;
  bikesStation: Object;
  stations: Stations[];
  ngOnInit() {
    this.getStations();
  }

  getStations() {
    this.stationService.getStations()
      .subscribe(res => {
        this.stations = res
        console.log("lista de estaciones  " + this.stations)
      });
  }

  getBikesOfStation(stationId) {
    this.stationService.getBikesOfStation(stationId)
      .subscribe(res => {
        this.bikesStation = res
        console.log("lista de bicis de una estación  " + this.bikesStation)
      })

  }

}
