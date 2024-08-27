const express = require("express");
const heroes = require("./heroes.js") ;

const server = express()
server.get("/heroes", (req, res) =>{
    res.json(heroes)
} )
const port = 3000;

server.listen(port, () => {
  console.log(`Server opened at port ${port}`);
});


server.get("/heroes/:id", (req, res)=>{
   req.params.id()
})
