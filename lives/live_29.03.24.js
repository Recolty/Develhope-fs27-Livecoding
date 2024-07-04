// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let evenNumbers = 0;

// for (let i = numbers.length - 1; i >= 0; i--) {
//   if (numbers[i] % 2 != 0) {
//     console.log(numbers[i]);
//     if (i > 0) {
//       console.log(" - ");
//     }
//   } else {
//     evenNumbers += numbers[i];
//   }
// }
// console.log(evenNumbers);

const n = 10;

let firstNum = 1;
let secondNum = 0;

for (let i = 0; i < n; i++) {
  const sum = firstNum + secondNum;
  console.log(firstNum);
  secondNum = firstNum;
  firstNum = sum;
}
