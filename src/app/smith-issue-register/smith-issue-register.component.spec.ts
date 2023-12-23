import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmithIssueRegisterComponent } from './smith-issue-register.component';

describe('SmithIssueRegisterComponent', () => {
  let component: SmithIssueRegisterComponent;
  let fixture: ComponentFixture<SmithIssueRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmithIssueRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmithIssueRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
