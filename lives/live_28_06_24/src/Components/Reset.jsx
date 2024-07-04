import { useContext } from "react";
import NumbersContext from "./NumbersContext";

export default function Reset({ hi }) {
  const { handleReset } = useContext(NumbersContext);

  return (
    <>
      <button onClick={handleReset}>Reset</button>
      <button onClick={hi}>Hi</button>
    </>
  );
}
