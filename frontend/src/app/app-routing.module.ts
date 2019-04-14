import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StationsComponent } from './components/stations/stations.component';
import { BikesComponent } from './components/bikes/bikes.component';
import { BikesofstationsComponent } from './components/bikesofstations/bikesofstations.component';
import { UnassignedbikesComponent } from './components/unassignedbikes/unassignedbikes.component';

const routes: Routes = [

  {path: 'api/station', component: StationsComponent},
  {path: 'api/station/stationDetail', component: StationsComponent},
  {path: 'api/stations/stationsList', component: StationsComponent},
  {path: 'api/bike/listaBikes', component: BikesComponent},
  {path: 'api/bike/unassigned', component: UnassignedbikesComponent},
  {path: 'api/bike/delete', component: BikesComponent},
  {path: 'api/relacion', component: BikesComponent},
  {path: 'api/relacion/listaBikes/:id', component: BikesofstationsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
