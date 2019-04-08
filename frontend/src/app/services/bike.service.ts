import { Injectable } from '@angular/core';
import { Environments } from './environments';
import { Bikes } from '../models/bikes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  environment: Environments;
  seletedBike: Bikes;

  constructor( private http: HttpClient) {
    this.seletedBike= new Bikes("","","","");
    this.environment = new Environments();
   }
     //Añade alumno
     addBike(bike: Bikes) {
      return this.http.post(this.environment.urlBike + "/nuevo", bike)
    }
  
    //Me devuelve una lista de los Alumnos
     getBikes():Observable<Bikes[]> { //tengo que recibir el tipo User para que me haga bien la lista
      return this.http.get<Bikes[]>(this.environment.urlBike + "/listaBikes");
    }

    deleteBike(_id: string) {
      return this.http.delete(this.environment.urlBike + "/delete" + `/${_id}`)

    }
  
    getBikeId(id: string):Observable<Bikes> {
      return this.http.get<Bikes>(this.environment.urlBike + `/${id}`);
  }
}
