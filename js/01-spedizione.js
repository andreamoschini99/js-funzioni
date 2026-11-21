// Traccia 01 · Lo stato della spedizione
// La consegna è nel README, alla voce "01 · Lo stato della spedizione".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? trovaStatoSpedizione
  Di quali dati ha bisogno? i codici 1, 2, 3
  Deve restituire qualcosa? si
  Di che tipo? una stringa

  STEPS
  1 - riceve codiceStato
  2 - controlla se il numero è 1, 2 o 3
  3 - se è 1, 2 o 3 restituisce la stringa corrispondente
  4 - se non è 1, 2 o 3 restituisce una stringa con scritto "codice non riconosciuto"
*/

// # La funzione
function trovaStatoSpedizione(codiceStatoSpedizione) {
  if (codiceStatoSpedizione === 1) {
    return "In elaborazione"
  } else if (codiceStatoSpedizione === 2) {
    return "Spedito"
  } else if (codiceStatoSpedizione === 3) {
    return "Consegnato"
  } else {
    return "Stato sconosciuto"
  }
}



// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
console.log(trovaStatoSpedizione(1)); // In elaborazione
console.log(trovaStatoSpedizione(2)); // Spedito
console.log(trovaStatoSpedizione(3)); // Consegnato
console.log(trovaStatoSpedizione(4)); // Stato sconosciuto
console.log(trovaStatoSpedizione('2')); // Stato sconosciuto

