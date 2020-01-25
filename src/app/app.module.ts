import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DodajWydatekComponent } from './dodaj-wydatek/dodaj-wydatek.component';
import { ListaWydatkowService } from './lista-wydatkow.service';
import { ListaWydatkowComponent } from './lista-wydatkow/lista-wydatkow.component';
import { WydatkiService } from './wydatki.service';
import { SumawydatkowComponent } from './sumawydatkow/sumawydatkow.component';

const appRoutes: Routes = [
  { path: 'wydatki', component: ListaWydatkowComponent },
  { path: 'dodaj', component: DodajWydatekComponent },
  { path: 'suma', component: SumaWydatkowComponent },
  { path: '', redirectTo: '/wydatki', pathMatch: 'full'}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, ListaWydatkowComponent, DodajWydatekComponent, SumawydatkowComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ListaWydatkowService, WydatkiService ],
})
export class AppModule { }