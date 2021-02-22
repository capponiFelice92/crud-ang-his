import { Automabile } from "./automabile";
import { AddEvent, AnnullaEvent, ConfermaEvent, Event, ModificaEvent, RicercaEvent, RimuoviEvent, SelezionaEvent, State } from "./state";

export class Automa implements State {
    next(e: Event, a?: Automa) {
        console.log("siamo nello stato:");
        console.log(this.stato);
        console.log("ricevuto evento:");
        console.log(e);
        this.stato.next(e, a);
        console.log("siamo arrivati nello stato " + this.stato + "\n");
    }

    constructor(ui: Automabile) {
        this.ui = ui;
        this.stato = new Ricerca();
        ui.entraStatoRicerca();
    }

    stato: State;
    ui: Automabile;


}


export class Ricerca implements State {
    next(e: Event, a?: Automa) {
        if (e instanceof AddEvent) {
            a.stato = new Aggiungi(a);
        } else if (e instanceof RicercaEvent) {

        } else if (e instanceof SelezionaEvent) {
            a.stato = new Visualizza();
            a.ui.entraStatoVisualizza();
        } else {
            console.log("errore ricevuto evento " + e + " inatteso");
        }
    }

}

export class Aggiungi implements State {
    constructor(a: Automa) {
        a.ui.entraStatoAggiungi();
    }

    next(e: Event, a?: Automa) {
        if (e instanceof ConfermaEvent) {
            a.stato = new Visualizza();
            a.ui.entraStatoVisualizza();
        } else if (e instanceof AnnullaEvent) {
            a.stato = new Ricerca();
            a.ui.entraStatoRicerca();
        } else {
            console.log("errore ricevuto evento " + e + " inatteso");
        }
    }

}

export class Visualizza implements State {
    next(e: Event, a?: Automa) {
        if (e instanceof AddEvent) {
            a.stato = new Aggiungi(a);
            a.ui.entraStatoAggiungi();
        } else if (e instanceof SelezionaEvent) {

        } else if (e instanceof ModificaEvent) {
            a.stato = new Modifica();
            a.ui.entraStatoModifica();
        } else if (e instanceof RimuoviEvent) {
            a.stato = new Rimuovi();
            a.ui.entraStatoRimuovi();
        } else if (e instanceof RicercaEvent) {
            a.stato = new Ricerca();
        } else {
            console.log("errore ricevuto evento " + e + " inatteso");
        }
    }

}

export class Rimuovi implements State {
    next(e: Event, a?: Automa) {
        if (e instanceof ConfermaEvent) {
            a.stato = new Ricerca();
            a.ui.entraStatoRicerca();
        } else if (e instanceof AnnullaEvent) {
            a.stato = new Visualizza();
            a.ui.entraStatoVisualizza();
        } else {
            console.log("errore ricevuto evento " + e + " inatteso");
        }
    }

}

export class Modifica implements State {
    next(e: Event, a?: Automa) {
        if (e instanceof ConfermaEvent) {
            a.stato = new Visualizza();
            a.ui.entraStatoVisualizza();

        } else if (e instanceof AnnullaEvent) {
            a.stato = new Visualizza();
            a.ui.entraStatoVisualizza();
        } else {
            console.log("errore ricevuto evento " + e + " inatteso");
        }
    }

}