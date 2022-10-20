import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PowerByMutant } from 'src/app/models/PowerByMutant';

@Injectable({
  providedIn: 'root'
})
export class PowerService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getPowers() {
    return this.http.get(`${this.API_URI}/power`);
  }

  getPower(powid: string) {
    return this.http.get(`${this.API_URI}/power/${powid}`);
  }

  delete(mutid: string) {
    return this.http.delete(`${this.API_URI}/power/${mutid}`);
  }
  createPowerMutant(powerByMutant: PowerByMutant) {
    return this.http.post(`${this.API_URI}/power`, powerByMutant);
  }




}
