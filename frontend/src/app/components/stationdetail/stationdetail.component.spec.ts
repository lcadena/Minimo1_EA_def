import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationdetailComponent } from './stationdetail.component';

describe('StationdetailComponent', () => {
  let component: StationdetailComponent;
  let fixture: ComponentFixture<StationdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
