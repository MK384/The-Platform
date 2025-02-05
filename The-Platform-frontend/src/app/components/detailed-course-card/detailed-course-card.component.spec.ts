import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedCourseCardComponent } from './detailed-course-card.component';

describe('DetailedCourseCardComponent', () => {
  let component: DetailedCourseCardComponent;
  let fixture: ComponentFixture<DetailedCourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedCourseCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailedCourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
