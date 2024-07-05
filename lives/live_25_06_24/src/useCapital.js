import { useState } from "react";

export function useCapital() {
  const [capital, setCapital] = useState();

  function handleCapital(string) {
    setCapital(string.toUpperCase());
  }
  

  return {
    capital,
    onCapital: handleCapital,
  };
}
