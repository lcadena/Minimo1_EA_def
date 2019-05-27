import { Injectable } from '@angular/core';
import { Environments } from './environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Station } from '../models/station';
import { Bike } from '../models/bike';

@Injectable({
  providedIn: 'root'
})
export class StationService {
  environment: Environments;

  constructor(private http: HttpClient) {
    this.environment = new Environments();
  }

  getStations(): Observable<Station[]> {
    console.log('Station service');
    return this.http.get<Station[]>(this.environment.urlStation + '/stationsList');
  }

  getBikesofStation(_id: string): Observable<Bike[]> {
    return this.http.get<Bike[]>(this.environment.urlRelacion + '/listaBikes/' + _id);
  }

  addBike(stationID: string, bikeID: string) {
    return this.http.put(this.environment.urlRelacion + `/${stationID}` + `/${bikeID}`, {stationID, bikeID});
  }

  deleteBike(stationID: string, bikeID: string) {
    return this.http.delete(this.environment.urlRelacion + '/delete' + `/${stationID}` + `/${bikeID}`);
  }
}
