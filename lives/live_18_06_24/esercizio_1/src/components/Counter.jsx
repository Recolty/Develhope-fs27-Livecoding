import { useEffect, useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  const [array, setArray] = useState([]);
  const [sum, setSum] = useState(0);
  const [avarage, setAvarage] = useState(0);
  const [totalMultiply, setTotalMultiply] = useState(0);

  useEffect(() => {
    setSum(array.reduce((a, b) => a + b, 0));
    setTotalMultiply(array.reduce((a, b) => a * b, 1));
  }, [array]);

  useEffect(() => {
    console.log();
    setAvarage(sum / array.length);
  }, [sum]);

  function handleIncrement() {
    setCount((c) => c + 1);
    setArray([...array, count + 1]);
  }

  function handleReset() {
    setCount(0);
    setArray([0]);
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
      <ul>
        {array.map((el, i) => (
          <li key={i}>{el}</li>
        ))}
      </ul>
      <p>
        The sum is {sum}, the avarage is {!avarage? "0": avarage} and the moltiplication of
        each element is {array.length === 0 ? "0": totalMultiply}
      </p>
    </>
  );
}

// somma, media, prodotto totale
// Input numerico e un bottone che inserisce il numero nell'array.
// Ogni volta che inserisci il numero nell'array calcola somma, media e prodotto totale
