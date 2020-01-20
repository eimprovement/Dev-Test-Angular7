import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PetsService } from './pets.service';

describe('PetsService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PetsService]
    })
  );

  it('should be created', () => {
    const service: PetsService = TestBed.get(PetsService);
    expect(service).toBeTruthy();
  });

  it('#findAvailablePets should return available pets from observable', (done: DoneFn) => {
    const service: PetsService = TestBed.get(PetsService);
    service.findAvailablePets().subscribe(pets => {
      expect(pets).toBeGreaterThanOrEqual(1);
      done();
    });
  }, 100000);
});
