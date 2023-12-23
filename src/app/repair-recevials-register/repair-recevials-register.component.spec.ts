import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairRecevialsRegisterComponent } from './repair-recevials-register.component';

describe('RepairRecevialsRegisterComponent', () => {
  let component: RepairRecevialsRegisterComponent;
  let fixture: ComponentFixture<RepairRecevialsRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairRecevialsRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepairRecevialsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
