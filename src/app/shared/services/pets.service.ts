import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { HTTP_NOINTERCEPTOR } from '@app/core';
import { Observable } from 'rxjs';
import { Pet } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  private baseURl = 'https://dev-test.azure-api.net/petstore/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': '6c97551439d04f429ae91e81698d03bf'
    })
  };

  constructor(@Inject(HTTP_NOINTERCEPTOR) private http: HttpClient) {}

  addPet(data: Pet) {
    return this.http.post<Pet>(this.baseURl + 'pet', data, this.httpOptions);
  }

  delete(id: number): Observable<Pet> {
    return this.http.delete<any>(this.baseURl + 'pet/' + id, this.httpOptions);
  }

  getAvailablesPets(): Observable<Pet[]> {
    return this.getPetsByStatus('1');
  }

  getPetsByStatus(status: string): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.baseURl + 'pet/findByStatus?status=' + status, this.httpOptions);
  }

  updatePet(data: Pet) {
    return this.http.put<Pet>(this.baseURl + 'pet', data, this.httpOptions);
  }
}
