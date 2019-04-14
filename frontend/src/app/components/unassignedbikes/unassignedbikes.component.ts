import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/services/bike.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { Bikes } from 'src/app/models/bikes';

@Component({
  selector: 'app-unassignedbikes',
  templateUrl: './unassignedbikes.component.html',
  styleUrls: ['./unassignedbikes.component.css']
})
export class UnassignedbikesComponent implements OnInit {

  constructor(private bikeService: BikeService, private router: Router) { }

  unbikes: Bikes[];
  ngOnInit() {
    this.getUnassignedBikes();
  }

  getUnassignedBikes() {
    this.bikeService.getUnassignedBikes()
      .subscribe(res => {
        this.unbikes = res
        console.log("lista de bicis sin asignar  " + this.unbikes)
      });
  }

}
