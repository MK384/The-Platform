import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInstructorCardComponent } from './user-instructor-card.component';

describe('UserInstructorCardComponent', () => {
  let component: UserInstructorCardComponent;
  let fixture: ComponentFixture<UserInstructorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInstructorCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserInstructorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
