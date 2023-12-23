import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailBookComponent } from './mail-book.component';

describe('MailBookComponent', () => {
  let component: MailBookComponent;
  let fixture: ComponentFixture<MailBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
