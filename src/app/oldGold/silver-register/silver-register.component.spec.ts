import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilverRegisterComponent } from './silver-register.component';

describe('SilverRegisterComponent', () => {
  let component: SilverRegisterComponent;
  let fixture: ComponentFixture<SilverRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SilverRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SilverRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
