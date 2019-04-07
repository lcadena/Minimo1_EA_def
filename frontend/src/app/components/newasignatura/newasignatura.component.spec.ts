import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewasignaturaComponent } from './newasignatura.component';

describe('NewasignaturaComponent', () => {
  let component: NewasignaturaComponent;
  let fixture: ComponentFixture<NewasignaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewasignaturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewasignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
