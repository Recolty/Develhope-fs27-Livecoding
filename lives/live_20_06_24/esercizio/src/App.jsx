import { Calcolator } from "./components/Calcolator";
import { Person } from "./components/Person";
import { Text } from "./components/Text";
import "./App.css"
import { AddText } from "./components/AddText";

function App() {
  return (
    <>
      <Calcolator />
      <Person />
      <Text />
      <AddText />
    </>
  );
}

export default App;
