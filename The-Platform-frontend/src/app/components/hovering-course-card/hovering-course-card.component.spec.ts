import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoveringCourseCardComponent } from './hovering-course-card.component';

describe('HoveringCourseCardComponent', () => {
  let component: HoveringCourseCardComponent;
  let fixture: ComponentFixture<HoveringCourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoveringCourseCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HoveringCourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
