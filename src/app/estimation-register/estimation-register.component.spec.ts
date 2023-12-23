import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimationRegisterComponent } from './estimation-register.component';

describe('EstimationRegisterComponent', () => {
  let component: EstimationRegisterComponent;
  let fixture: ComponentFixture<EstimationRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimationRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstimationRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
