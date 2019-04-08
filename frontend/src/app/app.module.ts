import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { NewasignaturaComponent } from './components/newasignatura/newasignatura.component';
import { MainComponent } from './components/main/main.component';
import { NewalumnoComponent } from './components/newalumno/newalumno.component';
import { AlumnodetalleComponent } from "./components/alumnodetalle/alumnodetalle.component";
import { StationsComponent } from './components/stations/stations.component';
import { BikesComponent } from './components/bikes/bikes.component';
import { NewstationComponent } from './components/newstation/newstation.component';
import { NewbikeComponent } from './components/newbike/newbike.component';
import { BikedetailComponent } from './components/bikedetail/bikedetail.component';


@NgModule({
  declarations: [
    AppComponent,
    AsignaturasComponent,
    AlumnosComponent,
    NewasignaturaComponent,
    MainComponent,
    NewalumnoComponent,
    AlumnodetalleComponent,
    StationsComponent,
    BikesComponent,
    NewstationComponent,
    NewbikeComponent,
    BikedetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
