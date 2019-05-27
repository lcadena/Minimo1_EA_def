import { Component, OnInit } from '@angular/core';
import { Bike } from 'src/app/models/bike';
import { BikeService } from 'src/app/services/bike.service';
import { Router } from '@angular/router';
import { NgModule} from '@angular/core';


@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.scss'],
})
export class BikesComponent implements OnInit {

  listaoriginal: Bike[];
  bikes: Bike[];
  searchTerm: string = '';
  constructor(private bikeService: BikeService, private router: Router) { }

  ngOnInit() {
    this.getBikes();
  }

  refresh() {
    this.getBikes();
  }

  getBikes() {
    this.bikeService.getBikes()
      .subscribe(res => {
        this.bikes = res;
        console.log('lista de estaciones: ' + this.bikes);
      });
  }

  filterItems(searchTerm) {
    console.log(searchTerm);
    var filtered = this.bikes.filter(item => {
      return item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
    if(this.searchTerm === '') {
      this.bikes = this.listaoriginal;
    } else {
      this.bikes = filtered;
    }
  }

}
