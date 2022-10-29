import { TestBed } from '@angular/core/testing';

import { MutantsService } from './mutants.service';

describe('MutantsService', () => {
  let service: MutantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MutantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
