import { Component, OnInit, HostBinding } from '@angular/core';
import { Power } from 'src/app/models/power';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { PowerService } from 'src/app/services/power-service/power.service';


@Component({
  selector: 'app-powers-list',
  templateUrl: './powers-list.component.html',
  styleUrls: ['./powers-list.component.css']
})
export class PowersListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  powers: any = [];
  power$!: Observable<Power[]>;
	filter = new FormControl('');
  showInactives = true;
  constructor(private powerService: PowerService) { }
  searchPower = '';

  ngOnInit() {
    this.getPowers();

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

  delete(vehid: string) {
    this.powerService.delete(vehid)
      .subscribe(
        res => {
          console.log(res);
          this.getPowers();
        },
        err => console.error(err)
      )
  }


}
