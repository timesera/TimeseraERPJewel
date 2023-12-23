import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeWiseSalesComponent } from './size-wise-sales.component';

describe('SizeWiseSalesComponent', () => {
  let component: SizeWiseSalesComponent;
  let fixture: ComponentFixture<SizeWiseSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizeWiseSalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SizeWiseSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
