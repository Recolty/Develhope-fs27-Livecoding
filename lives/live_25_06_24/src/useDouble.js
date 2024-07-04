import { useState } from "react";

export function useDouble() {
  const [double, setDouble] = useState()

  function handleDouble (number) {
    setDouble(number * 2)
  }

  return {
    double,
    onDouble: handleDouble
  }
}