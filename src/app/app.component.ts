import { Component, OnInit } from '@angular/core';

import { Wydatek, KATEGORIE } from './wydatek';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent implements OnInit {


    wydatki: Wydatek[];
ngOnInit() {
    this.wydatki = [
        new Wydatek('Tankowanie', 252.43, '', new Date(2018, 4, 30),48.0, 527.5),
        new Wydatek('Myjnia', 75, '', new Date(2018, 4, 2)),
        new Wydatek('Serwis', 1250, 'Klocki, rozrząd i parę drobiazgów', new Date(2018, 3, 16)),
        new Wydatek('Inne', 315.50, 'Różowe futerko na kierownicę', new Date(2018, 3, 16)),
        new Wydatek('Tankowanie', 325.20, 'Do pełna po urlopie', new Date(2017, 7, 12), 527, ''), 
        new Wydatek('Tankowanie',257.30, '', new Date(2017, 7, 13), '', 35.0)
    ];
}
}
