import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInstractotCardComponent } from './course-instractot-card.component';

describe('CourseInstractotCardComponent', () => {
  let component: CourseInstractotCardComponent;
  let fixture: ComponentFixture<CourseInstractotCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseInstractotCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseInstractotCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
