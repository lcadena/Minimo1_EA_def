import { Component, OnInit } from '@angular/core';
import { StationService } from 'src/app/services/station.service';
import { Router } from '@angular/router';
import { Bikes } from 'src/app/models/bikes';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-bikesofstations',
  templateUrl: './bikesofstations.component.html',
  styleUrls: ['./bikesofstations.component.css']
})
export class BikesofstationsComponent implements OnInit {

  constructor(private stationService: StationService, private router: Router) { }

  stationId: string
  bikesStations: Object
  ngOnInit() {
    this.getBikesOfStations(this.stationId)
  }

  getBikesOfStations(stationId) {
    this.stationService.getBikesOfStation(stationId)
      .subscribe(res => {
        this.bikesStations = res
        console.log("lista de estaciones2  " + this.bikesStations)
      });
  }

}
