/*                                  TUTORIAL GIT HUB DI STEFAN

creare repository su githHub

crea cartella su locale con nuovo file

gith init  -  inizializza la repo

(seguire i comandi sulla pagina della repository)

git add .

git commit /m (per committare)

git remote add origin [url]       -         Origin è il nome standard

git push -u (la prima volta va messa la "-u" per creare un collegamento)

- ESTENSIONE GITH GRAPH è utile per vedere l'andamento della repository -

{simulando un lavoro in team, due persone lavorano allo stesso progetto, ognuno con il suo branch}

git branch [nome branch]  -  crea il branch

git checkout [nome branch]    -   sposta sul branch

{lavorerà sul codice fino a fare il commit. In simultanea il secondo lavoratore farà gli stessi passaggi.}

git push -u origin [nome branch]

{ora si passa al remoto}

pull request, modificando titolo e commentandola nel caso

{per convalidare la pull request}

sul proprio terminale:

git fetch --all  {si ricevono tutti i dati del remote}

git checkout [branch da mergiare]

{se si fa la prova e non ci sono conflitti si mergia}

{a questo punto ci sono conflitti nel main branch con il secondo lavoratore}

{il secondo lavoratore fa un pull di main}

git checkout main

git pull

{a questo punto si può o mergiare o fare un rebase}

- MERGE -------------------------------------

{sul main branch}

git merge [nome branch da mergiare]

{risolvere i conflitti}

git add . 

gith merge --continue           -      per far completare il merge

git push origin main

fare la pull request

git fetch --all per vedere le differenze

{su main}

git pull

- REBASE -------------------------------------

{è un comando che ci permette di modificare la storia dei commit. La possiamo spostare, possiamo modificare il nome del commit, eliminarlo.
Unirli etc.... 
l'uso più comune è spostarli}

git rebase -i [nome del commit fino al quale si fa il rebase, escluso il commit in questione oppure il branch che poi si vuole mergiare]
/esempio: git rebase -i main

selezionare "pick"

{risolvere i conflitti}

{provando a pushare il branch in remoto ti dirà che ci sono dei conflitti, quindi pusharlo in maniera forzata perchè risoltio}

git push --force

pull request

{per poi cancellare i branch, a operazione conclusa, in remoto da locale:
git push origin -d [nome branch]
}

*/

/* ESERCIZI JAVASCRIPT: */

/* Creare una funzione operazione che accetta 4 numeri. Deve sommare il prodotto tra i primi due e gli ultimi due.*/

function operazione(a, b, c, d) {
  return somma(prodotto(a, b), prodotto(c, d));
}

function prodotto(a, b) {
  return a * b;
}

function somma(a, b) {
  return a + b;
}

// console.log(operazione(1, 2, 4, 5))

/* crea una funziona dato un numero calcoli l'area del quadrato */

function squareArea(lato) {
  return lato * lato;
}

function squarePerimeter(lato) {
  return lato * 4;
}

function squareDiagonal(lato) {
  return lato * Math.sqrt(2); /* Math.sqrt = radice quadrata */
}

function data(lato) {
  console.log(`Il Perimetro è: ${squarePerimeter(lato)}
l'Area è: ${squareArea(lato)}
la Diagonale è: ${squareDiagonal(lato)}`)
}

data(4)
