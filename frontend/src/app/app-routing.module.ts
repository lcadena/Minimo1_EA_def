import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { MainComponent } from "./components/main/main.component";
import {NewasignaturaComponent} from "./components/newasignatura/newasignatura.component";

const routes: Routes = [
  {path: 'api/asignaturas', component: AsignaturasComponent},
  {path: 'api/asignaturas/:id', component: AsignaturasComponent},
  {path: 'api/asignatura/:id', component: AsignaturasComponent},
  {path: 'api/alumno/:id', component: AlumnosComponent},

  {path: '', component: MainComponent, pathMatch: 'full'},
  {path: 'api/add_alumno', component: AlumnosComponent},
  {path: 'api/add_subject', component: NewasignaturaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
