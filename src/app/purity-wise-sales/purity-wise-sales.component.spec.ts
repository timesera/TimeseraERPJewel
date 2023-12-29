import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurityWiseSalesComponent } from './purity-wise-sales.component';

describe('PurityWiseSalesComponent', () => {
  let component: PurityWiseSalesComponent;
  let fixture: ComponentFixture<PurityWiseSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurityWiseSalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurityWiseSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
