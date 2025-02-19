import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistCourseCardComponent } from './wishlist-course-card.component';

describe('WishlistCourseCardComponent', () => {
  let component: WishlistCourseCardComponent;
  let fixture: ComponentFixture<WishlistCourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishlistCourseCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WishlistCourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
