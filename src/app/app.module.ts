import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FilmsComponent } from './components/films/films.component';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { SpeciesComponent } from './components/species/species.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './components/main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeximateModule } from 'ngx-teximate';

const routes: Routes = [
  {
    path: '', redirectTo: '/pogoda', pathMatch: 'full'

  },
  {
    path: 'pogoda',
    component: MainComponent,
    //data : {title : 'some value'}
  },
  {
    path: 'prognoza',
    component: FilmsComponent,

  },
  {
    path: 'uv',
    component: CharactersComponent,
  },
  {
    path: 'statystyki',
    component: SpeciesComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    CharactersComponent,
    SpeciesComponent,
    PageNotFoundComponent,
    MainComponent

  ],
  imports: [
    RouterModule.forRoot(routes), BrowserModule, HttpClientModule, FormsModule, NgbModule,BrowserAnimationsModule,
    TeximateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
