// let fibonacciString = "";

// function fibonacci(number) {
//   let fibo = 1;
//   let nacci = 0;
//   let loop = 0

//   if (loop < number) {
//     loopFibonacci(fibo, nacci, loop, number);
//   }
// }

// function loopFibonacci(fibo, nacci, loop, number) {
//   fibonacciString += `${fibo}, `;
//   const fibonacciSum = fibo + nacci;
//   nacci = fibo;
//   fibo = fibonacciSum;
//   loop++;
//   if (loop < number - 1) {
//     loopFibonacci(fibo, nacci, loop, number);
//   }
// }

// fibonacci(7)

// console.log(fibonacciString)

let fibo = 1;
let nacci = 0;
let fibonacciString = "";

for (let i = 0; i < 7; i++) {
  fibonacciString += `${fibo}, `;
  fibonacciSum = fibo + nacci;
  nacci = fibo;
  fibo = fibonacciSum;
}

// console.log(fibonacciString)

// const names = ["Thommy", "Anakin", "Alan"]
// const surnames = ["Shelby", "Cielocamminante", "Wake"]

// for (let i = 0; i < names.length; i++) {
//   console.log(`${names[i]} ${surnames[i]}`)
// }

function palindrome(string) {
  modifiedString = string.toLowerCase().replaceAll(" ", "");
  reversedString = modifiedString.split("").reverse().join("");

  if (modifiedString === reversedString) {
    console.log(`"${string}" is a palindrome`);
  } else {
    console.log(`"${string} is not a palindrome`);
  }
}

// palindrome("Aibohphobia");
// palindrome("Casa");
// palindrome("I topi non avevano nipoti");


const valerio = "Valerio va in montagna"

console.log(valerio.split(""))
console.log(valerio.split(" "))
console.log(valerio.split("a").join(""))