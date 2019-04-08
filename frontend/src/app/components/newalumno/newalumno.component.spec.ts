import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewalumnoComponent } from './newalumno.component';

describe('NewalumnoComponent', () => {
  let component: NewalumnoComponent;
  let fixture: ComponentFixture<NewalumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewalumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewalumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
