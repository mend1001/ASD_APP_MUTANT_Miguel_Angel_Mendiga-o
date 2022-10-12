import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MutantFormComponent } from './components/mutant-form/mutant-form.component';
import { MutantsListComponent } from './components/mutants-list/mutants-list.component';
import { SearchPipePipe } from './pipes/search-pipe.pipe';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MutantFormComponent,
    MutantsListComponent,
    SearchPipePipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
