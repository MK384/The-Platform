import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularCourseCardComponent } from './regular-course-card.component';

describe('RegularCourseCardComponent', () => {
  let component: RegularCourseCardComponent;
  let fixture: ComponentFixture<RegularCourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegularCourseCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegularCourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
