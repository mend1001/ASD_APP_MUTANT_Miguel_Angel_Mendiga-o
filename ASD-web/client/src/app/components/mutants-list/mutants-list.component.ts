import { Component, OnInit, HostBinding } from '@angular/core';
import { Mutant } from 'src/app/models/Mutant';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MutantsService } from 'src/app/services/mutants-service/mutants.service';


@Component({
  selector: 'app-mutants-list',
  templateUrl: './mutants-list.component.html',
  styleUrls: ['./mutants-list.component.css'],
})
export class MutantsListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  mutants: any = [];
  mutant$!: Observable<Mutant[]>;
	filter = new FormControl('');
  showInactives = true;
  constructor(private mutantsService: MutantsService) { }
  search = '';

  ngOnInit() {
    this.getMutants();

  }

  getMutants() {
    this.mutantsService.getMutants()
      .subscribe(
        res => {
          this.mutants = res;
          console.log(res);
        },
        err => console.error(err)
      );
  }

  deleteMutant(mutid: string) {
    this.mutantsService.deleteMutant(mutid)
      .subscribe(
        res => {
          console.log(res);
          this.getMutants();
        },
        err => console.error(err)
      )
  }
  survived(mutid: string) {
    this.mutantsService.survived(mutid)
      .subscribe(
        res => {
          console.log(res);
          this.getMutants();
        },
        err => console.error(err)
      )
  }

}
