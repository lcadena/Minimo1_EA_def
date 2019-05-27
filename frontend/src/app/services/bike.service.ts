import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Environments } from './environment';
import { Bike } from '../models/bike';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  environment: Environments;

  constructor(private http: HttpClient) {
    this.environment = new Environments();
  }

  getBikes(): Observable<Bike[]> {
    return this.http.get<Bike[]>(this.environment.urlBike + '/listaBikes');
  }

  getUnassignedBikes(): Observable<Bike[]> {
    return this.http.get<Bike[]>(this.environment.urlBike + '/unassigned');
  }
}
