import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRetingComponent } from './course-reting.component';

describe('CourseRetingComponent', () => {
  let component: CourseRetingComponent;
  let fixture: ComponentFixture<CourseRetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseRetingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseRetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
