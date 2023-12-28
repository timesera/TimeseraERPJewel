import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiamondsalesComponent } from './diamondsales.component';

describe('DiamondsalesComponent', () => {
  let component: DiamondsalesComponent;
  let fixture: ComponentFixture<DiamondsalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiamondsalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiamondsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
