import { Injectable } from "@angular/core";
import { Wydatek, KATEGORIE } from "./wydatek";

@Injectable()
export class WydatkiService {
  private nextId: number;
  private wydatki: Wydatek[];

  constructor() {
    this.wydatki = [
      new Wydatek(1, "Tankowanie", 252.43, "", new Date(2018, 1, 30), 12, 25),
      new Wydatek(2, "Myjnia", 75, "", new Date(2018, 0, 2), 5),
      new Wydatek(
        3,
        "Serwis",
        1250,
        "Klocki, rozrząd i parę drobiazgów",
        new Date(2018, 1, 16)
      ),
      new Wydatek(
        4,
        "Inne",
        315.5,
        "Różowe futerko na kierownicę",
        new Date(2019, 0, 16)
      ),
      new Wydatek(
        5,
        "Tankowanie",
        325.2,
        "Do pełna po urlopie",
        new Date(2020, 0, 12),
        527,
        ""
      ),
      new Wydatek(6, "Tankowanie", 257.3, "", new Date(2020, 0, 13), null, 35)
    ];
    this.nextId = 7;
  }
  getWydatki() {
    return this.wydatki;
  }

  getKategorie(): string[] {
    return KATEGORIE;
  }
  dodajWydatek(nowyWydatek: Wydatek): void {
    this.wydatki.push(nowyWydatek);
    nowyWydatek.id = this.nextId++;
  }
  usunWydatek(id: number): void {
    const ind = this.wydatki.findIndex(wydatek => wydatek.id === id);
    this.wydatki.splice(ind, 1);
  }
}
