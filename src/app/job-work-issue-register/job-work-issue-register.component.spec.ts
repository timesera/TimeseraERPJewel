import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobWorkIssueRegisterComponent } from './job-work-issue-register.component';

describe('JobWorkIssueRegisterComponent', () => {
  let component: JobWorkIssueRegisterComponent;
  let fixture: ComponentFixture<JobWorkIssueRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobWorkIssueRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobWorkIssueRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
