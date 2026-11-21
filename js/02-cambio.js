// Traccia 02 · Il cambio in aeroporto
// La consegna è nel README, alla voce "02 · Il cambio in aeroporto".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? calcolaDollariRicevuti
  Di quali dati ha bisogno? tasso di cambio e quantita di euro in possesso del turista e la commissione
  Deve restituire qualcosa? si
  Di che tipo? number

  STEPS
  1 - definisci la funzione calcolaDollariRicevuti e inserisci come parametro tassoDiCambio e quantitaEuro
  2 - Dentro la funzione controllo il se il tasso di cambio è maggiore dei soldi che vengono cambiati:
      Se importoEuro <== commissione, restituisco 0
      altriment: sottraggo prima l'importo della commissione e poi faccio il cambio valuta al tasso indicato
  3 - stampala in console
*/

// # La funzione
function calcolaDollariRicevuti(importoEuro, tassoDiCambio, commissione) {
  if (importoEuro <= commissione) {
    return 0;
  }

  else if (importoEuro > commissione) {
    const importoSenzaCommissione = importoEuro - commissione;
    return importoSenzaCommissione * tassoDiCambio;
  }
}


// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

console.log(`100 € diventano ${calcolaDollariRicevuti(100, 1.08, 5).toFixed(2)} $`);
console.log(`250 € diventano ${calcolaDollariRicevuti(250, 1.08, 5).toFixed(2)} $`);
console.log(`100 € diventano ${calcolaDollariRicevuti(100, 1.12, 0).toFixed(2)} $`);
console.log(`3€ diventano ${calcolaDollariRicevuti(3, 1.08, 5).toFixed(2)} $`);
console.log(`100€ diventano ${calcolaDollariRicevuti(100, 5, 1.08).toFixed(2)} $`);
