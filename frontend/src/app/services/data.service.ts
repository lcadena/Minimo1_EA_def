import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  //Clase per intercambiar el SubjectId entre els components
  //main i subjectdetail.

  private originalAsignaturaId = new BehaviorSubject("0");
  clickedAsignaturaId = this.originalAsignaturaId.asObservable()


  private originalAlumnoId = new BehaviorSubject("0");
  clickedAlumnoId = this.originalAlumnoId.asObservable()

  constructor() { }

  changeSubjectId(id: string) {
    this.originalAsignaturaId.next(id)
  }

  changeStudentId(id: string) {
    this.originalAlumnoId.next(id)
  }


}

