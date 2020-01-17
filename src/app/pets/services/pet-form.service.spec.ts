import { TestBed } from '@angular/core/testing';

import { PetFormService } from './pet-form.service';

describe('PetFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetFormService = TestBed.get(PetFormService);
    expect(service).toBeTruthy();
  });
});
