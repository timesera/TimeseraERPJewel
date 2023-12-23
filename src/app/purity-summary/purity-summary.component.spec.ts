import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuritySummaryComponent } from './purity-summary.component';

describe('PuritySummaryComponent', () => {
  let component: PuritySummaryComponent;
  let fixture: ComponentFixture<PuritySummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuritySummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuritySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
