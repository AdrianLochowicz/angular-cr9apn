import { Component, OnInit } from '@angular/core';
import { WydatkiService } from '../wydatki.service';

@Component({
  selector: 'app-lista-wydatkow',
  templateUrl: './lista-wydatkow.component.html',
  styleUrls: ['./lista-wydatkow.component.css']
})
export class ListaWydatkowComponent implements OnInit 
{
constructor(private wydatkiService: WydatkiService) { }
}