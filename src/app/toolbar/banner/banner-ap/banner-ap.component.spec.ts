import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerAPComponent } from './banner-ap.component';

describe('BannerAPComponent', () => {
  let component: BannerAPComponent;
  let fixture: ComponentFixture<BannerAPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerAPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerAPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
