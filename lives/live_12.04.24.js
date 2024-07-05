/* Creare una funzione che accetti come parametro un array e che accetti una callback.
Si scandisce gli elementi degli array, ad ogni elemento si applichi l'elemento che si trova
nella callback.
*/

function map (arr, callback){
 const newArray = []
 for (let i = 0; i < arr.length; i++) {
  newArray.push(callback(arr[i]))
 }
 return newArray
}

// console.log(map([1, 2, 3],(elemento) => elemento ** 2))
/* ** elevato alla potenza */

function filter (arr, callback) {
  const newArray = []
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]))
    newArray.push(arr[i])
  }
  return newArray
}

// console.log(filter([1, 2, 3], (elemento) => elemento % 2 === 0))

const a = 

console.log(a === null )

