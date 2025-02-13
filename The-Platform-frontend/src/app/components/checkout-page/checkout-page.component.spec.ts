import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCoursePageComponent } from './checkout-page.component';

describe('BuyCoursePageComponent', () => {
  let component: BuyCoursePageComponent;
  let fixture: ComponentFixture<BuyCoursePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyCoursePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyCoursePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
