import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from 'src/app/models/Vehicle';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  API_URI = '/api';

  constructor(private http: HttpClient) { }

  getVehicles() {
    return this.http.get(`${this.API_URI}/vehicle`);
  }

  getVehicle(vehid: string) {
    return this.http.get(`${this.API_URI}/vehicle/${vehid}`);
  }

  deadVehicle(vehid: string) {
    return this.http.delete(`${this.API_URI}/vehicle/dead/${vehid}`);
  }

  survivedVehicle(vehid: string) {
    return this.http.delete(`${this.API_URI}/vehicle/survived/${vehid}`);
  }

  saveVehicle(vehicle: Vehicle) {
    return this.http.post(`${this.API_URI}/vehicle`, vehicle);
  }

  updateVehicle(vehid: string|number, updateVehicle: Vehicle): Observable<Vehicle> {
    return this.http.patch(`${this.API_URI}/vehicle/${vehid}`, updateVehicle);
  }

}
