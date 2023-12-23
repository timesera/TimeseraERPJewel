import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevilageCardMemberDetailsComponent } from './previlage-card-member-details.component';

describe('PrevilageCardMemberDetailsComponent', () => {
  let component: PrevilageCardMemberDetailsComponent;
  let fixture: ComponentFixture<PrevilageCardMemberDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevilageCardMemberDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrevilageCardMemberDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
