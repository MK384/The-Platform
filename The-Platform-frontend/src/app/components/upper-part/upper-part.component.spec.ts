import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperPartComponent } from './upper-part.component';

describe('UpperPartComponent', () => {
  let component: UpperPartComponent;
  let fixture: ComponentFixture<UpperPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpperPartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpperPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
