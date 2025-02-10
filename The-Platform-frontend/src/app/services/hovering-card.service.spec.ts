import { TestBed } from '@angular/core/testing';

import { HoveringCardService } from './hovering-card.service';

describe('HoveringCardService', () => {
  let service: HoveringCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoveringCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
