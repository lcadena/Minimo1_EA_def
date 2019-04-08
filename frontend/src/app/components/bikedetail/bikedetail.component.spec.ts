import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikedetailComponent } from './bikedetail.component';

describe('BikedetailComponent', () => {
  let component: BikedetailComponent;
  let fixture: ComponentFixture<BikedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
