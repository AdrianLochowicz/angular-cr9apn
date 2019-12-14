import { Injectable } from '@angular/core';

@Injectable()
export class ListaWydatkowService {

  constructor() { }

}
import { WydatkiService } from '../wydatki.service';
constructor(private wydatkiService: WydatkiService) { }
ngOnInit() {
    this.wydatki = this.wydatkiService.getWydatki();
  }