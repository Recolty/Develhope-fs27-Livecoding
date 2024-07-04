const obj = { name: "Domenico", age: 33 };

// console.log(obj.name);
/* si può accedere anche come fosse un array richiamando la chiave nelle quadre */
// console.log(obj["name"]);

obj["number"] = "123";

// console.log(obj);

obj.num = "123";

// console.log(obj);

delete obj.num;
delete obj["number"];

// console.log(obj);

/* creare un oggetto dove segna ogni lettera e quante volte compare */

const sentence = "La montagna mette sete";

let dictionary = {};

for (let i = 0; i < sentence.length; i++) {
  if (dictionary[sentence[i]] === undefined) {
    dictionary[sentence[i]] = 0;
  }
  dictionary[sentence[i]] += 1;
}

// sentence
//   .toLowerCase()
//   .split("")
//   .forEach((element) => {
//     if (dictionary[element] === undefined) {
//       dictionary[element] = 0;
//     }
//     dictionary[element] += 1;
//   });

// console.log(dictionary);

const letters = { a: 1, e: 5, i: 10, o: 6, u: 9 };

const sentences = [
  "La montagna mette sete",
  "Il mare mette fame",
  "A casa del ladro non si ruba",
];
const points = {};
/* trovare la frase che totalizza il maggior numero di punti, sommando i punti delle lettere */

for (let i = 0; i < sentences.length; i++) {
  points[i] = 0;
  const sentence = sentences[i];
  for (let n = 0; n < sentences[i].length; n++) {
    const letter = sentence[n];
    if (letters[letter] !== undefined) {
      points[i] += letters[letter];
    }
  }
}
let results = "";

for (let i = 0; i < sentences.length; i++) {
  if (i < sentences.length - 1) {
    results += sentences[i] + ": " + points[i] + "\n";
  } else {
    results += sentences[i] + ": " + points[i];
  }
}

// console.log(results);

const word1 = ["Carro", "Gatto", "Cane"];
const word2 = ["Elefante", "Sedia", "Tavolo"];

function swap(arr1, arr2) {
  const tempArray = [...arr1];
  arr1.splice(0, arr1.length, ...arr2);
  arr2.splice(0, arr2.length, ...tempArray);
}

swap(word1, word2);

// console.log(word1, word2)

const arr1 = [1, 2, 2, 3, 4, 5];
const arr2 = [2, 2, 5, 3];
const arrRe = [];

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[j]) {
      // if (arrRe.length === 0) {
        // arrRe.push(arr1[i]);
      // } else {
        let isUnique = true;
        for (let n = 0; n < arrRe.length; n++) {
          if (arr1[i] === arrRe[n]) {
            // arrRe.push(arr1[i]);
            isUnique = false;
            break;
          }
        }
        if (isUnique) {
          arrRe.push(arr1[i]);
        }
      // }
    }
  }
}

console.log(arrRe);
