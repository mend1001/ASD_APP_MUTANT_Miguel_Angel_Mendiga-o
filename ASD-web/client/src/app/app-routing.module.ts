import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MutantsListComponent } from './components/mutants-list/mutants-list.component';
import { MutantFormComponent } from './components/mutant-form/mutant-form.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
