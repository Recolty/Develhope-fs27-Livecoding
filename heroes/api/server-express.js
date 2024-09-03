const express = require("express")
const heroes = require("./people.js")
const {getHeroes, getHeroById, addHero} = require("./db.js")

const server = express()
server.use(express.json())

server.get("/heroes", async (req, res) => {
  res.status(200).json(await getHeroes())
})

server.post("/heroes", async (req, res) => {
  const {name, age} = req.body

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
  const {id} = req.params

  // const hero = heroes.find(h => h.id === Number(id))

  const hero = await getHeroById(Number(id))

  if (hero) {
    res.status(200).json(hero)
  } else {
    res.status(404).json({msg: "Hero not found"})
  }
})

server.delete("/heroes/:id", (req, res) => {
  const {id} = req.params

  const deleteHero = heroes.findIndex(hero => hero.id === Number(id))

  if (deleteHero === -1) {
    return res.status(404).json({msg: "Hero not found"})
  }

  const hero = heroes.splice(deleteHero, 1)

  res.status(200).json(hero[0])
})

server.put("/heroes", (req, res) => {
  const editedHero = req.body

  const heroIndex = heroes.findIndex(hero => hero.id === editedHero.id)

  if (heroIndex === -1) {
    res.status(404).end()
  } else {
    heroes[heroIndex] = editedHero
    res.status(200).json(heroes[heroIndex])
  }
})

const port = 3000

server.listen(port, () => {
  console.log(`Server opened at port ${port}`)
})
