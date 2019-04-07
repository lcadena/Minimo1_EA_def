import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';


const routes: Routes = [
  {path: 'api/asignaturas', component: AsignaturasComponent},
  {path: 'api/asignaturas/:id', component: AsignaturasComponent},
  {path: 'api/asignatura/:id', component: AsignaturasComponent},
  {path: 'api/alumno', component: AlumnosComponent},
  {path: 'api/alumno/:id', component: AlumnosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
