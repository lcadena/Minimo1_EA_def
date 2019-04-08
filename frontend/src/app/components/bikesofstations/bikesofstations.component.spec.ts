import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesofstationsComponent } from './bikesofstations.component';

describe('BikesofstationsComponent', () => {
  let component: BikesofstationsComponent;
  let fixture: ComponentFixture<BikesofstationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikesofstationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikesofstationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
