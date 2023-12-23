import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeseraloginComponent } from './timeseralogin.component';

describe('TimeseraloginComponent', () => {
  let component: TimeseraloginComponent;
  let fixture: ComponentFixture<TimeseraloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeseraloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeseraloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
