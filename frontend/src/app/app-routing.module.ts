import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBikeComponent } from './components/add-bike/add-bike.component';
import { DeleteBikeComponent } from './components/delete-bike/delete-bike.component';
import { StationsComponent } from './components/stations/stations.component';
import { BikesComponent } from './components/bikes/bikes.component';
import { BikesofstationsComponent } from './components/bikesofstations/bikesofstations.component';

const routes: Routes = [

  {path: 'api/station', component: StationsComponent},
  {path: 'api/station/stationDetail', component: StationsComponent},
  {path: 'api/stations/stationsList', component: StationsComponent},
  {path: 'api/bike/listaBikes', component: BikesComponent},
  {path: 'api/bike/delete', component: BikesComponent},
  {path: 'api/relacion/add', component: AddBikeComponent},
  {path: 'api/relacion/listaBikes/:stationId', component: BikesofstationsComponent},
  {path: 'api/relacion/delete', component: DeleteBikeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
