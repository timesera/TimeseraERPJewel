import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevilageCardPointsComponent } from './previlage-card-points.component';

describe('PrevilageCardPointsComponent', () => {
  let component: PrevilageCardPointsComponent;
  let fixture: ComponentFixture<PrevilageCardPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevilageCardPointsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrevilageCardPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
