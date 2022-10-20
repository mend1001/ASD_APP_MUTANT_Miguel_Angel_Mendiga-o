import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MutantsListComponent } from './components/mutants-list/mutants-list.component';
import { MutantFormComponent } from './components/mutant-form/mutant-form.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { CreatePowerByMutantComponent } from './modal/create-power-by-mutant/create-power-by-mutant.component';
import { PowersListComponent } from './components/power-list/powers-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/mutant',
    pathMatch: 'full'
  },
  {
    path: 'mutant',
    component: MutantsListComponent
  },
  {
    path: 'mutant/add',
    component: MutantFormComponent
  },
  {
    path: 'mutant/edit/:mutid',
    component: MutantFormComponent
  }
  ,
  {
    path: 'vehicle',
    component: VehiclesListComponent
  },
  {
    path: 'vehicle/add',
    component: VehicleFormComponent
  },
  {
    path: 'vehicle/edit/:vehid',
    component: VehicleFormComponent
  },
  {
    path: 'country',
    component: CountryListComponent
  },
  {
    path: 'powerModal',
    component: CreatePowerByMutantComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
