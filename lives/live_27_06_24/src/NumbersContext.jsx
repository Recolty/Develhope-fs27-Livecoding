import { createContext, useState } from "react";

const NumbersContext = createContext();

export const NumbersProvider = ({ children }) => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  function handleDelete(index) {
    setNumbers(numbers.filter((n, i) => i !== index))
  }

  return <NumbersContext.Provider value={{numbers, handleDelete}}>{children}</NumbersContext.Provider>;
};

export default NumbersContext
