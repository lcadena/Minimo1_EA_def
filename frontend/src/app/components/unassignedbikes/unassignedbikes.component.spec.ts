import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnassignedbikesComponent } from './unassignedbikes.component';

describe('UnassignedbikesComponent', () => {
  let component: UnassignedbikesComponent;
  let fixture: ComponentFixture<UnassignedbikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnassignedbikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnassignedbikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
