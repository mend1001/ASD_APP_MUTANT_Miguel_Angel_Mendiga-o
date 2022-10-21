import { Component, OnInit, HostBinding } from '@angular/core';
import { Power } from 'src/app/models/power';
import { Mutant } from 'src/app/models/Mutant';
import { PowerService } from 'src/app/services/power-service/power.service';
import { MutantsService } from 'src/app/services/mutants-service/mutants.service';
import { PowerByMutant } from 'src/app/models/PowerByMutant';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-create-power-by-mutant',
  templateUrl: './create-power-by-mutant.component.html',
  styleUrls: ['./create-power-by-mutant.component.css']
})
export class CreatePowerByMutantComponent implements OnInit {


  @HostBinding('class') clases = 'row';

  powerByMutants: any = [];
  powers: any = [];
  mutants: any = [];
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



  constructor(
               private powerService: PowerService,
               private mutantService: MutantsService,

                ) { }

  ngOnInit() {

    this.getPowers();
    this.getMutants()

  }

  getPowers() {
    this.powerService.getPowers()
    .subscribe(
      res => {
        this.powers = res;

      },
      err => console.error(err)
    );
  }
  getMutants() {
    this.mutantService.getMutants()
    .subscribe(
      res => {
        this.mutants = res;

      },
      err => console.error(err)
    );
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

  powerRegister(){

    let cod = (document.getElementById("powerSelect") as HTMLInputElement).value;
    let mutantId = this.mutants.length + 1;
    this.powerByMutant.podid = cod;
    this.powerByMutant.mutid = mutantId.toString();
    console.log(this.powerByMutant);
    this.createPowerMutant();
  }


}
