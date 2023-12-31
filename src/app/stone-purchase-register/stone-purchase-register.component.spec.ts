import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StonePurchaseRegisterComponent } from './stone-purchase-register.component';

describe('StonePurchaseRegisterComponent', () => {
  let component: StonePurchaseRegisterComponent;
  let fixture: ComponentFixture<StonePurchaseRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StonePurchaseRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StonePurchaseRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
