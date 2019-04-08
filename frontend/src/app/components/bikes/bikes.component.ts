import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/services/bike.service';
import { Router } from '@angular/router';
import { Bikes } from 'src/app/models/bikes';
import { NgForm } from '@angular/forms';
declare var M: any

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  constructor(private bikeService: BikeService, private router: Router) {

   }

  bikes: Bikes[];
  ngOnInit() {
    this.getBikes();
  }
  getBikes() {
    this.bikeService.getBikes()
      .subscribe(res => {
        this.bikes = res
        console.log("lista de estaciones  " + this.bikes)
      });
  }

  deleteBike(_id: string){
    if(confirm ('Are you sure you want to delete it?')) {
      this.bikeService.deleteBike(_id)
      //ver respuesta del server
      .subscribe(res => {
        console.log(res)  
        this.getBikes()
        M.toast({html: 'Deleted successfully'})
      })
    }
  }
}
