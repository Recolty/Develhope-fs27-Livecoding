const numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map((number) => number * 2);

// console.log(doubled);

const sum = numbers.reduce((a, number) => a + number, 0);

function a(a, b) {
  return a + b;
}

const b = (a, b) => { return Math.pow(a, b)};

console.log(a(2,3))
console.log(b(2,3))
