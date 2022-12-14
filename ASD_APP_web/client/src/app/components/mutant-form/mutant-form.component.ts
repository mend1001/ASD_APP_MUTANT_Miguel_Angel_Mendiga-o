import { Component, OnInit, HostBinding } from '@angular/core';
import { Mutant } from 'src/app/models/Mutant';
import { MutantsService } from 'src/app/services/mutants-service/mutants.service';
import { VehicleService } from 'src/app/services/vehicle-service/vehicle.service';
import { CountryService } from 'src/app/services/country-service/country-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Vehicle } from 'src/app/models/Vehicle';
import { Country } from 'src/app/models/Country';
import { CreatePowerByMutantComponent } from 'src/app/modal/create-power-by-mutant/create-power-by-mutant.component';




@Component({
  selector: 'app-mutant-form',
  templateUrl: './mutant-form.component.html',
  styleUrls: ['./mutant-form.component.css']
})
export class MutantFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';
  mutants: any = [];
  vehicles: any = [];
  countries: any = [];

    mutant: Mutant = {
    mutid: 0 ,
    mutactivo: '',
    mutnom: '',
    mutapodo: '',
    rolid: '',
    vehid: '',
    conid: '',
    paiid: '',
    podmutid: '',
    mutimg: ''
  };

  vehicle: Vehicle = {
    vehid: 0 ,
    vehnom: ''
  };
  country: Country = {
    paiid: 0 ,
    painom: '',
    paicod: ''
  };

  edit: boolean = false;

  constructor(private mutantsService: MutantsService,
               private vehicleService: VehicleService,
               private countryService: CountryService,
                private router: Router,
                  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.getVehicles();
    this.getCountry();
    const params = this.activatedRoute.snapshot.params;
    if (params.mutid) {
      this.mutantsService.getMutant(params.mutid)
        .subscribe(
          res => {
            console.log(res);
            this.mutant = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
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
  getCountry() {
    this.countryService.getCountry()
      .subscribe(
        res => {
          this.countries = res;
          console.log(res);
        },
        err => console.error(err)
      );
  }

  saveNewMutant() {

    delete this.mutant.mutid;

    this.mutantsService.saveMutant(this.mutant)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/mutant']);
        },
        err => console.error(err)
      )
  }

  updateMutant() {

    this.mutantsService.updateMutant(this.mutant.mutid, this.mutant)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/mutant']);
        },
        err => console.error(err)
      )
  }
  list(){
    this.router.navigate(['/mutant']);
  }


}
