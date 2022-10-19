import { Component, OnInit, HostBinding } from '@angular/core';
import { Country } from 'src/app/models/Country';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { CountryService } from 'src/app/services/country-service/country-service.service';


@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})
export class CountryListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  country: any = [];
  country$!: Observable<Country[]>;
  constructor(private countryService: CountryService) { }


  ngOnInit() {
    this.getCountry();

  }

  getCountry() {
    this.countryService.getCountry()
      .subscribe(
        res => {
          this.country = res;
          console.log(res);
        },
        err => console.error(err)
      );
  }

}
