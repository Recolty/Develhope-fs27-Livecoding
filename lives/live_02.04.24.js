const user = {
  name: "Andrea",
  age: 33,
};

const user1 = {
  name: "Antonio",
  age: 30,
};

function greeting({ name, age }) {
  console.log(`ciao, io mi chiamo ${name} e ho ${age} anni`);
}

greeting(user);
greeting(user1);

const users = [
  { name: "Daniele", age: 18 },
  { name: "Claudia", age: 25 },
  { name: "Andrea", age: 33 },
];

// let sumAge = 0;

// for (let i = 0; i < users.length; i++) {
//   sumAge += users[i].age;
// }

// const averageAge = sumAge / users.length;

// console.log(Math.round(averageAge));

function older(users) {
  let olderUser = users[0];

  for (let user of users) {
    if (user.age > olderUser.age) {
      olderUser = user;
    }
  }
  return olderUser;
}

// console.log(older(users));

function averageAge(users) {
  let sumAge = 0;

  for (let i = 0; i < users.length; i++) {
    sumAge += users[i].age;
  }

  const averageAge = sumAge / users.length;

  return Math.round(averageAge);
}

let middleAgeUser = users[0];
const average = averageAge(users);
let diffMiddleAge = Math.abs(users[0].age - average);

/* Math.abs */
for (let user of users) {
  if (diffMiddleAge > Math.abs(user.age - average)) {
    diffMiddleAge = Math.abs(user.age - average);
    middleAgeUser = user;
  }
}

console.log(middleAgeUser);
