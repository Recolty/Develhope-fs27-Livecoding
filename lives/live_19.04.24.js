/* Ordinarlo per nome e far ordinare l'array parallelo */

const names = ["Tommy", "Ragnar", "Walter", "Jessie"];
const surnames = ["Shelby", "Lothbrok", "White", "Pinkman"];

function sort(arr1, arr2) {
  if (arr1.length === arr2.length) {
    const corrispondancy = {};
    arr1 = [...arr1];
    /* così facendo associamo ad arr1 una copia di se stesso, così da non modificare l'array fuori dalla funzione */
    arr2 = [...arr2];
    /* associo i nomi ai cognomi in un oggetto con un ciclo for */
    for (let i = 0; i < arr1.length; i++) {
      corrispondancy[arr1[i]] = arr2[i];
    }
    // console.log(corrispondancy);

    arr1.sort();
    /* svuoto surname riassegnandogli un array vuoto */
    arr2 = [];
    arr1.forEach((el) => arr2.push(corrispondancy[el]));
    /* in ciclo for:
      for (let i = 0; i < arr1.length; i++){
      surname.push(corrispondancy[arr1[i]])
      }
      */
    return [arr1, arr2];
  } else {
    return "The two arrays must have the same length";
  }
}

const namesAndSurnames = sort(names, surnames);
const sortedName = namesAndSurnames[0];
const sortedSurnames = namesAndSurnames[1];

console.log(sortedSurnames);
