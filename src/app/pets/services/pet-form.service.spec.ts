import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PetFormService } from './pet-form.service';

describe('PetFormService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
  );

  it('should be created', () => {
    const service: PetFormService = TestBed.get(PetFormService);
    expect(service).toBeTruthy();
  });
});
