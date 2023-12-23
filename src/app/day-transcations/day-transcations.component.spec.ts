import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayTranscationsComponent } from './day-transcations.component';

describe('DayTranscationsComponent', () => {
  let component: DayTranscationsComponent;
  let fixture: ComponentFixture<DayTranscationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayTranscationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayTranscationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
