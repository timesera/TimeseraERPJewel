import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeltingRegisterComponent } from './melting-register.component';

describe('MeltingRegisterComponent', () => {
  let component: MeltingRegisterComponent;
  let fixture: ComponentFixture<MeltingRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeltingRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeltingRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
