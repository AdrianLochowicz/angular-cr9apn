import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//import { ListaWydatkowService } from './lista-wydatkow.service';
//import { WydatkiService } from './wydatki.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
//providers: [ListaWydatkowService],
//providers: [WydatkiService]
})
export class AppModule { }
