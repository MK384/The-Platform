import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeInstructorCardComponent } from './become-instructor-card.component';

describe('BecomeInstructorCardComponent', () => {
  let component: BecomeInstructorCardComponent;
  let fixture: ComponentFixture<BecomeInstructorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BecomeInstructorCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BecomeInstructorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
