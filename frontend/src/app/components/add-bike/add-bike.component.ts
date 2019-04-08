import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/services/bike.service';
import { Bikes } from 'src/app/models/bikes';

@Component({
  selector: 'app-add-bike',
  templateUrl: './add-bike.component.html',
  styleUrls: ['./add-bike.component.css']
})
export class AddBikeComponent implements OnInit {

  constructor( private bikeService: BikeService, ) {

   }

  bikes: Bikes[]
  ngOnInit() {
    this.getBikes()
  }

  getBikes(){
    this.bikeService.getBikes().subscribe(res => {
      this.bikes = res
      console.log('lista de bicicletas  ' + this.bikes)
    })
  }

  addBikes() {

  }

  deleteBikes(){

  }
}
