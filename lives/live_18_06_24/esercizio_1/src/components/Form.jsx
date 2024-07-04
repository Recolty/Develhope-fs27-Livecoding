import { useRef, useState } from "react";

export function Form({ addUser }) {
  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        addUser(firstnameRef.current.value, lastnameRef.current.value);
      }}
    >
      <input ref={firstnameRef} type="text" />
      <input ref={lastnameRef} type="text" />
      <button>Iscrizione</button>
    </form>
  );
}
