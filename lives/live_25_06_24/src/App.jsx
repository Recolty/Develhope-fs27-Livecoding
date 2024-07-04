import { useEffect, useState } from "react";
import "./App.css";
import { useDouble } from "./useDouble";
import { useCapital } from "./useCapital";
import { useSentences } from "./useSentences";

function App() {
  const [par, setPar] = useState("a");
  const { double, onDouble } = useDouble();
  const { capital, onCapital } = useCapital();
  const { shorterString, longerString, handleSentences } = useSentences([
    "Hello there!",
    "I'm the longest of them all!",
    "Small",
    "Something",
  ]);

  function handleParagraphs(event) {
    setPar(event.target.value);
  }

  function render() {
    if (par === "a") {
      return <p> Paragraph 1</p>;
    } else if (par === "b") {
      return <p> Paragraph 2</p>;
    } else if (par === "c") {
      return <p> Paragraph 3</p>;
    }
  }
  
  return (
    <>
      <select name="paragraph" onChange={handleParagraphs}>
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
      </select>

      {/* {par === "a" ? <p>Paragraph 1</p>: par === "b" ? <p> Paragraph 2</p> : par === "c" ? <p> Paragraph 3</p> : ""} */}
      {render()}

      <input
        type="number"
        placeholder="number to double"
        onChange={(event) => onDouble(+event.target.value)}
      />
      <h2>{double}</h2>

      <input
        type="text"
        placeholder="string to uppercase"
        onChange={(event) => {
          onCapital(event.target.value);
        }}
      />
      <h2>{capital}</h2>

      {longerString && shorterString && (
        <p>{`The longer sentence is "${longerString}", the shorter one is "${shorterString}"`}</p>
      )}
    </>
  );
}

export default App;
