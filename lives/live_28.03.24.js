// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let toPrint = "";
// let total = "";

// for (let i = 0; i < numbers.length; i++) {
//   toPrint += numbers[i] + " ";
// }

// numbers.forEach((number) => (total += number + " "));

// console.log(toPrint);
// console.log(total);

let sum = "";

for (let i = 1; i <= 10; i++) {
  for (let n = 1; n <= 10; n++) {
    sum = sum + i * n + " ";
  }
  console.log(sum);
  sum = "";
}

// const lato = 5;
// let base = "";

// for (let i = 0; i < lato; i++) {
//   for (let n = 0; n <= i; n++) {
//     base += "*";
//   }
//   console.log(base);
//   base = "";
// }

/* Dato un Array di numeri console.log dei valori al contrario usando un ciclo for. */

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = numbers.length - 1; i >= 0; i --) {
//   console.log(numbers[i]);
// }

// let reversedNumbers = "";

// for (let i = numbers.length - 1; i >= 0; i--) {
//   reversedNumbers += numbers[i] + " ";
// }

// console.log(reversedNumbers);

// const numbers = [1, 2, 3, 4, 5];

// let max = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
// }

// console.log(max);

/* Esercizio 1)
Dato un parametro n costruire la sequenza di fibonacci (la regola per comporre
  la seguenza è il primo numero sommato al secondo)
*/

const n = 10;
let fibo = 1;
let nacci = 0;

// console.log(fibo)

let fibonacci = 0;

let fibonacciString = fibo + ", " + fibonacci + ", "
// let fibonacciString = fibonacci + ", "
for (let i = 0; i <= n; i++) {
  fibonacci = fibo + nacci;
  // console.log(fibonacci)
  fibonacciString += fibonacci + ", ";
  nacci = fibo;
  fibo = fibonacci;
}

console.log(fibonacciString)

/*
  Esercizio 2
stampare il fattoriale di 5 (5 = 5+4+3+2+1) */

const factor = 5;
let factorial = 0;

for (let i = factor - 1; i > 0 && i < factor; i--) {
  if ((i = factor - 1)) {
    factorial = factor * i;
  } else {
    factorial = factorial * i;
  }
}
