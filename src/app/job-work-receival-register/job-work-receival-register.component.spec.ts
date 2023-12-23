import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobWorkReceivalRegisterComponent } from './job-work-receival-register.component';

describe('JobWorkReceivalRegisterComponent', () => {
  let component: JobWorkReceivalRegisterComponent;
  let fixture: ComponentFixture<JobWorkReceivalRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobWorkReceivalRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobWorkReceivalRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
