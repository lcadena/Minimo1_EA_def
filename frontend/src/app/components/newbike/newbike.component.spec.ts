import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbikeComponent } from './newbike.component';

describe('NewbikeComponent', () => {
  let component: NewbikeComponent;
  let fixture: ComponentFixture<NewbikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewbikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewbikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
