/* Crea una funzione che accetta due parametri, un array e un numero 
controllare se il numero è un indice dell'array, se esiste ritorna l'elemento,
sennò ritorna null*/

function check(array, number) {
  if (array[number] !== undefined) {
    return array[number];
  } else {
    console.log("Indice non valido");
    return null;
  }
}

/* si può risolvere con il fattore terziario */
function check2(array, number) {
  return array[number] != undefined ? array[number] : null;
}

const numbers = [1, 2, 3, 4];

// console.log (check(numbers, 4))
// console.log(check2(numbers, 3))
/* Fatto con il metodo di gestione degli errori */

// function check1(array, number) {
//   if (array[number]) {
//     return array[number];
//   } else {
//     throw new Error(`${number} is not a valid index of the array`);
//   }
// }

// function check1Error(array, number, callback) {
//   try {
//     console.log(callback(array, number));
//   } catch (error) {
//     console.log(error);
//   }
// }

// check1Error(numbers, 2, check1);
// check1Error(numbers, 5, check1);

/* Un array di oggetti in cui ogni oggetto rappresenta una macchina con tre proprietà, nome,
targa, anno di immatricolazione */

const cars = [
  { name: "Audi", plate: "AA367AA", year: 1980 },
  { name: "Fiat", plate: "86458834", year: 2006 },
  { name: "Toyota", plate: "CZ567GR", year: 2010 },
];

/* trovare tutte le targhe diverse da una targa italiana */

function checkPlate(array) {
  return array.filter(
    (car) => !/^[A-Z][A-Z][0-9][0-9][0-9][A-Z][A-Z]$/.test(car.plate)
  );
}

function olderCar(array) {
  return array.find(element => element.year == Math.min(...array.map(el => el.year)))
}

// console.log(checkPlate(cars));
console.log(olderCar(cars))
