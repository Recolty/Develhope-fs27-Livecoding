import { useEffect, useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(10);
  const [operation, setOperation] = useState("add");

  useEffect(() => {
    const id = handleTimer();

    return () => {
      clearInterval(id);
    };
  }, [timer]);

  function handleOperation() {
    if (operation === "add") {
      setCount((c) => c + 1);
    } else if (operation === "remove"){
      setCount((c) => c - 1)
    }
  }

  function handleTimer() {
    const id = setInterval(() => {
      setTimer((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          clearInterval(id);
          return prev;
        }
      });
    }, 1000);
    return id;
  }

  function handleResetCountdown() {
    setTimer(10);
  }

  function handleSelect(event) {
    setOperation(event.target.value);
  }

  return (
    <>
      <h2>I've counted to {count}</h2>
      <button onClick={handleOperation}>Change</button>
      <select
        name="operation"
        id="operation"
        value={operation}
        onChange={handleSelect}
      >
        <option value="add">Increment</option>
        <option value="remove">Decrement</option>
      </select>
      <h2>Countdown : {timer}</h2>
      <button onClick={handleResetCountdown}>Reset Countdown</button>
    </>
  );
}
