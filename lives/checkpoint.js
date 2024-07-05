const sentence = "Journey to the West";
let countdown = 10;

const numbers = [1, 2, 3, 4, 5, 6];

const sum = numbers.reduce((a, b) => a + b, 0);

// console.log(sum)
// console.log(sum / numbers.length)

function sunAndAvarage(array) {
  const sumArray = array.reduce((a, b) => a + b, 0);
  return { somma: sumArray, media: sumArray / array.length };
}

// console.log(sunAndAvarage(numbers).somma)

const { somma, media } = sunAndAvarage(numbers);

// console.log(somma);

const users = [
  { name: "Andrea", age: 34 },
  { name: "Francesco", age: 17 },
  { name: "Claudia", age: 46 },
];

// console.log(users.find(element =>element.name.length === Math.max(...users.map(el => el.name.length))))

let longerName = users[0]
for (let i = 1; i < users.length; i++){
  if (longerName.name.length < users[i].name.length){
    longerName = users[i]
  }
}

// console.log(longerName)
const users1 = [...users]

users[0].age = 80

console.log(users1.sort((a,b) =>  b.age - a.age))

console.log(users)

/* algoritmo per creare delle deep copy (o clone deep) */