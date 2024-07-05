/* ESERICIZIO 1 Scrivi una funzione JavaScript che prenda in input un array di oggetti, dove ogni oggetto rappresenta un libro con le seguenti proprietà:

title: una stringa che rappresenta il titolo del libro 
author: una stringa che rappresenta l'autore del libro 
genre: una stringa che rappresenta il genere del libro (es. "fiction", "non-fiction", ecc.) 
published: un booleano che indica se il libro è stato pubblicato o meno

La funzione dovrebbe restituire un nuovo array contenente solo i libri che soddisfano le seguenti condizioni:

Il libro è stato pubblicato (proprietà published è true) 
Il libro è di genere fiction (proprietà genre è "fiction") 
Il titolo del libro inizia con la lettera "T" (usa il metodo startsWith())

const books = [ { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "fiction", published: true }, { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "fiction", published: true }, { title: "1984", author: "George Orwell", genre: "fiction", published: false }, { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "fiction", published: true }, { title: "Pride and Prejudice", author: "Jane Austen", genre: "romance", published: true }, { title: "The Lord of the Rings", author: "J.R.R. Tolkien", genre: "fantasy", published: true }, { title: "The Tenant of Wildfell Hall", author: "Anne Bronte", genre: "fiction", published: true }, { title: "The Picture of Dorian Gray", author: "Oscar Wilde", genre: "fiction", published: false } ];

ESERICIZIO 2 Scrivi una funzione calculatePartyExperience che prende in input un array di membri del party e restituisce il totale dei punti esperienza (XP) guadagnati dal party dopo aver completato una missione.

Ogni membro del party è rappresentato da un oggetto con le seguenti proprietà:

name: una stringa che rappresenta il nome del membro del party 
level: un intero che rappresenta il livello del membro del party 
xp: un intero che rappresenta l'XP attuale del membro del party 
questXP: un intero che rappresenta l'XP guadagnato completando la missione

Inoltre, se il livello del membro è 5, viene aggiunto un 20% dell'XP guadagnato completando la missione.

const party = [ { name: "Gorvoth", level: 5, xp: 1000, questXP: 200 }, { name: "Eilif Stonefist", level: 3, xp: 500, questXP: 150 }, { name: "Shadowheart", level: 4, xp: 800, questXP: 250 } ]; */

/* ESERCIZIO 1 */

const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "fiction",
    published: true,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "fiction",
    published: true,
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "fiction",
    published: false,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "fiction",
    published: true,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "romance",
    published: true,
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "fantasy",
    published: true,
  },
  {
    title: "The Tenant of Wildfell Hall",
    author: "Anne Bronte",
    genre: "fiction",
    published: true,
  },
  {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    genre: "fiction",
    published: false,
  },
];

function bookFilter(array) {
  const filteredArray = array.filter(
    (ar) =>
      ar.published === true &&
      ar.genre === "fiction" &&
      ar.title.startsWith("T")
  );
  console.log(filteredArray);
}

// bookFilter(books)

/* ESERCIZIO 2 */

const party = [
  { name: "Gorvoth", level: 5, xp: 1000, questXP: 200 },
  { name: "Eilif Stonefist", level: 3, xp: 500, questXP: 150 },
  { name: "Shadowheart", level: 4, xp: 800, questXP: 250 },
];

function calculatePartyExperience(array) {
  let sumPartyXp = 0;
  array.forEach((ar) => {
    if (ar.level >= 5) {
      sumPartyXp += ar.questXP * 1.2;
    } else {
      sumPartyXp += ar.questXP;
    }
  });
  return sumPartyXp;
}

console.log(calculatePartyExperience(party))
