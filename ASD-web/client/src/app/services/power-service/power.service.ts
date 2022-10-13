import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  deletePower(powid: string) {
    return this.http.delete(`${this.API_URI}/power/${powid}`);
  }



}
