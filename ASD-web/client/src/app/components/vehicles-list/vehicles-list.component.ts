import { Component, OnInit, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Vehicle } from 'src/app/models/Vehicle';
import { VehicleService } from 'src/app/services/vehicle-service/vehicle.service'
@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  vehicles: any = [];
  vehicle$!: Observable<Vehicle[]>;
	filter = new FormControl('');
  showInactives = true;
  constructor(private vehicleService: VehicleService) { }
  searchVehicle = '';

  ngOnInit() {
    this.getVehicles();

  }

  getVehicles() {
    this.vehicleService.getVehicles()
      .subscribe(
        res => {
          this.vehicles = res;
          console.log(res);
        },
        err => console.error(err)
      );
  }

  deleteVehicle(vehid: string) {
    this.vehicleService.deleteVehicle(vehid)
      .subscribe(
        res => {
          console.log(res);
          this.getVehicles();
        },
        err => console.error(err)
      )
  }
  saved(vehid: string) {
    this.vehicleService.saved(vehid)
      .subscribe(
        res => {
          console.log(res);
          this.getVehicles();
        },
        err => console.error(err)
      )
  }

}
