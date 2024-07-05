/* creare l'array [4, 5, 8, 7, 15, 13, 16, 17, 23, 25, 42] */

// const arr1 = [4, 8, 15, 16, 23, 42];
// const arr2 = [5, 7, 13, 17, 25, 44, 51, 55];
// const arrTotal = [];

// if (arr1.length > arr2.length) {
//   for (let i = 0; i < arr2.length; i++) {
//     arrTotal.push(arr1[i], arr2[i]);
//   }
//   for (let i = arr2.length; i < arr1.length; i++) {
//     arrTotal.push(arr1[i]);
//   }
// } else {
//   for (let i = 0; i < arr1.length; i++) {
//     arrTotal.push(arr1[i], arr2[i]);
//   }
//   for (let i = arr1.length; i < arr2.length; i++) {
//     arrTotal.push(arr2[i]);
//   }
// }

// console.log(arrTotal);

/* come "semplificare questa formula" */
// let biggerArray = [];
// let smallerArray = [];

// if (arr2.length > arr1.length) {
//   biggerArray = arr2;
//   smallerArray = arr1;
// } else {
//   biggerArray = arr1;
//   smallerArray = arr2;
// }

// for (let i = 0; i < smallerArray.length; i++) {
//   arrTotal.push(smallerArray[i], biggerArray[i]);
// }
// for (let i = smallerArray.length; i < biggerArray.length; i++) {
//   arrTotal.push(biggerArray[i]);
// }

// arrTotal.sort((a, b) => a - b)
/* lo mette in ordine crescente */
// arrTotal.sort((a, b) => b - a)
/* lo mette in ordine decrescente */

// console.log(arrTotal);

/* creare il proprio ciclo di ordinamento con il ciclo for */

let sentence1 = "i topi non avevano nipoti";
let reversedString = sentence1.split("").reverse().join("")
// const array = [];

// for (let i = 0; i < sentence1.length; i++) {
//   array.push(sentence1[i]);
// }

// array.reverse();

// let reversedString = "";

// for (let i = 0; i < array.length; i++) {
//   reversedString += array[i];
// }

// sentence1 = sentence1.toLowerCase();
// reversedString = reversedString.toLowerCase();
// sentence1 = sentence1.replaceAll(" ","")
// reversedString = reversedString.replaceAll(" ","")
sentence1 = sentence1.toLowerCase().replaceAll(" ","");
reversedString = reversedString.toLowerCase().replaceAll(" ","");

if( sentence1 === reversedString) {
  console.log("La frase è palindroma")
} else {
  console.log("La frase non è palindroma")
}

// console.log(sentence1);
// console.log(reversedString);
