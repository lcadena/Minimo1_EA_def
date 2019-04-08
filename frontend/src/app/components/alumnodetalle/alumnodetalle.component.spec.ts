import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnodetalleComponent } from './alumnodetalle.component';

describe('AlumnodetalleComponent', () => {
  let component: AlumnodetalleComponent;
  let fixture: ComponentFixture<AlumnodetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnodetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnodetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
