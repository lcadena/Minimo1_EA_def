import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { StationdetailComponent } from './components/stationdetail/stationdetail.component';
import { BikesComponent } from './components/bikes/bikes.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './components/home/home.module#HomePageModule'},
  { path: 'menu', loadChildren: './components/menu/menu.module#MenuPageModule' },
  { path: 'api/relacion/listaBikes/:id', component: StationdetailComponent},
  { path: 'api/bike/listaBikes', component: BikesComponent},
  { path: 'api/relacion/delete', component: StationdetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
