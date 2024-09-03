const pgPromise = require("pg-promise")

const db = pgPromise()("postgres://postgres:postgres@localhost:5432/f27")

async function getHeroes() {
  const heroes = await db.manyOrNone(
    `SELECT * FROM heroes`
  )

  return heroes
}

async function getHeroById(id) {
  const hero = await db.oneOrNone(
    `SELECT * FROM heroes WHERE id=$1`, [id]
  )

  return hero
}

async function addHero(newHero){
  const createdHero = await db.oneOrNone(
    `INSERT INTO heroes (name, age)
    VALUES ($1, $2)
    RETURNING *`,
    [newHero.name, newHero.age]
  )

  return createdHero
}

module.exports = {getHeroes, getHeroById, addHero}
