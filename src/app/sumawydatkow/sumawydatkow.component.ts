import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WydatkiService } from '../wydatki.service';
import { Wydatek, KATEGORIE } from './app/Wydatek';

@Component({
  selector: 'app-sumawydatkow',
  templateUrl: './sumawydatkow.component.html',
  styleUrls: ['./sumawydatkow.component.css']
})
export class SumawydatkowComponent implements OnInit {
 wydatki: Wydatek[];

 constructor(private wydatkiService: WydatkiService) {}

  ngOnInit() 
  {
       this.wydatki = this.wydatkiService.getWydatki();
  }
getSuma(): number
{
let suma = 0;
for (let i = 0; i < this.wydatki.length; i++)
{suma += this.wydatki[i].kwota;}
return suma;
}
getSumazKategori(category): number
{
for (let i = 0; i < this.wydatki.length; i++)
if(this.wydatki[i].kategoria == category)
{suma += this.wydatki[i].kwota;}
}
}
return suma;
getWydatkizBierzacegomiesiaca()
{
  let suma = [];
  for (let i = 0; i < this.wydatki.length; i++)
  {
    if(this.wydatki[i].data == '19.01.2020')
    {return this.wydatki[i].kwota;}
  }
}
}
}