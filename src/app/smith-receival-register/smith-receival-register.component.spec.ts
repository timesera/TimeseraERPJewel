import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmithReceivalRegisterComponent } from './smith-receival-register.component';

describe('SmithReceivalRegisterComponent', () => {
  let component: SmithReceivalRegisterComponent;
  let fixture: ComponentFixture<SmithReceivalRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmithReceivalRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmithReceivalRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
