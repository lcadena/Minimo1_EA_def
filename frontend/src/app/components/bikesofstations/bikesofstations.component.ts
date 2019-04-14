import { Component, OnInit } from '@angular/core';
import { StationService } from 'src/app/services/station.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Bikes } from 'src/app/models/bikes';
import { stringify } from '@angular/core/src/render3/util';
import { BikeService } from 'src/app/services/bike.service';
import { Stations } from 'src/app/models/stations';


@Component({
  selector: 'app-bikesofstations',
  templateUrl: './bikesofstations.component.html',
  styleUrls: ['./bikesofstations.component.css']
})
export class BikesofstationsComponent implements OnInit {

  public href: string = "";
  stationID: string;
  bikeID: string;
  station: Stations;
  bikes2: Bikes[];
  bikes3: Bikes[];

  constructor(private router: Router, private stationService: StationService, private bikeservice: BikeService, private activatedRouter: ActivatedRoute) {
    this.station = new Stations();
   }

  
  
  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      if (typeof params ['id'] !== 'undefined') {
        this.station._id = params['id'];
      } else {
        this.station._id = ''
      }
    });
    this.getBikesOfStations(this.station._id);
    console.log('Id de la station' + this.station._id)
    console.log('Bicis de la estación' + this.station.bikes)
    this.getUnassignedBikes2();
  }

  getBikesOfStations(stationID) {
    this.stationService.getBikesOfStation(stationID)
      .subscribe(res => {
        this.bikes2 = res
        console.log("lista de estaciones2  " + this.bikes2)
      });
  }

  getUnassignedBikes2() {
    this.bikeservice.getUnassignedBikes()
      .subscribe(res => {
        this.bikes3 = res
        console.log("lista de bicis sin asignar  " + this.bikes3)
      });
  }

  addBike(_id: string) {
    this.bikeID = _id;
    console.log('Añado a la station ' + this.station._id + ' la bike ' + this.bikeID)

    this.stationService.addBike(this.stationID, this.bikeID)
      .subscribe(res => {
        this.getBikesOfStations(this.stationID);
        this.getUnassignedBikes2();
      })

  }


}
