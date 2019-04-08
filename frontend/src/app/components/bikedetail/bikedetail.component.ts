import { Component, OnInit } from '@angular/core';
import { Bikes } from 'src/app/models/bikes';
import { ActivatedRoute } from '@angular/router';
import { BikeService } from 'src/app/services/bike.service';

@Component({
  selector: 'app-bikedetail',
  templateUrl: './bikedetail.component.html',
  styleUrls: ['./bikedetail.component.css']
})
export class BikedetailComponent implements OnInit {

  bike: Bikes;
  constructor(private activatedRouter: ActivatedRoute, private bikeService: BikeService) {
    this.bike = new Bikes;
   }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      if (typeof params['id'] !== 'undefined') {
        this.bike._id = params['id'];
      } else {
        this.bike._id = '';
      }
    });
    this.getBikes(this.bike._id)
    }
    
    getBikes(id: string ) {
      console.log("id de bicicleta   " + id)
      this.bikeService.getBike(id)
        .subscribe(res =>{
          this.bike = res;
          console.log (this.bike.name)
    });

  }

}
