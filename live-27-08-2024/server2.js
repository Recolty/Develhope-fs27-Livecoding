const express = require("express");
const heroes = require("./heroes.js") ;


//se la richiesta contiene nell'url heroes ti restituisce tutti gli eroi
const server = express()
server.use(express.json())
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

server.post("/heroes", (req, res) => {
    console.log(req.body)
    const id = heroes[heroes.length -1].id + 1
    heroes.push({...req.body, id})
    res.end()
})

server.delete("/heroes/:id", (req, res)=>{
 const id = +req.params.id;
 const heroIndex = heroes.findIndex((hero)=> hero.id === id)
 if(heroIndex == -1){
  res.status(404).end()
 }else{
  const eliminati = heroes.splice(heroIndex , 1)
  res.status(200).json(eliminati[0])
 }
})


const port = 3000;

server.listen(port, () => {
  console.log(`Server opened at port ${port}`);
});

//su http si esegue ogni richiesta nella funz principale e noi dobbiamo smistarle
//su express noi creiamo una funzione per ogni diversa richiesta e ogni funzione viene eseguita
//solo se motodo e url coincidono: dobbiamo preoccuparci solo della logica! 