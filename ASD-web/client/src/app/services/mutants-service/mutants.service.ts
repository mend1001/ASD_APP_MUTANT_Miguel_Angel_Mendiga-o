import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mutant } from 'src/app/models/Mutant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MutantsService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getMutants() {
    return this.http.get(`${this.API_URI}/mutant`);
  }

  getMutant(mutid: string) {
    return this.http.get(`${this.API_URI}/mutant/${mutid}`);
  }

  deleteMutant(mutid: string) {
    return this.http.delete(`${this.API_URI}/mutant/${mutid}`);
  }

  survived(mutid: string) {
    return this.http.delete(`${this.API_URI}/mutant/survived/${mutid}`);
  }
  saveMutant(mutant: Mutant) {
    return this.http.post(`${this.API_URI}/mutant`, mutant);
  }

  updateMutant(mutid: string|number, updatedMutant: Mutant): Observable<Mutant> {
    return this.http.put(`${this.API_URI}/mutant/${mutid}`, updatedMutant);
  }

}
