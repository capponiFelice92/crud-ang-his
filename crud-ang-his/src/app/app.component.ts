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

  form: boolean;
  aggiungi: boolean;
  remove: boolean;
  edit: boolean;
  conf: boolean;
  annull: boolean;
  search: boolean;
  tabella: boolean;
  codice: boolean;
  descrizione: boolean;


  constructor() { 
    this.automa = new Automa(this);
   }

  nuova() {
    this.automa.next(new AddEvent, this.automa);
  }
  rimuovi() {
    this.automa.next(new RimuoviEvent, this.automa);
  }
  modifica() {
    this.automa.next(new ModificaEvent, this.automa);

  }
  conferma() {
    this.automa.next(new ConfermaEvent, this.automa);

  }
  annulla() {
    this.automa.next(new AnnullaEvent, this.automa);

  }
  seleziona() {
    this.automa.next(new SelezionaEvent, this.automa);
  }
  cerca() {
    this.automa.next(new RicercaEvent, this.automa);
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////

  entraStatoRicerca() {
    this.form = false;
    this.aggiungi = true;
    this.search = true;
    this.tabella = true;
    this.codice = false;
    this.descrizione = false;
    this.codice = false;
    this.descrizione = false;
  }
  entraStatoAggiungi() {
    this.form = true;
    this.aggiungi = false;
    this.remove = false;
    this.edit = false;
    this.conf = true;
    this.annull = true;
    this.search = false;
    this.tabella = false;
    this.codice = false;
    this.descrizione = false;
  }
  entraStatoVisualizza() {
    this.form = true;
    this.aggiungi = true;
    this.remove = true;
    this.edit = true;
    this.conf = false;
    this.annull = false;
    this.search = true;
    this.tabella = true;
    this.codice = true;
    this.descrizione = true;

  }
  entraStatoModifica() {
    this.form = true;
    this.aggiungi = false;
    this.remove = false;
    this.edit = false;
    this.conf = true;
    this.annull = true;
    this.search = false;
    this.tabella = false;
    this.codice = false;
    this.descrizione = false;
  }
  entraStatoRimuovi() {
    this.form = true;
    this.aggiungi = false;
    this.remove = false;
    this.edit = false;
    this.conf = true;
    this.annull = true;
    this.search = false;
    this.tabella = false;
    this.codice = true;
    this.descrizione = true;
  }

}
