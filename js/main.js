'use strict'; 

/* console.log('sono collegato'); */


let lunghezzaViaggio = prompt ('Quanti chilometri devi percorrere?');
let etaUtente = prompt ('Quanti anni hai?');

let costoBiglietto = 0.21;


/* --il prezzo del biglietto è definito in base ai km (0.21 € al km) */

let prezzoBiglietto = costoBiglietto * lunghezzaViaggio;

/*  console.log(prezzoBiglietto);  */


/* --va applicato uno sconto del 20% per i minorenni */

let percentualeMinorenni = prezzoBiglietto - (prezzoBiglietto * 20 / 100);

/* --va applicato uno sconto del 40% per gli over 65. */

let percentualeMaggiorenni = prezzoBiglietto - (prezzoBiglietto * 40 / 100);

if (etaUtente < 18) {
    /* console.log(percentualeMinorenni); */
    document.getElementById('prezzoMinorenni').value = percentualeMinorenni;
} else if  (etaUtente > 65) {
    /* console.log(percentualeMaggiorenni); */
    document.getElementById('prezzoMaggiorenni').value = percentualeMaggiorenni;
} else {
    document.getElementById('prezzoBiglietto').value = prezzoBiglietto;
} 


console.log(prezzoBiglietto); 

/* document.getElementById('prezzoBiglietto').innerHTML = prezzoBiglietto; */ 


