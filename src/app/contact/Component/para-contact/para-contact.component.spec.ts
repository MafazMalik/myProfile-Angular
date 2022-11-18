import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaContactComponent } from './para-contact.component';

describe('ParaContactComponent', () => {
  let component: ParaContactComponent;
  let fixture: ComponentFixture<ParaContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParaContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParaContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
