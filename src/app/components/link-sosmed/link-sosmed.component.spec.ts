import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkSosmedComponent } from './link-sosmed.component';

describe('LinkSosmedComponent', () => {
  let component: LinkSosmedComponent;
  let fixture: ComponentFixture<LinkSosmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkSosmedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkSosmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
