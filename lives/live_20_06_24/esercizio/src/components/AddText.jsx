import { useState } from "react";

export function AddText() {
  const [textToAdd, setTextToAdd] = useState("");
  const [text, setText] = useState("");

  function handleAddText(event) {
    event.preventDefault();
    setText(`${text} ${textToAdd}`);
    setTextToAdd("");
  }

  return (
    <>
      <form action="">
        <input
          type="text"
          value={textToAdd}
          onChange={(event) => {
            setTextToAdd(event.target.value);
          }}
        />
        <button onClick={handleAddText}>Add the text</button>
        <button
          onClick={(event) => {
            event.preventDefault();
            setText("");
          }}
        >
          {" "}
          Reset
        </button>
      </form>
      <p>{text}</p>
    </>
  );
}
