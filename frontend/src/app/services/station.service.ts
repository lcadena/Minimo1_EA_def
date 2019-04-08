import { Injectable } from '@angular/core';
import { Environments } from './environments';
import { Stations } from '../models/stations';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StationService {
  enviroment: Environments
  selectedBike: Stations

  constructor(private http: HttpClient) { 
    //this.selectedBike = new Stations("","","")
    this.enviroment = new Environments()

  }

  addStation(station: Stations){
    return this.http.post(this.enviroment.urlStation + "/nueva", station)
  }

  getStations() :Observable<Stations[]> {
    return this.http.get<Stations[]>(this.enviroment.urlStation + "/stationsList")
  }

  addBike(placeId: string, bikeId:string) {
    return this.http.put(this.enviroment.urlRelacion + "/add", placeId + bikeId);

  }
  
  deleteBike(placeId: string, bikeId: string) {
    return this.http.delete(this.enviroment.urlRelacion +"/delete"+ `/${placeId}` + `/${bikeId}`);  
}


}
