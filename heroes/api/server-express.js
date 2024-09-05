const express = require("express")
const heroes = require("./people.js")
const { getHeroes, getHeroById, addHero, deleteHeroById, updateHero } = require("./db.js")
const cors = require("cors")
const server = express()
server.use(express.json())
server.use(cors())
server.get("/heroes", async (req, res) => {
  res.status(200).json(await getHeroes())
})

server.post("/heroes", async (req, res) => {
  const { name, age } = req.body

  // const id = heroes[heroes.length -1].id +1

  // const hero = {
  //   id,
  //   name,
  //   age
  // // }

  // heroes.push(hero)

  // console.log(hero)

  const newHero = await addHero(req.body)

  res.status(201).json(newHero)
})

server.get("/heroes/:id", async (req, res) => {
  const { id } = req.params

  // const hero = heroes.find(h => h.id === Number(id))

  const hero = await getHeroById(Number(id))
  try {
    if (hero) {
      res.status(200).json(hero)
    } else {
      res.status(404).json({ msg: "Hero not found" })
    }
  } catch (error) {
    console.log(error);
    res.status(500).end()
  }
})

server.delete("/heroes/:id", async (req, res) => {
  const { id } = req.params

  const deletedHero = await deleteHeroById(Number(id))

  if (deletedHero) {
    return res.json(deletedHero)
  } else {
    return res.status(404).json({ msg: "Hero not found" })
  }

  /* const deleteHero = heroes.findIndex(hero => hero.id === Number(id))
 
   if (deleteHero === -1) {
     return res.status(404).json({msg: "Hero not found"})
   }
 
   const hero = heroes.splice(deleteHero, 1)
 
   res.status(200).json(hero[0]) */
})

server.put("/heroes", async (req, res) => {
  try {

    const editedHero = req.body

    const updatedHero = await updateHero(editedHero)

    if (updatedHero) {
      res.status(200).json(updatedHero)
    } else {
      res.status(404).end()
    }
  } catch (error) {
    console.log(error);
    res.status(500).end()
  }


});





const port = 3000

server.listen(port, () => {
  console.log(`Server opened at port ${port}`)
})
