import { TestBed } from '@angular/core/testing';

import { ExperienceService } from './experience.service';

describe('ExperieceService', () => {
  let service: ExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
