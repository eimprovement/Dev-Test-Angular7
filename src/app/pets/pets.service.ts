import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pet } from './models/pet.interface';
import { UpdatePetStatus } from './models/update-pet.interface';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  private baseURL = 'https://dev-test.azure-api.net/petstore';
  private defaultHttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': '651f181dbdce44539fb2735c5dec1f05'
    })
  };

  constructor(private _httpClient: HttpClient) {}

  findPetsByStatus(status: string): Observable<Pet[]> {
    return this._httpClient.get<Pet[]>(`${this.baseURL}/pet/findByStatus?status=${status}`, this.defaultHttpOptions);
  }

  findAvailablePets(): Observable<Pet[]> {
    return this.findPetsByStatus('available');
  }

  markPetAsSold(pet: Pet): Observable<Pet> {
    return this.updatePetStatus(pet, 'sold');
  }

  updatePetStatus(pet: Pet, status: string): Observable<Pet> {
    const updatePetStatus: UpdatePetStatus = {
      id: pet.id,
      status
    };

    return this._httpClient.put<Pet>(`${this.baseURL}/pet`, updatePetStatus, this.defaultHttpOptions);
  }

  deletePet(pet: Pet): Observable<any> {
    return this._httpClient.delete<any>(`${this.baseURL}/pet/${pet.id}`, this.defaultHttpOptions);
  }
}
