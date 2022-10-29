import { Component, OnInit, HostBinding } from '@angular/core';
import { Vehicle } from 'src/app/models/Vehicle';
import { VehicleService } from 'src/app/services/vehicle-service/vehicle.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

    vehicle: Vehicle = {

    vehid: 0 ,
    vehnom: '',
    vehdescripcion: '',
    vehcodigo: '',
    vehimg: ''
  };

  edit: boolean = false;

  constructor(private vehicleService: VehicleService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.vehid) {
      this.vehicleService.getVehicle(params.vehid)
        .subscribe(
          res => {
            console.log(res);
            this.vehicle = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewVehicle() {

    delete this.vehicle.vehid;
    this.vehicleService.saveVehicle(this.vehicle)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/vehicle']);
        },
        err => console.error(err)
      )
  }

  updateVehicle() {

    this.vehicleService.updateVehicle(this.vehicle.vehid, this.vehicle)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/vehicle']);
        },
        err => console.error(err)
      )
  }
  list(){
    this.router.navigate(['/vehicle']);
  }

}
