import { Component, OnInit } from '@angular/core';
import { StationService } from 'src/app/services/station.service';
import { Router } from '@angular/router';
import { Stations } from 'src/app/models/stations';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {

  constructor(private stationService: StationService, private router: Router) {

  }

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

}
