import React, { useEffect, useState } from "react";

function Heroes() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      const response = await fetch("http://localhost:3000/heroes");
      const json = await response.json();
      console.log(json);
      setHeroes(json);
    }
    fetchApi();
  }, []);

  async function deleteCard(id) {
    try {
      const response = await fetch(`http://localhost:3000/heroes/${id}`, {
        method: "DELETE",
      });
      const json = await response.json();
      setHeroes(heroes.filter((hero) => hero.id !== json.id));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="show-cards">
      <h1>HEROES</h1>
      {heroes &&
        heroes.map((hero) => {
          return (
            <div key={hero.id} className="hero-card">
              <button
                className="delete-card"
                onClick={() => deleteCard(hero.id)}
              >
                X
              </button>
              <h2>{hero.name}</h2>
              <p>{hero.age}</p>
            </div>
          );
        })}
    </div>
  );
}
export default Heroes;
