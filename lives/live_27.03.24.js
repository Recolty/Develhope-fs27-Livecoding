// const numbers = [1, 2, 3, 4, 5, 6];

// numbers.forEach((number) => console.log(number));

/* ---------------------------------------- */

// const a = 30;
// const b = 7;

// if (a * b > 100) {
//   console.log(`si`);
// } else {
//   console.log(`no`);
// }

/* ---------------------------------------- */

// const age = 33;

// if (age > 0 && age <= 25) {
//   console.log(`giovane`);
// } else if (age > 25 && age <= 60) {
//   console.log(`adulto`);
// } else if (age > 60 && age <= 100) {
//   console.log(`vecchio`);
// } else {
//   console.log(`age not valid`)
// }

/* ---------------------------------------- */

// function firstUncompletedNote(notes) {
//   return notes.find((note) => note.todos.find((todo) => todo.done === false));
// }

// function firstUncompletedNote(notes) {
//   return notes.find((note) => note.todos.some((todo) => todo.done === false));
// }

// const notes = [
//   {
//     id: 1,
//     description: "Workout program",
//     todos: [
//       {
//         id: 1,
//         name: "Push ups - 10 x 3",
//         done: true,
//       },
//       {
//         id: 2,
//         name: "Abdominals - 20 x 3",
//         done: true,
//       },
//       {
//         id: 3,
//         name: "Tapis Roulant - 15min",
//         done: true,
//       },
//     ],
//   },
//   {
//     id: 2,
//     description: "Front-end Roadmap",
//     todos: [
//       {
//         id: 1,
//         name: "Learn HTML",
//         done: true,
//       },
//       {
//         id: 2,
//         name: "Learn CSS",
//         done: false,
//       },
//       {
//         id: 3,
//         name: "Learn JavaScript",
//         done: true,
//       },
//       {
//         id: 4,
//         name: "Learn Angular",
//         done: false,
//       },
//     ],
//   },
//   {
//     id: 3,
//     description: "My Movies Library",
//     todos: [
//       {
//         id: 1,
//         name: "La città incantata",
//         done: true,
//       },
//       {
//         id: 2,
//         name: "Avatar",
//         done: true,
//       },
//       {
//         id: 3,
//         name: "Titanic",
//         done: false,
//       },
//     ],
//   },
// ];

// const noteInProgress = firstUncompletedNote(notes);
// console.log("All notes: ", notes);
// console.log("First note in progress: ", noteInProgress);

/* ------------------------------------ */

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let finalString = ""

// numbers.forEach((number) => finalString += number + " ");

// console.log(finalString)
// const string1 = `Hello`;
// const string2 = `World`;
// const luckyNumber = 7

// const string3 = `${string1} ${string2} ${luckyNumber}!`;

// console.log(string3);

/* STAMPARE LA TABELLINA DI OGNI NUMERO FINO AL 9 */

const number = 2;
let total = 0;

function table(number) {
  for (i = 0; i < 9; i++) {
    total += number;
    console.log(total);
  }
}

table(number);

/* STAMPARE IL TRIANGOLINO

* 
**
***
****
*****

*/

console.log(`*
**
***
****
*****`)