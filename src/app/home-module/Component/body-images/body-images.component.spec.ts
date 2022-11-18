import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyImagesComponent } from './body-images.component';

describe('BodyImagesComponent', () => {
  let component: BodyImagesComponent;
  let fixture: ComponentFixture<BodyImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
