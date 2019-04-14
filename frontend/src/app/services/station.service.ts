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
  enviroment: Environments;
  selectedBike: Stations;
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

  /*addBike(placeId: string, bikeId:string) {
    return this.http.put(this.enviroment.urlRelacion + "/add", placeId + bikeId);

  }*/

  getBikesOfStation(_id: string): Observable<Bikes[]> {
    return this.http.get<Bikes[]>(this.enviroment.urlRelacion + "/listaBikes/" + _id)
  }
  
  deleteBike(placeId: string, bikeId: string) {
    return this.http.delete(this.enviroment.urlRelacion +"/delete"+ `/${placeId}` + `/${bikeId}`);  
  }

  addBike(stationID: string, bikeID: string) {
    return this.http.put(this.enviroment.urlRelacion + `/${stationID}` + `/${bikeID}`, {stationID, bikeID} )
  }


}
