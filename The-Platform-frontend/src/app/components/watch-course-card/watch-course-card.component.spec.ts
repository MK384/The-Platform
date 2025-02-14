import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchCourseCardComponent } from './watch-course-card.component';

describe('WatchCourseCardComponent', () => {
  let component: WatchCourseCardComponent;
  let fixture: ComponentFixture<WatchCourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchCourseCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WatchCourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
