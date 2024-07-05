import { useState } from "react";
import { Card } from "./components/Card";


function App() {
  const [people, setPeople] = useState([
    { name: "Andrea", surname: "Schiariti" },
    { name: "Beto", surname: "Caprera" },
  ]);

  return (
    <>
      {people.map((person, i) => (
        <Card key={i} person={person} />
      ))}
    </>
  );
}

export default App;
