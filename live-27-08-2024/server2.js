const express = require("express");
const heroes = require("./heroes.js") ;


//se la richiesta contiene nell'url heroes ti restituisce tutti gli eroi
const server = express()
server.get("/heroes", (req, res) =>{
    res.json(heroes)
} )


//se la richiesta ha nell'url un id specifico restituisce il singolo eroe
server.get("/heroes/:id", (req, res)=>{
   const id = +req.params.id
   const hero = heroes.find((hero)=> hero.id === id)
   if (hero){
    res.json(hero)
   }else{res.status(404).end()}
})

const port = 3000;

server.listen(port, () => {
  console.log(`Server opened at port ${port}`);
});

//su http si esegue ogni richiesta nella funz principale e noi dobbiamo smistarle
//su express noi creiamo una funzione per ogni diversa richiesta e ogni funzione viene eseguita
//solo se motodo e url coincidono: dobbiamo preoccuparci solo della logica! :)