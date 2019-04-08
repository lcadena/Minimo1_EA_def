import { Injectable } from '@angular/core';
import { Environments } from './environments';
import { Stations } from '../models/stations';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Bikes } from '../models/bikes';

@Injectable({
  providedIn: 'root'
})
export class StationService {
  enviroment: Environments
  selectedBike: Stations
  currentId = new BehaviorSubject(null);

  constructor(private http: HttpClient) { 
    //this.selectedBike = new Stations("","","")
    this.enviroment = new Environments()

  }

  getStationById( ) {
     
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

  getBikesOfStation(stationId: string) {
    return this.http.get(this.enviroment.urlRelacion + "/listaBikes" + `/${stationId}`)
  }
  
  deleteBike(placeId: string, bikeId: string) {
    return this.http.delete(this.enviroment.urlRelacion +"/delete"+ `/${placeId}` + `/${bikeId}`);  
  }

  public setCurrentStation(stationId) : BehaviorSubject<Stations>{
    this.currentId.next(stationId);
    return stationId;
  }


}
