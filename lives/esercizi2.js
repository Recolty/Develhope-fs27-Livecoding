/* 
1- Dato un array di numeri, trovare il massimo / minimo 
*/

const numbers1 = [6, 2, 3, 8, 13, 24];

function maxMin(array) {
  console.log(`The minimum number in the array is ${Math.min(...array)}`);
  console.log(`The maximum number is ${Math.max(...array)}`);
}

/*
Per Stampa 
*/

// maxMin(numbers1)

/*
2- Dato un array di numeri, fare la somma dei numeri
*/

function sumOfArray(array) {
  console.log(
    `The sum of the numbers in the array is ${array.reduce(
      (a, number) => a + number,
      0
    )}`
  );
}

/*
Per Stampa
*/

// sumOfArray(numbers1);

/*
3- Dato un array di numeri, fare la media dei numeri
*/

function averageNumber(array) {
  const sum = array.reduce((a, numbers) => a + numbers, 0);
  const specificAverage = sum / array.length;
  const average = Math.round(specificAverage);
  console.log(
    `The avarage number of the array is ${average}, specifically ${specificAverage}`
  );
}

/*
Per Stampa
*/

// averageNumber(numbers1)

/*
4- Dato un array di numeri, trovare i numeri pari / dispari
*/

function isEven(number) {
  return number % 2 === 0;
}

function isOdd(number) {
  return number % 2 !== 0;
}

function evenAndOdds(array) {
  const evenNumbers = array.filter((number) => isEven(number));
  const oddNumbers = array.filter((number) => isOdd(number));
  console.log(`The even numbers of the array are: ${evenNumbers}`);
  console.log(`The odd numbers of the array are: ${oddNumbers}`);
}

/*
PER STAMPA
*/

// evenAndOdds(numbers1)

/*
5- Stampare nel terminale la tavola pitagorica dei numeri
*/

let repeatingTable = 1;

function multiples(number) {
  let table = "";
  for (let i = 1; i <= 10; i++) {
    table += `${number * i} `;
  }
  console.log(table);
}

function loopMultiples() {
  multiples(repeatingTable);
  if (repeatingTable === 10) {
    clearInterval(stop);
  }
  repeatingTable++;
}

// const stop = setInterval(loopMultiples, 500);

/*
6- Stampare nel terminale un triangolo di asterischi di lato n di diverse
tipologie :
-
* 
**
***
****
-
****
***
**
*
-
   *
  **
 ***
****
-
****
 ***
  **
   *
*/

let stars = "";
let countdown = 1;
const height = 4;

function triangleHeight() {
  let repetition = 0;
  triangleWidth(repetition);
  console.log(stars);
  stars = "";
  countdown++;
  if (countdown <= height) {
    setTimeout(triangleHeight, 500);
  }
}

function triangleWidth(repetition) {
  stars += "*";
  repetition++;
  if (repetition <= countdown) {
    setTimeout(() => triangleWidth(repetition), 500);
  }
}

function secondTriangleHeight() {
  let repetition = 4;
  secondTriangleWidth(repetition, () => {
    console.log(stars);
    // console.log(`countdown is ${countdown}`)
    stars = "";
    countdown++;
    if (countdown <= height) {
      setTimeout(secondTriangleHeight, 500);
    }
  });
}

function secondTriangleWidth(repetition, callback) {
  stars += "*";
  // console.log(repetition)
  if (repetition > countdown) {
    setTimeout(() => secondTriangleWidth(repetition - 1, callback), 500);
  } else {
    callback();
  }
}

function thirdTriangleHeight() {
  let repetition = 4;
  thirdTriangleWidth(repetition, () => {
    console.log(stars);
    stars = "";
    countdown++;
    if (countdown <= height) {
      setTimeout(thirdTriangleHeight, 500);
    }
  });
}

function thirdTriangleWidth(repetition, callback) {
  if (repetition <= countdown) {
    stars += "*";
  } else {
    stars += " ";
  }
  if (repetition > 1) {
    setTimeout(() => thirdTriangleWidth(repetition - 1, callback), 500);
  } else {
    callback();
  }
}

function forthTriangleHeight() {
  let repetition = 1;
  forthTriangleWidth(repetition, () => {
    console.log(stars);
    stars = "";
    countdown++;
    if (countdown <= height) {
      setTimeout(forthTriangleHeight, 500);
    }
  });
}

function forthTriangleWidth(repetition, callback) {
  if (repetition >= countdown) {
    stars += "*";
  } else {
    stars += " ";
  }
  if (repetition < 4) {
    setTimeout(() => forthTriangleWidth(repetition + 1, callback), 500);
  } else {
    callback();
  }
}

/* 
PER STAMPA
*/

// setTimeout(triangleHeight, 500);
// setTimeout(secondTriangleHeight, 500);
// thirdTriangleHeight()
// forthTriangleHeight()

/*
7- Dato un array di numeri, fare la compressione, ovvero tenere dentro i
valori non duplicati,
Esempio: [1,1,2,2,2,2,3,3] diventa [1,2,3]
*/

const numbers2 = [1, 1, 2, 2, 2, 2, 3, 3];

function compressedArray(array) {
  for (let n = array.length - 1; n >= 0; n--) {
    if (array.slice(0, n).some((arr) => arr === array[n])) {
      array.splice(n, 1);
    }
  }
  console.log(array);
}

/* 
PER STAMPA
*/

// compressedArray(numbers2);

/*
8- Dati due array di numeri, trovare l’array intersezione, ovvero l’array
che contiene tutti i numeri che i 2 array hanno in comune,
Esempio: tra [1,2,3,4,5] e [2,2,5,3] l’intersezione è [2,3,5]
*/

const numbers3 = [1, 2, 3, 4, 5];
const numbers4 = [2, 2, 5, 3];

function intersect(array1, array2) {
  const intersectArray = [];
  array1.forEach((arr1) => {
    if (array2.some((arr2) => arr1 === arr2)) intersectArray.push(arr1);
  });

  for (let i = intersectArray.length - 1; i >= 0; i--) {
    if (intersectArray.slice(0, i).some((int) => int === intersectArray[i])) {
      intersectArray.splice(i, 1);
    }
  }

  console.log(intersectArray);
}

/*
PER STAMPA
*/

// intersect(numbers3, numbers4);

/*
9- Dato un intero n stampare a video la sequenza di fibonacci dei primi n
numeri,
Esempio: se n = 8 stampo : 1, 1, 2, 3, 5, 8, 13, 21
*/

const fibonacciLength = 8;

let fibo = 1;
let nacci = 0;
let fibonacciString = "";

function fibonacci(length) {
  let loops = 0;
  fibonacciLoop(loops, length, fibo, nacci);

  console.log(fibonacciString);
}

function fibonacciLoop(loop, length, fibo, nacci) {
  if (loop < length - 1) {
    const fibonacciTotal = fibo + nacci;
    fibonacciString += `${fibo} ,`;
    nacci = fibo;
    fibo = fibonacciTotal;
    fibonacciLoop(loop + 1, length, fibo, nacci);
  } else {
    fibonacciString += `${fibo}`;
  }
}

/*
PER STAMPA
*/

// fibonacci(fibonacciLength);

/*
10- Dato un intero trovare il fattoriale del numero,
Esempio: fattoriale di 5 è 5*4*3*2*1 uguale a 120, fattoriale di 8 è
8*7*6*5*4*3*2*1
*/

factorialNumber = 8;

let factorialResult = factorialNumber;

function factor(number) {
  let loops = 1;
  multiplying(loops, number);
}

function multiplying(loop, number) {
  factorialResult = factorialResult * loop;
  if (loop < number) {
    multiplying(loop + 1, number);
  } else {
    console.log(factorialResult);
  }
}

/*
PER STAMPA
*/

// factor(factorialNumber);

/*
PER STAMPA
*/

/*
11- Dato un array di numeri o stringhe, stamparlo al contrario (senza
  usare reverse), data una stringa stamparla al contrario
*/

function reverse(item) {
  const reversedArray = [];
  if (typeof item === "string") {
    const itemArray = item.split("");
    itemArray.forEach((element) => reversedArray.unshift(element));
    console.log(reversedArray.join(""));
  } else if (Array.isArray(item)) {
    item.forEach((element) => reversedArray.unshift(element));
    console.log(reversedArray);
  } else {
    throw new Error("Parameter not a string or an array");
  }
}

function reverseErrorManagment(item) {
  try {
    reverse(item);
  } catch (error) {
    console.log(error);
  }
}

const numbers5 = [10, 20, 30, 40, 50];

/*
PER STAMPA
*/

// reverseErrorManagment(numbers5)
// reverseErrorManagment("City of Wonders")
// reverseErrorManagment(2)

/*
12- Dati due array di stringhe collegati in modo posizionale (paralleli),
uno contenente i nomi e l’altro i cognomi, stampare a video “Nome
Cognome”
Esempio:
nomi = [“Stefan”, “Tommy”, “James”]
cognomi = [“Mihalache”, “Shelby”, “Ford”]
l’output sarà:
Stefan Mihalache
Tommy Shelby
James Ford
*/

function parallelsArray(array1, array2) {
  if (array1.length === array2.length) {
    let loops = 0;
    parallelsLoop(array1, array2, loops);
  } else {
    throw new Error("The arrays are not parallels");
  }
}

function parallelsLoop(array1, array2, loop) {
  console.log(`${array1[loop]} ${array2[loop]}`);

  if (loop < array1.length - 1) {
    parallelsLoop(array1, array2, loop + 1);
  }
}

function parallelsManagment(array1, array2) {
  try {
    parallelsArray(array1, array2);
  } catch (error) {
    console.log(error);
  }
}

const nomi = ["Stefan", "Tommy", "James"];
const cognomi = ["Mihalache", "Shelby", "Ford"];
const età = [24, 46, 23, 16];

/*
PER STAMPA
*/

// parallelsManagment(nomi, cognomi)
// parallelsManagment(nomi, età)

/*
13- Dato un array di stringhe, trovarmi la stringa con più caratteri
*/

function longerStringOfArray(array) {
  let longerString = array[0];
  array.forEach((element) => {
    if (element.length > longerString.length) {
      longerString = element;
    }
  });
  console.log(longerString);
}

const movies = [
  "Silent Hill",
  "Blade Runner",
  "Bram Stoker's Dracula",
  "The Lord of The Ring, The Return Of The King",
  "The Ghost of Canterbury",
];

/*
PER STAMPA
*/

// longerStringOfArray(movies);

/*
14- Data una stringa, contare il numero di vocali ( si può usare il metodo
includes )
*/

function vowels(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  console.log(
    string
      .toLowerCase()
      .split("")
      .filter((element) => vowels.includes(element)).length
  );
}

/*
PER STAMPA
*/

// vowels("Almanacco");
// vowels("Odd");

/*
15- Dato un array di stringhe, per ogni stringa dire il numero di vocali e
quello di consonanti
*/

function vowelsAndConsonants(array) {
  const vowel = ["a", "e", "i", "o", "u"];
  const numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  array.forEach((element) => {
    const vowelCount = element
      .toLowerCase()
      .replaceAll(" ", "")
      .split("")
      .filter((el) => vowel.includes(el)).length;
    const consonantCount = element
      .toLowerCase()
      .replaceAll(" ", "")
      .split("")
      .filter((el) => !vowel.includes(el) && !numbersArray.includes(el)).length;

    console.log(
      `${element} has ${vowelCount} vowels and ${consonantCount} consonants`
    );
  });
}

const books = [
  "Dracula",
  "Journey to the West",
  "Shogun",
  "Relentless",
  "The Vampire Interview",
  "Metro 2033",
];

/*
PER STAMPA
*/

// vowelsAndConsonants(books);

/*
16- Data una frase (stringa) dire se è palindroma (si ignorano gli spazi),
Esempi di frasi palindrome:
i topi non avevano nipoti
il lavacavalli
amo ridere di roma
*/

function palindrome(string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof string === "string") {
        const unitedString = string.toLowerCase().replaceAll(" ", "");
        const reverseString = string
          .toLowerCase()
          .replaceAll(" ", "")
          .split("")
          .reverse()
          .join("");

        if (unitedString === reverseString) {
          resolve(`"${string}" is a palindrome`);
        } else {
          reject(`Error: input "${string}" is not a palindrome`);
        }
      } else {
        reject(`Error: input "${string}" is not a string`);
      }
    }, 1000);
  });
}

async function palindromeCheck(string) {
  try {
    const isPalindrome = await palindrome(string);
    console.log(isPalindrome);
  } catch (error) {
    console.log(error);
  }
}

/*
PER STAMPA
*/

// palindromeCheck("Aibohphobia");
// palindromeCheck("Amo ridere di Roma")
// palindromeCheck(2)
// palindromeCheck("La donzelletta vien dalla campagna")

/*
17- Dato un array di numeri, ordinarlo in modo crescente o decrescente
(senza usare sort)
Esempio: [4,10,2,20,15,12] in modo crescente diventa [2,4,10,12,15,20]
*/

function sorting(array, callback) {
  const newArray = [];
  let loop = array.length - 1;
  callback(array, newArray, loop);
  return newArray;
}

function ascending(array1, array2, loop) {
  array2.push(Math.min(...array1));
  array1.splice(array1.indexOf(Math.min(...array1)), 1);

  if (loop > 0) {
    ascending(array1, array2, loop - 1);
  }
}

function descending(array1, array2, loop) {
  array2.unshift(Math.min(...array1));
  array1.splice(array1.indexOf(Math.min(...array1)), 1);

  if (loop > 0) {
    descending(array1, array2, loop - 1);
  }
}

const numbers6 = [4, 10, 2, 20, 15, 12];
const numbers7 = [...numbers6];

/*
PER STAMPA
*/

// console.log(sorting(numbers6, ascending));
// console.log(sorting(numbers7, descending));

/*
18- Dato un array di stringhe, ordinarlo in modo crescente o decrescente
(senza usare sort) usando come termine di comparazione la lunghezza
delle stringhe, quindi in modo crescente verrebbe ordinato da quella più
corta a quella più lunga
*/

function sortingString(array, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (array.every((element) => typeof element === "string")) {
        const newArray = [];
        let loops = array.length - 1;
        callback(array, newArray, loops);
        resolve(newArray);
      } else {
        reject("Error: Not all the elements of the array are strings");
      }
    }, 1000);
  });
}

function ascendingString(array1, array2, loop) {
  const minimumLengthString = Math.min(
    ...array1.map((element) => element.length)
  );
  const index = array1.findIndex(
    (element) => element.length === minimumLengthString
  );
  array2.push(array1[index]);
  array1.splice(index, 1);

  if (loop > 0) {
    ascendingString(array1, array2, loop - 1);
  }
}

function descendingString(array1, array2, loop) {
  const minimumLengthString = Math.min(
    ...array1.map((element) => element.length)
  );
  const index = array1.findIndex(
    (element) => element.length === minimumLengthString
  );
  array2.unshift(array1[index]);
  array1.splice(index, 1);

  if (loop > 0) {
    descendingString(array1, array2, loop - 1);
  }
}

async function sortingCheck(array, callback) {
  try {
    const check = await sortingString(array, callback);
    console.log(check);
  } catch (error) {
    console.log(error);
  }
}

const games1 = [
  "Kingdom Hearts",
  "Call Of Duty",
  "Genshin Impact",
  "Metal Gear Solid",
  "Silent Hill",
  "Resident Evil",
];

const games2 = [...games1];
const games3 = [
  {
    firstGame: "Kingdom Hearts",
    secondGame: "Kingdom Hearts 2",
    thidGame: "Kingdom Hearts 3",
  },
  "Call Of Duty",
  "Genshin Impact",
  "Metal Gear Solid",
  "Silent Hill",
  "Resident Evil",
];

/*
PER STAMPA 
*/

// sortingCheck(games1, ascendingString);
// sortingCheck(games2, descendingString);
// sortingCheck(games3, ascendingString);

/*
19- date due stringhe, verificare se sono una l’anagramma dell’altra
Esempio: ”trecento” e “cornette” oppure “tornai” e “rinato”
*/

function anagram(string1, string2) {
  return new Promise((result, reject) => {
    setTimeout(() => {
      const string1Ordered = string1
        .toLowerCase()
        .replaceAll(" ", "")
        .split("")
        .sort()
        .join("");
      const string2Ordered = string2
        .toLowerCase()
        .replaceAll(" ", "")
        .split("")
        .sort()
        .join("");

      if (string1Ordered === string2Ordered) {
        result(`${string1} is an anagram of ${string2}`);
      } else {
        reject(
          `Error: ${string1} and ${string2} are not the anagram of each other`
        );
      }
    }, 500);
  });
}

async function checkAnagram(string1, string2) {
  try {
    const check = await anagram(string1, string2);
    console.log(check);
  } catch (error) {
    console.log(error);
  }
}

/*
PER STAMPA
*/

checkAnagram("trecento", "cornette");
checkAnagram("Dormitory", "Dirty room")
checkAnagram("Microfono", "Patata")

/*
20- dato un array di stringhe, trovarmi l’acronimo,
Esempio: di [“hello”, “my”, “friends”] l’acronimo è : hmf
*/

function acronim(array) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (array.every((element) => typeof element === "string")) {
        let acronimString = "";
        array.forEach((element) => (acronimString += element.split("")[0]));
        resolve(acronimString);
      } else {
        reject("Error: Wrong array as input");
      }
    }, 500);
  });
}

async function acronimCheck(array) {
  try {
    const check = await acronim(array);
    console.log(check);
  } catch (error) {
    console.log(error);
  }
}

const acronim1 = ["The", "Lord", "of", "the", "Ring"];
const acronim2 = ["Call", "me", "by", "your", "name"];
const acronim3 = ["Eyeshield", 21];

/*
PER STAMPA
*/

// acronimCheck(acronim1)
// acronimCheck(acronim2)
// acronimCheck(acronim3)

/*
21- dato un array di numeri o stringhe effettuare la rotazione a sinistra o
destra di n volte,
Esempio: n = 2 verso sinistra di [1,2,3,4,5] diventa [3,4,5,1,2]
*/

function leftRotation(n, array) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n >= 0 && n < array.length) {
        const removedElement = array.splice(0, n);
        removedElement.forEach((element) => array.push(element));
        resolve(array);
      } else if (n < 0) {
        reject("Error: Number can't be negative");
      } else {
        reject("Error: Number is too big");
      }
    }, 500);
  });
}

function rightRotation(n, array) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n >= 0 && n < array.length) {
        const removedElement = array.splice(array.length - n, n);
        removedElement.forEach((element) => array.unshift(element));
        resolve(array);
      } else if (n < 0) {
        reject("Error: Number can't be negative");
      } else {
        reject("Error: Number is too big");
      }
    }, 500);
  });
}

async function rotationCheck(n, array, callback) {
  try {
    const check = await callback(n, array);
    console.log(check);
  } catch (error) {
    console.log(error);
  }
}

/*
PER STAMPA
*/

// rotationCheck(2, [1, 2, 3, 4, 5], leftRotation)
// rotationCheck(2, [1, 2, 3, 4, 5], rightRotation)
// rotationCheck(-2, [1, 2, 3, 4, 5], leftRotation)
// rotationCheck(6, [1, 2, 3, 4, 5], leftRotation)

/*
22- dati due array di numeri, trovarmi l’array intercalato,
Esempio :
[1,2,3,4,5] e [6,7,8,9,10] diventa [1,6,2,7,3,8,4,9,5,10] mentre di
[1,2,3,4,5] e [6,7] diventa [1,6,2,7,3,4,5]
*/

function entwined(array1, array2) {
  const newArray = [];
  pushing(newArray, array1, array2, 0);
  return newArray;
}

function pushing(newArray, array1, array2, loop) {
  if (loop < array1.length) {
    newArray.push(array1[loop]);
  }
  if (loop < array2.length) {
    newArray.push(array2[loop]);
  }
  if (loop < array1.length || loop < array2.length) {
    pushing(newArray, array1, array2, loop + 1);
  }
}

/*
PER STAMPA
*/

// console.log(entwined([1, 3, 4, 5], [6, 7]));

/*
23- dato un array di numeri, trovare l’array che contiene l’elenco di tutti i
sottoinsiemi di numeri, un sottoinsieme è determinato dagli elementi e
non dall’ordine,
Esempio: [2, 3] è lo stesso di [3, 2]
quindi se abbiamo [1,2,3,4], il risultato è:
[
[1], [2], [3], [4],
[1,2], [1,3], [1,4], [2,3], [2,4], [3,4],
[1,2,3], [1,2,4], [1,3,4], [2,3,4],
[1,2,3,4]
]
quindi un array di array
(non importa che l’ordine sia questo)
*/

function nestedArray(array) {
  const nests = [];
  for (let i = 0; i < array.length; i++) {
    /* creating the base of the array to push */
    const subArray = [];
    let subArrayDimension = 1;
    subArray.push(array[i]);
    nests.push(subArray);
    if (i + subArrayDimension < array.length) {
      subArrayFactory(array, i, subArray, nests, subArrayDimension);
    }
  }
  nests.sort((a, b) => a.length - b.length);
  return nests;
}

function subArrayFactory(array, i, subArray, nests, subArrayDimension) {
  for (let n = i + subArrayDimension; n < array.length; n++) {
    const tempSubArray = [...subArray];
    if (
      !tempSubArray.includes(array[n]) &&
      array[n] > tempSubArray[tempSubArray.length - 1]
    ) {
      tempSubArray.push(array[n]);
      let isDuplicate = false;
      for (let j = 0; j < nests.length; j++) {
        if (isDuplicateArray(tempSubArray, nests[j])) {
          isDuplicate = true;
          break;
        }
      }
      if (!isDuplicate) {
        nests.push(tempSubArray);
      }
      if (n + 1 < array.length) {
        subArrayFactory(array, i, tempSubArray, nests, subArrayDimension + 1);
      }
    }
  }
}

function isDuplicateArray(array1, array2) {
  if (array1.length === array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

const numbers8 = [1, 2, 3, 4, 5];

// console.log(nestedArray(numbers8));
/*
loops that gives me all the first subArrays

function subArrayFactory(array, i, subArray, nests, subArrayDimension) {
  for (let n = i + 1; n < array.length; n++) {
    const tempSubArray = [...subArray]
    tempSubArray.push(array[n]);
    nests.push(tempSubArray)
    }
  }
*/

// function nestedArray(array) {
//   const nests = [];
//   for (let i = 0; i < array.length; i++) {
//     let dimension = 0;
//     if (i + dimension < array.length) {
//       innerLoops(array, nests, dimension, i);
//     }
//   }

//   nests.sort();

//   for (let i = nests.length - 1; i >= 0; i--) {
//     if (nests.slice(0, i).some((el) => isEqual(el, nests[i]))) {
//       nests.splice(i, 1);
//     }
//   }
//   return nests;
// }

// function innerLoops(array, nests, dimension, i) {
//   for (let n = i; n < array.length; n++) {
//     if (n + 1 + dimension <= array.length) {
//       const subArray = [];
//       subArray.push(array[i]);
//       for (let j = n + 1; j < n + 1 + dimension; j++) {
//         subArray.push(array[j]);
//       }
//       nests.push(subArray);
//     }
//     if (dimension < array.length) {
//       innerLoops(array, nests, dimension + 1, i);
//     }
//   }
// }

// function isUnique(array1, array2) {
//   if (array1.length === array2.length) {
//     for (let i = 0; i < array1.length; i++) {
//       if (array1[i] !== array2[i]) {
//         return true;
//       }
//     }
//     return false;
//   } else {
//     return true;
//   }
// }

// console.log(isUnique([1, 4, 3], [1, 4, 3]));
