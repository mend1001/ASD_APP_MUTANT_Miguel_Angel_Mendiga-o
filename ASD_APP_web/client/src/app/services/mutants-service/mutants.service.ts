import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mutant } from 'src/app/models/Mutant';
import { PowerByMutant } from 'src/app/models/PowerByMutant';
import { Observable } from 'rxjs';
import { Power } from 'src/app/models/power';

@Injectable({
  providedIn: 'root'
})
export class MutantsService {

  API_URI = '/api';

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

  survivedMutant(mutid: string) {
    return this.http.delete(`${this.API_URI}/mutant/survived/${mutid}`);
  }
  deadMutant(mutid: string) {
    return this.http.delete(`${this.API_URI}/mutant/dead/${mutid}`);
  }
  saveMutant(mutant: Mutant) {
    return this.http.post(`${this.API_URI}/mutant`, mutant);
  }

  updateMutant(mutid: string|number, updatedMutant: Mutant): Observable<Mutant> {
    return this.http.patch(`${this.API_URI}/mutant/${mutid}`, updatedMutant);
  }


}
