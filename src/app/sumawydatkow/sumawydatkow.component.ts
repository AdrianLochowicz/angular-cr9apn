import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Wydatek, KATEGORIE } from "../wydatek";
import { WydatkiService } from "../wydatki.service";
import { formatDate } from "@angular/common";

@Component({
  selector: "app-sumawydatkow",
  templateUrl: "./sumawydatkow.component.html",
  styleUrls: ["./sumawydatkow.component.css"]
})
export class SumawydatkowComponent implements OnInit {
  wydatki: Wydatek[];
  public sw = 1;
  constructor(private wydatkiService: WydatkiService) {}
  public wydatki2;
  ngOnInit() {
    this.sw = 1;
    this.wydatki = this.wydatkiService.getWydatki();
    this.wydatki2 = this.getWydatkiByCurrentMonth();
  }
  getSuma(): number {
    let suma = 0;
    for (let i = 0; i < this.wydatki.length; i++) {
      suma += this.wydatki[i].kwota;
    }
    return suma;
  }
  getSumazKategori(category): number {
    let suma = 0;
    for (let i = 0; i < this.wydatki.length; i++) {
      if (this.wydatki[i].kategoria == category) {
        suma += this.wydatki[i].kwota;
      }
    }
    return suma;
  }

  getSumazKategoriMiesiac2(): number {
    var date1 = new Date();
    var n = date1.getMonth();
    var y = date1.getYear();
    let suma = 0;

    for (let i = 0; i < this.wydatki.length; i++) {
      const myDate = this.wydatki[i].data;
      var wydData = new Date(myDate);

      if (wydData.getMonth() == n && wydData.getYear() == y) {
        suma += this.wydatki[i].kwota;
      }
    }

    return suma;
  }

  getSumazKategoriMiesiac(category): number {
    var date1 = new Date();
    var n = date1.getMonth();
    var y = date1.getYear();
    let suma = 0;

    for (let i = 0; i < this.wydatki.length; i++) {
      const myDate = this.wydatki[i].data;
      var wydData = new Date(myDate);

      if (wydData.getMonth() == n && wydData.getYear() == y) {
        if (this.wydatki[i].kategoria == category) {
          suma += this.wydatki[i].kwota;
        }
      }
    }

    return suma;
  }

  getWydatkiByCurrentMonth() {
    var wydatki_per_month = [];
    var date1 = new Date();

    var n = date1.getMonth();
    var y = date1.getYear();

    for (let i = 0; i < this.wydatki.length; i++) {
      const myDate = this.wydatki[i].data;
      var wydData = new Date(myDate);
      if (wydData.getMonth() == n && wydData.getYear() == y) {
        wydatki_per_month.push(this.wydatki[i]);
      }
    }
    return wydatki_per_month;
  }
  showCurrentMonth() {
    this.sw = 0;
    document.getElementById("CurrentMonth").style.display = "block";
    document.getElementById("Full").style.display = "none";
  }
  showFull() {
    document.getElementById("CurrentMonth").style.display = "none";
    document.getElementById("Full").style.display = "block";
    this.sw = 1;
  }
}