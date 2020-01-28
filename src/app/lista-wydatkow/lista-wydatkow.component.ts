import { Component, OnInit } from "@angular/core";
import { Wydatek, KATEGORIE } from "../wydatek";
import { WydatkiService } from "../wydatki.service";

@Component({
  selector: "app-lista-wydatkow",
  templateUrl: "./lista-wydatkow.component.html",
  styleUrls: ["./lista-wydatkow.component.css"]
})
export class ListaWydatkowComponent implements OnInit {
  wydatki: Wydatek[];

  constructor(private wydatkiService: WydatkiService) {}

  ngOnInit() {
    this.wydatki = this.wydatkiService.getWydatki();
  }
  usunWydatek(id: number) {
    this.wydatkiService.usunWydatek(id);
  }
}