import { Injectable } from '@angular/core';
import { WydatkiService } from './wydatki.service';
@Injectable()
export class ListaWydatkowService {

constructor(private wydatkiService: WydatkiService) { }
ngOnInit() {
    this.wydatki = this.wydatkiService.getWydatki();
  }
}
