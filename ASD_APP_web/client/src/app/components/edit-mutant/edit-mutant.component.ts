import { Component, OnInit, HostBinding } from '@angular/core';
import { Mutant } from 'src/app/models/Mutant';
import { MutantsService } from 'src/app/services/mutants-service/mutants.service';
import { VehicleService } from 'src/app/services/vehicle-service/vehicle.service';
import { CountryService } from 'src/app/services/country-service/country-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Vehicle } from 'src/app/models/Vehicle';
import { Country } from 'src/app/models/Country';
import { CreatePowerByMutantComponent } from 'src/app/modal/create-power-by-mutant/create-power-by-mutant.component';
import { PowerService } from 'src/app/services/power-service/power.service';
import { Power } from 'src/app/models/power';
import { PowerByMutant } from 'src/app/models/PowerByMutant';


@Component({
  selector: 'app-edit-mutant',
  templateUrl: './edit-mutant.component.html',
  styleUrls: ['./edit-mutant.component.css']
})
export class EditMutantComponent implements OnInit {
  @HostBinding('class') clases = 'row';
  mutants: any = [];
  vehicles: any = [];
  countries: any = [];
  powerByMutants: any = [];
  powers: any = [];
  powersArray: any[];
  flag = 0 ;


  powerByMutant : PowerByMutant = {

    podid: '',
    mutid: ''
  };

  power : Power = {
    podid: 0 ,
    podtipo: '',
    poddescripcion: ''
  };
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
    private powerService: PowerService,
    private vehicleService: VehicleService,
    private countryService: CountryService,
     private router: Router,
       private activatedRoute: ActivatedRoute) { }

ngOnInit() {

this.getVehicles();
this.getCountry();
this.getPowers();

const params = this.activatedRoute.snapshot.params;
if (params.mutid) {
  this.delete(params.mutid);
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
getPowers() {
  this.powerService.getPowers()
  .subscribe(
  res => {
  this.powers = res;
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

delete(mutid: string) {
  this.powerService.delete(mutid)
    .subscribe(
      res => {
        console.log(res);

      },
      err => console.error(err)
    )
}
createPowerMutant() {

  delete this.powerByMutant.podmutid;
  this.powerService.createPowerMutant(this.powerByMutant)
    .subscribe(
      res => {
        console.log(res);

      },
      err => console.error(err)
    )
}

powerEdited(){


  let cod = (document.getElementById("powerSelect") as HTMLInputElement).value;
  let mutid = (document.getElementById("mutid") as HTMLInputElement).value;

  console.log("el mutid es: "+ mutid)
  this.powerService.delete(mutid);
  this.powerByMutant.podid = cod;
  this.powerByMutant.mutid = mutid.toString();
  console.log(this.powerByMutant);
  this.createPowerMutant();
}


}
