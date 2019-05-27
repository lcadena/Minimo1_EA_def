import { Component, OnInit } from '@angular/core';
import { Bike } from 'src/app/models/bike';
import { Station } from 'src/app/models/station';
import { Router, ActivatedRoute } from '@angular/router';
import { StationService } from 'src/app/services/station.service';
import { BikeService } from 'src/app/services/bike.service';
import { refreshDescendantViews } from '@angular/core/src/render3/instructions';

declare var M: any;
@Component({
  selector: 'app-stationdetail',
  templateUrl: './stationdetail.component.html',
  styleUrls: ['./stationdetail.component.scss'],
})
export class StationdetailComponent implements OnInit {

  stationID: string;
  bikeID: string;
  bikes: Bike[];
  bikeslist: Bike[];
  station: Station;
  constructor(private router: Router, private stationService: StationService, private activatedRoute: ActivatedRoute, private bikeService: BikeService) {
    this.station = new Station('','','','',[]);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (typeof params ['id'] !== 'undefined') {
        this.station._id = params['id'];
      } else {
        this.station._id = '';
      }
    });
    console.log(this.station._id);
    this.getBikesofStation(this.station._id);
    console.log('Id de la station: ' + this.station._id);
    console.log('Bicis de la estación: ' + this.station.bikes);
    this.getUnassignedBikes();
  }

  refresh() {
    this.getBikesofStation(this.stationID);
  }

  getBikesofStation(stationID) {
    this.stationService.getBikesofStation(stationID)
      .subscribe(res => {
        this.bikes = res;
        console.log('Lista de estaciones: ' + this.bikes);
      });
  }

  getUnassignedBikes() {
    this.bikeService.getUnassignedBikes()
      .subscribe(res => {
        this.bikeslist = res;
        console.log('Lista de bicis sin asignar:  ' + this.bikeslist);
      });
  }

  addBike(_id: string) {
    this.bikeID = _id;
    console.log('Añado a la station ' + this.station._id + ' la bike ' + this.bikeID);
    console.log(this.station._id);
    console.log(this.stationID);
    this.stationService.addBike(this.station._id, this.bikeID)
      .subscribe(res => {
        this.getBikesofStation(this.station._id);
        this.getUnassignedBikes();
    });
  }

  deleteBike(_id: string) {
    this.bikeID = _id;
    console.log(this.bikeID);
    console.log('Id de estacion: ' + this.station._id);
    if (confirm ('Are you sure you want to delete it?')) {
      this.stationService.deleteBike(this.station._id, this.bikeID).subscribe(res => {
        this.refresh();
        this.getUnassignedBikes();
      })
    }
  }

}
