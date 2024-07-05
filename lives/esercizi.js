/* INSERITO TUTTO A FUNZIONE COSI' DA COMMENTARE SOLO IL LORO RICHIAMO
E PER POTER FARE LA PROVA CON PIU' PARAMETRI */

/*
 1- Dato un array di numeri, trovare il massimo / minimo
*/

const numbers = [8, 15, 3, 183, 846, 320, 43, 12];

function maximumNumber(numbers) {
  let maxNumber = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }
  console.log(maxNumber);
}

function minimumNumber(numbers) {
  let minNumber = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < minNumber) {
      minNumber = numbers[i];
    }
  }
  console.log(minNumber);
}

/* PER STAMPA */

// maximumNumber(numbers);
// minimumNumber(numbers);

/* 
2- Dato un array di numeri, fare la somma dei numeri
*/

function sumNumbers(numbers) {
  let sumNumbers = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumNumbers += numbers[i];
  }
  console.log(sumNumbers);
}

/* PER STAMPA */

// sumNumbers(numbers)

/* 
3- Dato un array di numeri, fare la media dei numeri
*/

function averageNumber(numbers) {
  let sumNumbers = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumNumbers += numbers[i];
  }
  let avgNumbers = sumNumbers / numbers.length;
  console.log(avgNumbers);
}

/* PER STAMPA */

// averageNumber(numbers)

/*
4- Dato un array di numeri, trovare i numeri pari / dispari
*/

function evenAndOdds(numbers) {
  let evenNumbers = "";
  let oddNumbers = "";
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers += numbers[i] + ", ";
    } else {
      oddNumbers += numbers[i] + ", ";
    }
  }
  console.log(evenNumbers);
  console.log(oddNumbers);
}

/* PER STAMPA */

// evenAndOdds(numbers)

/*
5- Stampare nel terminale la tavola pitagorica dei numeri
*/

/* PER STAMPA */

// const startingNumber = 1

// for (let i = 1; i <= 10; i++) {
//   let tableNumbers = ""
//   for (let n = 1; n <=10; n++) {
//     tableNumbers += startingNumber * n * i + ", "
//   }
//   console.log(tableNumbers)
// }

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

function firstTriangle() {
  for (let i = 0; i < 4; i++) {
    let star = "";

    for (let n = 0; n <= i; n++) {
      star += "*";
    }
    console.log(star);
  }
}

function secondTriangle() {
  for (let i = 0; i < 4; i++) {
    let star = "";

    for (let n = 4; n > i; n--) {
      star += "*";
    }
    console.log(star);
  }
}

function thirdTriangle() {
  for (let i = 4; i > 0; i--) {
    let star = "";

    for (let n = 1; n <= 4; n++) {
      if (n < i) {
        star += " ";
      } else {
        star += "*";
      }
    }
    console.log(star);
  }
}

function fourthTriangle() {
  for (let i = 4; i > 0; i--) {
    let star = "";

    for (let n = 4; n > 0; n--) {
      if (n > i) {
        star += " ";
      } else {
        star += "*";
      }
    }
    console.log(star);
  }
}

/* PER STAMPA */

// firstTriangle()
// console.log("-")
// secondTriangle()
// console.log("-")
// thirdTriangle()
// console.log("-")
// fourthTriangle()

/*
7- Dato un array di numeri, fare la compressione, ovvero tenere dentro i
valori non duplicati,
Esempio: [1,1,2,2,2,2,3,3] diventa [1,2,3]
*/

const toCompress = [1, 1, 2, 2, 2, 2, 2, 3, 3];

function compression(toCompress) {
  for (let i = toCompress.length; i >= 0; i--) {
    for (let n = i--; n >= 0; n--) {
      if (toCompress[n] === toCompress[i] && i != n) {
        toCompress.splice(n, 1);
      }
    }
  }
  console.log(toCompress);
}

/* PER STAMPA */

// compression(toCompress);

/*
8- Dati due array di numeri, trovare l’array intersezione, ovvero l’array
che contiene tutti i numeri che i 2 array hanno in comune,
Esempio: tra [1,2,3,4,5] e [2,2,5,3] l’intersezione è [2,3,5]
*/

const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [2, 3, 5];

function intersect(numbers1, numbers2) {
  const intersectArray = [];

  for (let i = 0; i < numbers1.length; i++) {
    for (let n = 0; n < numbers2.length; n++) {
      if (numbers1[i] == numbers2[n]) {
        intersectArray.push(numbers1[i]);
      }
    }
  }
  console.log(intersectArray);
}
/* PER STAMPA */

intersect(numbers1, numbers2);

/*
9- Dato un intero n stampare a video la sequenza di fibonacci dei primi n
numeri,
Esempio: se n = 8 stampo : 1, 1, 2, 3, 5, 8, 13, 21
*/

const n = 8;

function fibonacci(n) {
  let fibo = 1;
  let nacci = 0;
  let fibonacci = "";

  for (let i = 0; i < n; i++) {
    let sumFibonacci = fibo + nacci;
    fibonacci += `${fibo}, `;
    nacci = fibo;
    fibo = sumFibonacci;
  }

  console.log(fibonacci);
}

/* PER STAMPA */

// fibonacci(n);

/*
10- Dato un intero trovare il fattoriale del numero,
Esempio: fattoriale di 5 è 5*4*3*2*1 uguale a 120, fattoriale di 8 è
8*7*6*5*4*3*2*1
*/

function factorial(n) {
  let factorN = n;

  for (let i = n - 1; i > 0; i--) {
    factorN = factorN * i;
  }

  console.log(factorN);
}

/* PER STAMPA */

// factorial(5);

/*
11- Dato un array di numeri o stringhe, stamparlo al contrario (senza
usare reverse), data una stringa stamparla al contrario
*/

function reversedNumberArray(numbers) {
  let reversedArray = [];
  for (let i = numbers.length - 1; i >= 0; i--) {
    reversedArray.push(numbers[i]);
  }

  console.log(reversedArray);
}

const toBeReversed = "I want to be upside down!";

function reversedString(toBeReversedString) {
  const reversedArrOfString = toBeReversedString.split("");
  let reversedString1 = "";

  for (let i = reversedArrOfString.length - 1; i >= 0; i--) {
    reversedString1 += reversedArrOfString[i];
  }

  console.log(reversedString1);
}

/* PER STAMPA */

// reversedNumberArray(numbers);
// reversedString(toBeReversed);

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

const nomi = ["Stefan", "Tommy", "James"];
const cognomi = ["Mihalache", "Shelby", "Ford"];

function nameAndSurname(nomi, cognomi) {
  for (let i = 0; i < nomi.length; i++) {
    console.log(`${nomi[i]} ${cognomi[i]}`);
  }
}

/* PER STAMPA */

// nameAndSurname(nomi, cognomi)

/*
13- Dato un array di stringhe, trovarmi la stringa con più caratteri
*/

const theBigger = [
  "Partigiano",
  "Plettro",
  "Marea",
  "Valle",
  "Misogenia",
  "Zuzzurellone",
];

function longerLength(theBigger) {
  let longerString = theBigger[0];
  for (let i = 0; i < theBigger.length; i++) {
    if (theBigger[i].length > longerString.length) {
      longerString = theBigger[i];
    }
  }
  console.log(longerString);
}

/* PER STAMPA */

// longerLength(theBigger);

/* 
14- Data una stringa, contare il numero di vocali ( si può usare il metodo
includes )
*/

/* Supporto: il mettere le vocali in un array, io l'avevo messo nell'if in riga 390 con formula && */

const vows = "Lo Scimmiotto di Pietra";

function vowelsNumber(vows) {
  const splittedVows = vows.split("");
  const vowels = ["a", "e", "i", "o", "u"];
  let vowsCount = 0;

  for (let i = 0; i < splittedVows.length; i++) {
    for (let n = 0; n < vowels.length; n++) {
      if (splittedVows[i] === vowels[n]) {
        vowsCount++;
      }
    }
  }
  console.log(vowsCount);
}

/* PER STAMPA*/

// vowelsNumber(vows);

/*
15- Dato un array di stringhe, per ogni stringa dire il numero di vocali e
quello di consonanti
*/

const books = [
  "Journey to the West",
  "Dracula",
  "Necronomicon",
  "Metro 2033",
  "Simon vs the Homosapiens Agenda",
];

function vowAndConsonant(array) {
  for (let i = 0; i < array.length; i++) {
    lettersCount(array[i]);
  }

  function lettersCount(vows) {
    const splittedVows = vows.split("");
    const vowels = ["a", "e", "i", "o", "u"];
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let vowelsCount = 0;
    let spaceAndNumberCount = 0;

    for (let vow of splittedVows) {
      for (let vowel of vowels) {
        if (vow === vowel) {
          vowelsCount++;
        }
      }
      for (let number of numbers) {
        if (vow === number) {
          spaceAndNumberCount++;
        }
      }
      if (vow === " ") {
        spaceAndNumberCount++;
      }
    }
    let consonantsCount =
      splittedVows.length - vowelsCount - spaceAndNumberCount;

    console.log(
      `"${vows}" has ${vowelsCount} vowels and ${consonantsCount} consonants`
    );
  }
}

/* PER STAMPA */

// vowAndConsonant(books);

/*
16- Data una frase (stringa) dire se è palindroma (si ignorano gli spazi),
Esempi di frasi palindrome:
i topi non avevano nipoti
il lavacavalli
amo ridere di roma
*/

const palindrome = "Aibohphobia";
const palindromeSentence = "I topi non avevano nipoti";
const randomSentence = "I'm not a palindrome";

function isPalindrom(palindrome) {
  palindrome = palindrome.toLowerCase();
  const palindromeArr = palindrome.split("");
  const reverseWord = [];

  for (let i = 0; i < palindromeArr.length; i++) {
    if (palindromeArr[i] === " ") {
      palindromeArr.splice(i, 1);
    }
  }

  for (let i = palindromeArr.length; i >= 0; i--) {
    reverseWord.push(palindromeArr[i]);
  }
  /*                            check degli array
  console.log (palindromeArr) 
  console.log (reverseWord)
    */

  const palindromeJoined = palindromeArr.join("");
  const reversedJoined = reverseWord.join("");
  /*                              check delle stringhe
  console.log(palindromeJoined)
  console.log(reversedJoined)
  */

  if (palindromeJoined == reversedJoined) {
    console.log(`"${palindrome}" is a palindrome`);
  } else {
    console.log(`"${palindrome}" is not a palindrome`);
  }
}

/* PER STAMPA */

// isPalindrom(palindrome);
// isPalindrom(palindromeSentence);
// isPalindrom(randomSentence);

/*
17- Dato un array di numeri, ordinarlo in modo crescente o decrescente
(senza usare sort)
Esempio: [4,10,2,20,15,12] in modo crescente diventa [2,4,10,12,15,20]
*/

/* Risolto con supporto, nello specifico:
loop for di n da fare decrescente sennò bug
stampa di elementi in più con ordine scorretto per errore logico derivante da:
riga 530 - 531
*/

/* const numbers = [8, 15, 3, 183, 846, 320, 43, 12]; */

/*                              prima soluzione trovata
function getBigger(numbers) {
  const growing = [numbers[0]];

  for (let i = 1; i < numbers.length; i++) {
    let smaller = true;

    for (let n = growing.length - 1; n >= 0; n--) {
      if (numbers[i] > growing[n]) {
        growing.splice(n + 1, 0, numbers[i]);
        break;
      } else if (numbers[i] < growing[0]) {
        growing.unshift(numbers[i]);
      } else {
        smaller = false;
      }
    }
    if (smaller === false) {
      growing.push[numbers[i]];
    }
  }
  console.log(growing);
}
*/

function getBigger(numbers) {
  const growing = [numbers[0]];

  for (let i = 1; i < numbers.length; i++) {
    let smaller = true;

    for (let n = growing.length - 1; n >= 0; n--) {
      if (numbers[i] > growing[n]) {
        growing.splice(n + 1, 0, numbers[i]);
        smaller = false;
        break;
      }
    }
    if (smaller) {
      growing.unshift(numbers[i]);
    }
  }
  console.log(growing);
}

function getSmaller(numbers) {
  const diminishing = [numbers[0]];

  for (let i = 1; i < numbers.length; i++) {
    let bigger = true;

    for (let n = diminishing.length - 1; n >= 0; n--) {
      if (numbers[i] < diminishing[n]) {
        diminishing.splice(n + 1, 0, numbers[i]);
        bigger = false;
        break;
      }
    }
    if (bigger) {
      diminishing.unshift(numbers[i]);
    }
  }
  console.log(diminishing);
}

/* PER STAMPA */

// getBigger(numbers);
// getSmaller(numbers);

/* 
18- Dato un array di stringhe, ordinarlo in modo crescente o decrescente
(senza usare sort) usando come termine di comparazione la lunghezza
delle stringhe, quindi in modo crescente verrebbe ordinato da quella più
corta a quella più lunga.
*/

/*
const theBigger = [
  "Partigiano",
  "Plettro",
  "Marea",
  "Valle",
  "Misogenia",
  "Zuzzurellone",
];
*/

function ascendingString(theBigger) {
  const fromShortToLong = [theBigger[0]];

  for (let i = 1; i < theBigger.length; i++) {
    let shortest = true;

    for (let n = fromShortToLong.length - 1; n >= 0; n--) {
      if (theBigger[i].length > fromShortToLong[n].length) {
        fromShortToLong.splice(n + 1, 0, theBigger[i]);
        shortest = false;
        break;
      }
    }
    if (shortest) {
      fromShortToLong.unshift(theBigger[i]);
    }
  }
  console.log(fromShortToLong);
}

function descendingString(theBigger) {
  const fromLongToShort = [theBigger[0]];

  for (let i = 1; i < theBigger.length; i++) {
    let longest = true;

    for (let n = fromLongToShort.length - 1; n >= 0; n--) {
      if (theBigger[i].length < fromLongToShort[n].length) {
        fromLongToShort.splice(n + 1, 0, theBigger[i]);
        longest = false;
        break;
      }
    }
    if (longest) {
      fromLongToShort.unshift(theBigger[i]);
    }
  }
  console.log(fromLongToShort);
}

/* PER STAMPA */

// ascendingString(theBigger);
// descendingString(theBigger);

/*
19- date due stringhe, verificare se sono una l’anagramma dell’altra
Esempio: ”trecento” e “cornette” oppure “tornai” e “rinato”
*/

const string1 = "Trecento";
const string2 = "Cornette";
const string3 = "Baluardo";

function anagramOfString(string1, string2) {
  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();
  const splittedString1 = string1.split("");
  const splittedString2 = string2.split("");

  function orderingStringArray(string) {
    const orderedArrey = [string[0]];

    for (let i = 1; i < string.length; i++) {
      let lessValue = true;

      for (let n = orderedArrey.length - 1; n >= 0; n--) {
        if (string[i] > orderedArrey[n]) {
          orderedArrey.splice(n + 1, 0, string[i]);
          lessValue = false;
          break;
        }
      }
      if (lessValue) {
        orderedArrey.unshift(string[i]);
      }
    }
    return orderedArrey;
  }

  const joinedString1 = orderingStringArray(splittedString1).join("");
  const joinedString2 = orderingStringArray(splittedString2).join("");

  if (joinedString1 === joinedString2) {
    console.log(`${string1} is an anagram of ${string2}`);
  } else {
    console.log(`${string1} isn't an anagram of ${string2}`);
  }
}

/* PER STAMPA */

// anagramOfString(string1, string2);
// anagramOfString(string3, string2);
// anagramOfString(string1, string3);

/* 
20- dato un array di stringhe, trovarmi l’acronimo,
Esempio: di [“hello”, “my”, “friends”] l’acronimo è : hmf
*/

const sentence1 = ["hello", "my", "friends"];
const sentence2 = ["The", "Legend", "of", "Drizzt"];

function acronim(sentence) {
  let acronim = "";

  for (let i = 0; i < sentence.length; i++) {
    const sentenceArray = sentence[i].split("");
    acronim += sentenceArray[0];
  }
  console.log(acronim);
}

/* PER STAMPA */

// acronim(sentence1);
// acronim(sentence2);

/*
21- dato un array di numeri o stringhe effettuare la rotazione a sinistra o
destra di n volte,
Esempio: n = 2 verso sinistra di [1,2,3,4,5] diventa [3,4,5,1,2]
*/

const turningNumber = 2;
let toBeTurned = [1, 2, 3, 4, 5];

function turningLeft(turningNumber, toBeTurned) {
  const tempTurned = [];

  for (let i = turningNumber; i < toBeTurned.length; i++) {
    tempTurned.push(toBeTurned[i]);
  }
  for (let i = 0; i < turningNumber; i++) {
    tempTurned.push(toBeTurned[i]);
  }

  toBeTurned = tempTurned;

  console.log(tempTurned);
}

function turningRight(turningNumber, toBeTurned) {
  const tempTurned = [];

  for (let i = toBeTurned.length - turningNumber; i < toBeTurned.length; i++) {
    tempTurned.push(toBeTurned[i]);
  }
  for (let i = 0; i < toBeTurned.length - turningNumber; i++) {
    tempTurned.push(toBeTurned[i]);
  }

  toBeTurned = tempTurned;

  console.log(tempTurned);
}

/* PER STAMPA */

// turningLeft(turningNumber, toBeTurned)
// turningRight(turningNumber, toBeTurned)

/*
22- dati due array di numeri, trovarmi l’array intercalato,
Esempio :
[1,2,3,4,5] e [6,7,8,9,10] diventa [1,6,2,7,3,8,4,9,5,10] mentre di
[1,2,3,4,5] e [6,7] diventa [1,6,2,7,3,4,5]
*/

const firstArray = [1, 2, 3, 4, 5];
const secondArray = [6, 7, 8, 9, 10];
const thirdArray = [6, 7];

function entwinedArray(array1, array2) {
  const entwined = [];

  if (array1.length > array2.length) {
    for (let i = 0; i < array2.length; i++) {
      entwined.push(array1[i]);
      entwined.push(array2[i]);
    }
    for (let i = array2.length; i < array1.length; i++) {
      entwined.push(array1[i]);
    }
  } else if (array1.length < array2.length) {
    for (let i = 0; i < array1.length; i++) {
      entwined.push(array1[i]);
      entwined.push(array2[i]);
    }
    for (let i = array1.length; i < array2.length; i++) {
      entwined.push(array2[i]);
    }
  } else {
    for (let i = 0; i < array1.length; i++) {
      entwined.push(array1[i]);
      entwined.push(array2[i]);
    }
  }
  console.log(entwined);
}

/* PER STAMPA */

// entwinedArray(firstArray, secondArray);
// entwinedArray(firstArray, thirdArray);
// entwinedArray(thirdArray, secondArray);

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

const hatred = [1, 2, 3, 4];

function inception(array) {
  const finalArray = [];
  /* Creating an array where all the final operations will be executed 
  and one for the middle operations */
  const arrayToFinal = [];
  const arrayStartingOps = [];

  let loopNumber = 0;

  /* Creating the twin looping functions (that will loop thanks to loopNumber) */
  function loop1(loopNumber, i) {
    const arrayToPush = [];
    arrayToPush.push(array[i]);

    for (let n = loopNumber; n < array.length; n++) {
      if (i !== n) {
        arrayToPush.push(array[n]);
      }
    }
    arrayToFinal.push([...arrayToPush]);
    arrayStartingOps.push([...arrayToPush]);

    loopNumber++;

    if (loopNumber < array.length - 1) {
      loop2(loopNumber, i);
    }
  }

  function loop2(loopNumber, i) {
    const arrayToPush = [];

    arrayToPush.push(array[i]);
    for (let n = loopNumber; n < array.length; n++) {
      if (i !== n) {
        arrayToPush.push(array[n]);
      }
    }
    arrayToFinal.push([...arrayToPush]);
    arrayStartingOps.push([...arrayToPush]);

    loopNumber++;

    if (loopNumber < array.length - 1) {
      loop1(loopNumber, i);
    }
  }

  /*creating a loop for to iterate the two functions and pushing the array
  on "arrayToFinal" */

  for (let i = 0; i < array.length; i++) {
    loop1(loopNumber, i);
  }

  /* deleting elements to the nested array till their length is 2, pushing to
"arrayToFinal" array every loop */

  for (let i = 0; i < arrayStartingOps.length; i++) {
    const startingSubArray = arrayStartingOps[i];

    for (let n = startingSubArray.length - 1; n > 1; n--) {
      startingSubArray.splice(n, 1);
      arrayToFinal.push([...startingSubArray]);
    }
  }

  /* sorting all the elements of the array "arrayToFinal" */

  for (let i = 0; i < arrayToFinal.length; i++) {
    const finalSubArray = arrayToFinal[i];

    finalSubArray.sort((a, b) => a - b);
  }

  /* pushing in the "finalArray" all the unique elements of "arrayToFinal" */

  for (let i = 0; i < arrayToFinal.length; i++) {
    let unique = true;

    for (let n = 0; n < finalArray.length; n++) {
      if (arrayToFinal[i].join("") === finalArray[n].join("")) {
        unique = false;
        break;
      }
    }
    if (unique) {
      finalArray.push(arrayToFinal[i]);
    }
  }

  /* pushing the single elements of array */

  for (let i = 0; i < array.length; i++) {
    finalArray.push([array[i]]);
  }

  console.log(finalArray);
}

/* PER STAMPA */

// inception(hatred);

/* 
DA QUI IN POI SONO SOLO LE SPOGLIE DELLE MIE VARIE SCONFITTE, 
DA TENERE COME MONITO
*/

// function inception(array) {
//   const inceptedArray = [];

//   const rotation = 1;

//   // for (let i = 0; i < inceptedArray.length; i++) {
//   //   inceptedArray.push([array[i]])
//   // }

//   for (let i = 0; i < array.length; i++) {
//     toBePushedArray = [[array[i]]];

//     repetition1(rotation, toBePushedArray, i);
//   }

//   function repetition1(rotation, toBePushedArray, i) {
//     for (let n = 0; n < array.length; n++) {
//       if (array[n] != array[i] && !toBePushedArray.includes(array[n])) {
//         toBePushedArray.push([array[n]]);
//         const copyToBePushedArray = [...toBePushedArray];
//         inceptedArray.push(copyToBePushedArray);
//       }

//       rotation = rotation + 1;

//       if (rotation < array.length -1) {
//         repetition2(rotation, toBePushedArray, i);
//       }
//     }
//   }
//   function repetition2(rotation, toBePushedArray, i) {
//     for (let n = 0; n < array.length; n++) {
//       if (array[n] != array[i] && !toBePushedArray.includes(array[n])) {
//         toBePushedArray.push([array[n]]);
//         const copyToBePushedArray = [...toBePushedArray];
//         inceptedArray.push(copyToBePushedArray);
//       }

//       rotation = rotation + 1;

//       if (rotation < array.length) {
//         repetition1(rotation, toBePushedArray, i);
//       }
//     }
//   }
//   const sortedInception = inceptedArray.map((subarray) =>
//     subarray.sort((a, b) => a - b)
//   );
//   for (let i = sortedInception.length - 1; i >= 0; i--) {
//     for (let n = 0; n < sortedInception.length; n++) {
//       if (sortedInception[i] === sortedInception[n]) {
//         sortedInception.splice(i, 1);
//       }
//     }
//   }

//   console.log(inceptedArray);
// }

// inception(toBeInceptedArrey);

/*  ---------------------------------------------------------------------- */

// function inception(array) {
//   const inceptedArray = [];

// function factorial(number) {
//   let factorialResult = number;
//   for (let i = 1; i < number; i++) {
//     factorialResult *= i;
//   }
//   return factorialResult;
// }

// factorialLength = factorial(array.length);

/* Creating a variable that will adjust based
 on the loops */
// let rotations = 1;
// let startingLoop = 0;
/* creating a starting array that will be pushed
  in the main one to be the base and 
  a second one that will be spliced within the loop */
// const toPushArray = [];
// const splicedArray = [];
// for (let i = 0; i < array.length; i++) {
//   toPushArray.push(array[i]);
//   splicedArray.push(array[i]);
// }

/* creating two twin function that will loop one other
for the length of the parameter array in order to generate
the sub groups */
// function repetition1(rotations) {
//   for (let n = splicedArray.length - 1; n >= 0; n--) {
//     copySplicedArray = splicedArray.splice(n, 1);
//     splicedArray.splice(n, 1);
//     inceptedArray.push(copySplicedArray);

//     if (rotations + 1 < array.length) {
//       repetition2(rotations + 1);
//     }
//   }
// }

// function repetition2(rotations) {
//   for (let n = splicedArray.length - 1; n >= 0; n--) {
//     splicedArray.splice(n, 1);
//     inceptedArray.push(splicedArray);

//       if (rotations + 1 < array.length) {
//         repetition1(rotations + 1);
//       }
//     }
//   }

//   repetition1(rotations)

//   inceptedArray.push(toPushArray);

//   console.log(inceptedArray);
// }

// inception(toBeInceptedArrey);

// function inception(array) {
//   let inceptedArrey = [];

//   /* Generates the base of the Array,
// creating an array for each element of the original array */
//   for (let i = 0; i < array.length; i++) {
//     inceptedArrey.push([array[i]]);
//   }

//   /* Cloning inceptedArrey */
//   let twinArray = [];
//   for (let i = 0; i < inceptedArrey.length; i++) {
//     twinArray.push([array[i]]);
//   }

//   /* creation of the groups and positioning them in a temp variable
//  to see if there is the same array in inceptedArray */
//   // for (let i = 0; i < inceptedArrey.length; i++) {
//   for (let i = inceptedArrey.length - 1; i >= 0; i--) {
//     const inceptedElement = inceptedArrey[i];

//     for (let n = 0; n < twinArray.length; n++) {
//       let tempArrayToPush = [];
//       const twinElement = twinArray[n];
//       let notPresent = true;

//       for (let z = 0; z < inceptedElement.length; z++) {
//         if (twinElement[0] < inceptedElement[z]) {
//           tempArrayToPush.push(twinElement[0]);
//           tempArrayToPush.push(inceptedElement[z]);
//         } else if (inceptedElement[z] < twinElement[0]) {
//           tempArrayToPush(inceptedElement[z]);
//         } else if (twinElement[0] === inceptedElement[z]) {
//           notPresent = false;
//         }
//       }
//       console.log(tempArrayToPush);
//     }
//   }
// }
//   /* fusing the arrays while ordering them */
//   //for (let i = 0; i < array.lenght; i++) {
//   for (let i = array.length - 1; i >= 0; i--) {
//     let nestedArrey1 = inceptedArrey[i];
//     let layerToString = [];

//     for (let n = array.length - 1; n >= 0; n--) {
//       let nestedArrey2 = inceptedArrey[n];

//       if (n != i && nestedArrey1[0] < nestedArrey2[0]) {
//         layerToString.push([nestedArrey1[0], nestedArrey2[0]]);
//       } else if (n != i && nestedArrey1[0] > nestedArrey2[0]) {
//         layerToString.push([nestedArrey2[0], nestedArrey1[0]]);
//       }
//     }
//     /* creating a clone to layerToString */
//     let twinLayer = [];
//     for (let n = 0; n < layerToString.length; n++) {
//       twinLayer.push(layerToString[n]);
//     }

//     /* transforming in string every elements of the two arrays and
//     comparing them, in order to push just the unique ones. */
//     for (let n = 0; n < layerToString; n++) {
//       const layerElement = layerToString[n]
//       const stringLayer = layerElement.join("");
//       let = isUnique = true;
//       for (let z = 0; z < twinLayer; z++) {
//         const stringTwin = twinLayer[z].join("");
//         if (n != i && stringLayer != stringTwin) {
//           isUnique = false;
//         }
//       }
//       if (isUnique) {
//        inceptedArrey.push(layerToString[0])
//       }
//     }

//     console.log(layerToString[0]);
//   }
//   console.log(inceptedArrey);
// }

// function inception(array) {
//   /* Generates the first group of array with length = array.length -1*/
//   let inceptedArrey = [array];
//   for (let i = array.length - 1; i >= 0; i--) {
//     let firstLayer = [];
//     for (let n = 0; n < array.length; n++) {
//       if (array[i] !== array[n]) {
//         firstLayer.unshift(array[n]);
//       }
//     }
//     inceptedArrey.unshift(firstLayer);
//   }
//   for (let index = inceptedArrey.length - 2; index >= 0; index--) {
//     /* Generates all the other groups */
//     let secondLayer = [];
//     /* This variabile should let me iterate on the nested array */
//     const inceptedLayer = inceptedArrey[index];
//     let unshiftIndex = false;
//     for (let y = 0; y < inceptedLayer.length; y++) {
//       for (let x = 0; x < inceptedLayer.length; x++) {
//         if (inceptedLayer[y] !== inceptedLayer[x]) {
//           secondLayer.unshift(inceptedLayer[x]);
//           unshiftIndex = true;
//         }
//       }
//     }

//     /* Sorting the array for the comparisons */
//     let arrangedSecondLayer = [secondLayer[0]];
//     for (let z = 1; z < secondLayer.length; z++) {
//       let smaller = true;

//       for (let k = arrangedSecondLayer.length - 1; k >= 0; k--) {
//         if (secondLayer[z] > arrangedSecondLayer[k]) {
//           arrangedSecondLayer.splice(k + 1, 0, secondLayer[z]);
//           smaller = false;
//           break;
//         }
//       }
//       if (smaller) {
//         arrangedSecondLayer.unshift(secondArray[z]);
//       }
//       /* comparing the string of the arrays */
//       console.log(arrangedSecondLayer);
//       for (let x = 0; x < toBeInceptedArrey.length; x++) {
//         if (inceptedArrey[x].join("") !== arrangedSecondLayer.join("")) {
//           inceptedArrey.unshift(secondLayer);
//           if (unshiftIndex) {
//             index = index + 1;
//           }
//         }
//       }
//     }
//   }
//   console.log(inceptedArrey); /* Prints the array */
// }
