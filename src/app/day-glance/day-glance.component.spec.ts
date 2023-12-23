import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayGlanceComponent } from './day-glance.component';

describe('DayGlanceComponent', () => {
  let component: DayGlanceComponent;
  let fixture: ComponentFixture<DayGlanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayGlanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayGlanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
