const pgPromise = require("pg-promise")

const db = pgPromise()("postgres://postgres:%Tucano01@localhost:5432/f27")

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

async function deleteHeroById(id) {
  const deletedHero = await db.oneOrNone(
    `DELETE FROM heroes WHERE id=$1
    RETURNING *` , [id]
  )
  return deletedHero
}

async function updateHero(hero) {
  const updateHero = await db.oneOrNone(
  ` UPDATE heroes SET name = $1, age = $2 WHERE id = $3 
    RETURNING *` , [hero.name, hero.age, hero.id]
  )
  return updateHero
}

module.exports = {getHeroes, getHeroById, addHero, deleteHeroById, updateHero}
