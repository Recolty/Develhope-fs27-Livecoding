/* creare una funzione calcolatrice e chiamarla */

function calcolatrice(operazione, numero1, numero2) {
  // const operazione = "*";
  // const numero1 = 1;
  // const numero2 = 2;

  if (operazione === "+") {
    return addizione(numero1, numero2);
  } else if (operazione === "-") {
    return sottrazione(numero1, numero2);
  } else if (operazione === "*") {
    return moltiplicazione(numero1, numero2);
  } else if (operazione === "/") {
    return divisione(numero1, numero2);
  } else {
    return null;
  }
}

function addizione(a, b) {
  return a + b;
}

function sottrazione(a, b) {
  return a - b;
}

function moltiplicazione(a, b) {
  return a * b;
}

function divisione(a, b) {
  if (b === 0) {
    return null
}
return a / b;
}

const risultato = calcolatrice("/", 1, 0);

if (risultato === null) {
  console.log("Attenzione, operazione non valida")
} else {
console.log(risultato)
}