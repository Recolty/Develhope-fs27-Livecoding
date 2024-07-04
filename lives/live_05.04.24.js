/* trasformare in formato ore, minuti, secondi */

const totalSeconds = 4000;
const hours = Math.floor(totalSeconds / 3600);
/* 
3600 sono i secondi in un'ora, dividendoli dal tempo vedo quante sono le ore 
in questo caso 1 con resto 400
*/
const minutes = Math.floor((totalSeconds % 3600) / 60);
/* 
si sfrutta il resto del conteggio ore per vedere quanti minuti questi rappresentano,
quindi in questo caso 4000 - 3600 = 400 minuti
come per le ore dividiamo per quanti secondi ci sono in 1 minuto.
in questo caso 6 con resto 40 
*/
const seconds = totalSeconds % 60;
/*
basta trovare il resto del totalSeconds diviso un minuto che è la misura più piccola di
un insieme di secondi
*/

console.log(`Ore: ${hours} Minuti: ${minutes} Secondi: ${seconds}`);

/* operazione inversa */

const hours1 = 2;
const minutes1 = 45;
const seconds1 = 32;

let totalSeconds1 = hours1 * 3600 + minutes1 * 60 + seconds1;
console.log(totalSeconds1);
