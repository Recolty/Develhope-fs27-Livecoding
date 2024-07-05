const number = [1, 2, 3, 4, 5, 6, 7, 8];
const filteredNumber = number.filter((elemento) => elemento > 5);

// console.log(filteredNumber);

function filter(arr, callback) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

// console.log(filter(number, (element) => element > 5));

function thing(number) {
  if (number >= 0 && number < 20) {
    return "prima fase";
  } else if (number >= 20 && number < 40) {
    return "seconda fase";
  } else {
    return "terza fase";
  }
}

// console.log(thing(40))

// const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const findNumber = numbers1.find((num) => num % 2 !== 0);
// // console.log(findNumber);

// function find(array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i])) {
//       return array[i];
//     }
//   }
// }

// console.log (find(numbers1, (num) => num === 11))

// function some(array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i])) {
//       return true;
//     }
//   }
//   return false
// }

// function all(array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     if (!callback(array[i])) {
//       return false;
//     }
//   }
//   return true
// }

// function none(array, callback) {
//   return !some(array, callback)
// }

const numbers2 = [5, 2, 4, 16, 987, 23];

// console.log(numbers2.sort((a, b) => a - b))

function sort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let n = 0; n < array.length; n++) {
      if (array[i] < array[n]) {
        const tempElement = array[i];
        array[i] = array[n];
        array[n] = tempElement;
      }
    }
  }
  return array;
}

// console.log(sort(numbers2))

const number1 = [0, 4, 8, 15, 16, 23, 42];
const number2 = [0, 15, 15, 23, 23, 23, 23, 1, 42, 42, 42, 80, 83];

// number1.forEach((num) => {
//   let isUnique = false;
//   if (!number2.some((number) => number === num)) {
//     isUnique = true;
//   }
//   if (isUnique) {
//     number3.push(num);
//   }
// });

// number2.forEach((num) => {
//   let isUnique = false;
//   if (!number1.some((number) => number === num)) {
//     isUnique = true;
//   }
//   if (isUnique) {
//     number3.push(num);
//   }
// });

const number3 = number1.filter(
  (number) => !number2.some((value) => value === number)
);

const number4 = number1.filter(
  (number) => number2.filter((n2) => n2 === number).length >= 2
);
/* si usa il filter().length per vede se ci sono più elementi uguali,
con il metodo filter tutti gli elementi uguali verranno inseriti come elementi
di un un unico array. Così facendo cerchiamo la condizione per la quale
ci sono elementi ripetuti nell'array */

/* ESERCIZIO 
provare a stampare ogni elemento ripetuto di number2 presente in number1*/

const number5 = [];

number1
  .filter((number) => number2.filter((n2) => n2 === number).length >= 2)
  .forEach((number) =>
    number2.filter((n2) => n2 === number).forEach((n3) => number5.push(n3))
  );

console.log(number3);
console.log(number4);
console.log(number5);
