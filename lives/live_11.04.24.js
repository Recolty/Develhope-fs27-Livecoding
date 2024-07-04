// let cowntdown = 0;

// function timer() {
//   cowntdown++;
//   if (cowntdown >= 10) {
//     clearInterval(stop)
//   }
//   console.log(cowntdown);
// }

// const stop = setInterval(timer, 1000);

// console.log(`questo è lo ${stop}`)

/* riprodurre un setInterval con un set Timeout */

// function timer2() {
//   cowntdown++;
//   console.log(cowntdown);
//   if (cowntdown < 10) {
//     setTimeout(timer2, 1000);
//   }
// }

// setTimeout(timer2, 1000);

/* funzione che accetta 4 parametri, 2 numeri e 2 callback. La prima funzione deve essere di successo, la seconda un errore */

// function numcall(num1, num2, successo, errore) {
//   setTimeout(() => {
//     if (num1 > num2) {
//       return successo(num1, num2);
//     } else {
//       return errore(num1, num2);
//     }
//   }, 2000);

//   /* la funzione anonima si può scrivere anche così, al posto della arrow function */
//   setTimeout(function () {
//     if (num1 > num2) {
//       return successo(num1, num2);
//     } else {
//       return errore(num1, num2);
//     }
//   }, 4000);

// }

// numcall(8, 5, callback1, callback2);

// function callback1(a, b) {
//   console.log(`Successo: ${a} > ${b}`);
// }

// function callback2(a, b) {
//   console.log(`Errore: ${a} <= ${b}`);
// }

// function sum(a, b) {
//   return a() + b();
// }

// console.log(
//   sum(
//     function () {
//       return 1;
//     },
//     function () {
//       return 2;
//     }
//   )
// );

const person = {
  name: "Spank",
  age : 52,
  greetings: function () { 
    console.log(`Ciao, mi chiamo ${this.name}`)
  }
}

this.name = "ciao"

const person1 = {
  name: "Ran",
  age : 17,
  greetings: () => { 
    console.log(`Ciao, mi chiamo ${this.name}`)
  }
}

person.greetings()
person1.greetings()