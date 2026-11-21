// Traccia 03 · Lo scritto vale doppio
// La consegna è nel README, alla voce "03 · Lo scritto vale doppio".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? calcolaMediaPonderata
  Di quali dati ha bisogno? Ho bisogno del voto dello scritto e dell'orale:
  mi devo ricordare che lo scritto vale il doppio e che quindi dovro moltiplicarlo
  per due prima di sommarlo all'orale e sucessivamente dividerlo per 3.
  Oppure sommare lo scritto due volte piu l'orale e poi dividere per 3.
  Deve restituire qualcosa? si, deve restituire la media finale con un una cifra decimale
  Di che tipo? numbers

  STEPS
  1 -definisco la funzione calcoloMediaPonderata:
  definire due parametri: votoScritto e votoOrale
  2 - dentro la funzione: sommare il votoScritto per due e sommare il votoOrale,
  poi dividere tutto per tre.
  3 - esegui il return del risultato arrotondato a un numero decimale.
*/

// # La funzione
function calcolaMediaPonderata(votoScritto, votoOrale) {
  const media = (votoScritto * 2 + votoOrale) / 3;
  return media;
}



// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

console.log(`La media dei voti e': ${calcolaMediaPonderata(6, 9).toFixed(1)}`);
console.log(`La media dei voti e': ${calcolaMediaPonderata(9, 6).toFixed(1)}`);
console.log(`La media dei voti e': ${calcolaMediaPonderata(8, 6).toFixed(1)}`);
console.log(`La media dei voti e': ${calcolaMediaPonderata(5, 8).toFixed(1)}`);
console.log(`La media dei voti e': ${calcolaMediaPonderata(10, 10).toFixed(1)}`);
