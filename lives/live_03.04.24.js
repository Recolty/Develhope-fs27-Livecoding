/* Stampa :

 *
 **
 ***
 ****

 */

// const height = 4
// let line = ""
// for (let i = 0; i < height; i++) {
//   line = "";
//   for (let n = 0; n <= i; n++) {
//     line += "*";
//   }
//   console.log(star);
// }

/*--------------------*/
/* Inverti le variabili a e b */

let a = 4;
let b = 8;

const temp = b;
b = a;
a = temp;

console.log(`a: ${a}, b: ${b}`);

/* --------------------- */
/* Stampare il nome, cognome e età di tre array paralleli 
- VECCHIO METODO
*/

const names = ["Luigi", "Mario", "Pasquale"];
const surname = ["Verdi", "Rossi", "Pasqua"];
const ages = [21, 40, 17];

for (let i = 0; i < names.length; i++) {
  console.log(`${names[i]} ${surname[i]}, ${ages[i]} years old`); /* (names[i] + " " + surname[i] + ", " + ages[i] + " years old") */
}

/* Fare lo stesso con un array di oggetti 
- METODO MODERNO
*/

let persons = [
  { name: "Luigi", surname: "Verdi", age: 21 },
  { name: "Mario", surname: "Rossi", age: 40 },
  { name: "Pasquale", surname: "Pasqua", age: 17 },
];

// for (let i = 0; i < persons.length; i++) {
//   console.log(
//     `${persons[i].name} ${persons[i].surname}, ${persons[i].age} years old`
//   );
// }

/* Trovare il più giovane */

let younger = persons[0]
for (let i = 0; i < persons.length; i++) {
  if (persons[i].age < younger.age) {
    younger = persons[i]
  }
}
/*in questo caso younger è uguale a persons[i], quindi è in tutto e per tutto
un oggetto e possiamo richiamare gli elementi seguendo il metodo di richiamo
degli stessi */

console.log(`${younger.name} ${younger.surname} is the youngest`)

/* Esercizio: farlo con Math.min */


