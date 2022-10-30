import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CountryService {

  API_URI = '/api';

  constructor(private http: HttpClient) { }

  getCountry() {
    return this.http.get(`${this.API_URI}/country`);
  }

}
