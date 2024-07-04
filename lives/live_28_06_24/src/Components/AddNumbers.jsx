import { useContext, useState } from "react";
import NumbersContext from "./NumbersContext";

export default function AddNumbers({}) {
  const [inputValue, setInputValue] = useState("");
  const { handleAddNumbers } = useContext(NumbersContext);

  return (
    <form>
      <input
        type="number"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button
        onClick={(event) => {
          event.preventDefault();
          handleAddNumbers(inputValue);
        }}
      >
        {" "}
        Add
      </button>
    </form>
  );
}
