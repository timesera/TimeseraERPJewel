import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldGoldSilverBookComponent } from './old-gold-silver-book.component';

describe('OldGoldSilverBookComponent', () => {
  let component: OldGoldSilverBookComponent;
  let fixture: ComponentFixture<OldGoldSilverBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldGoldSilverBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldGoldSilverBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
