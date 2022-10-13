import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MutantFormComponent } from './components/mutant-form/mutant-form.component';
import { MutantsListComponent } from './components/mutants-list/mutants-list.component';
import { SearchPipe } from './pipes/search.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MutantsService } from './services/mutants-service/mutants.service';
import { PoderesListComponent } from './components/poderes-list/poderes-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MutantsListComponent,
    MutantFormComponent,
    SearchPipe,
    PoderesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [
    MutantsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
