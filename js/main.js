'use strict'; 

/* console.log('sono collegato'); */

// Elementi della pagina
const discountElement = document.getElementById('discount');
const priceElement = document.getElementById('prezzoBiglietto')

// Elementi della traccia
const prezzoBigliettoPerKm = 0.21;
const percentualeMinorenni = 20;
const percentualeMaggiorenni = 40;

// Elementi dati dall'utente
const chilometri = prompt ('Quanti chilometri devi percorrere?');
const etaUtente = prompt ('Quanti anni hai?');

/* Elementi di base ( prezzo senza sconto, frase senza sconto) */
let prezzoBiglietto = prezzoBigliettoPerKm * chilometri;
let fraseSconto = 'A questo biglietto non verrà applicato alcuno sconto!';

// Eventuali sconti ( cambio il prezzo e la frase)
if (etaUtente < 18) {
   prezzoBiglietto  = prezzoBiglietto - (prezzoBiglietto * percentualeMinorenni / 100 )
   fraseSconto = "Ti è stato applicato lo sconto minorenni"
} else if  (etaUtente > 65) {
    prezzoBiglietto  = prezzoBiglietto - (prezzoBiglietto * percentualeMaggiorenni / 100 )
   fraseSconto =  "Ti è stato applicato lo sconto over 65"
} 

// Inserisco in pagina i testi corretti
discountElement.innerText = fraseSconto;
priceElement.value = prezzoBiglietto.toFixed(2);


