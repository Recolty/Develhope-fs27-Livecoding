const pgPromise = require("pg-promise");
const db = pgPromise()("postgres://postgres:postgres@localhost:5432/fs27");

async function getHeroes () {
const heroes = await db.manyOrNone(`SELECT * FROM heroes`)
return heroes
}

module.exports = {getHeroes}
