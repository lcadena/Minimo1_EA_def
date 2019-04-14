import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StationsComponent } from './components/stations/stations.component';
import { BikesComponent } from './components/bikes/bikes.component';
import { BikesofstationsComponent } from './components/bikesofstations/bikesofstations.component';
import { UnassignedbikesComponent } from './components/unassignedbikes/unassignedbikes.component';


@NgModule({
  declarations: [
    AppComponent,
    StationsComponent,
    BikesComponent,
    BikesofstationsComponent,
    UnassignedbikesComponent
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
