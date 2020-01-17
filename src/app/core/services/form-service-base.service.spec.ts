import { TestBed } from '@angular/core/testing';

import { FormServiceBaseService } from './form-service-base.service';

describe('FormServiceBaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormServiceBaseService = TestBed.get(FormServiceBaseService);
    expect(service).toBeTruthy();
  });
});
