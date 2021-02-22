import { Component } from '@angular/core';
import { Automa } from './automa';
import { Automabile } from './automabile';
import { AddEvent, AnnullaEvent, ConfermaEvent, ModificaEvent, RicercaEvent, RimuoviEvent, SelezionaEvent } from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements Automabile {

  automa: Automa;

  input1: string;
  input2: string;
  inputRicerca: string;


  constructor() { this.automa = new Automa(this) };

  nuova() {
    this.automa.next(new AddEvent);
  }
  rimuovi() {
    this.automa.next(new RimuoviEvent);
  }
  modifica() {
    this.automa.next(new ModificaEvent);
  }
  conferma() {
    this.automa.next(new ConfermaEvent);
  }
  annulla() {
    this.automa.next(new AnnullaEvent);
  }
  seleziona() {
    this.automa.next(new SelezionaEvent);
  }
  cerca() {
    this.automa.next(new RicercaEvent);
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////

  entraStatoRicerca() { }
  entraStatoAggiungi() { }
  entraStatoVisualizza() { }
  entraStatoModifica() { }
  entraStatoRimuovi() { }

}
