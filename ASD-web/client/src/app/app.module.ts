import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavigationComponent } from './components/navigation/navigation.component';
import { MutantFormComponent } from './components/mutant-form/mutant-form.component';
import { MutantsListComponent } from './components/mutants-list/mutants-list.component';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { PowersListComponent } from './components/power-list/powers-list.component';

import { MutantsService } from './services/mutants-service/mutants.service';
import { VehicleService } from './services/vehicle-service/vehicle.service';

import { SearchVehiclePipe } from './pipes/search-vehicle.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { PowerService } from './services/power-service/power.service';
import { CountryListComponent } from './components/country-list/country-list.component';
import { CountryService } from './services/country-service/country-service.service';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MutantsListComponent,
    MutantFormComponent,
    VehiclesListComponent,
    VehicleFormComponent,
    PowersListComponent,
    SearchPipe,
    SearchVehiclePipe,
    CountryListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    PowerService,
    MutantsService,
    VehicleService,
    CountryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
