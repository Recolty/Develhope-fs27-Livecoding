import { useContext, useState } from "react";
import { Number } from "./Number";
import NumbersContext from "./NumbersContext";

export function Numbers() {
  const { numbers } = useContext(NumbersContext);

 

  return numbers.map((num, index) => (
    <Number
      key={index}
      number={num}
      index={index}
    />
  ));
}
