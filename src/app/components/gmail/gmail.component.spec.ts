import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmailComponent } from './gmail.component';

describe('GmailComponent', () => {
  let component: GmailComponent;
  let fixture: ComponentFixture<GmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
