import { createContext, useState } from "react";

const NumbersContext = createContext()

export function NumbersProvider({children})  {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])

  function handleAddNumbers  (input) {
    setNumbers([...numbers, input])
  }

  function handleReset () {
    setNumbers([])
  }
  
  return (
    <NumbersContext.Provider value={{numbers, handleAddNumbers, handleReset} } >
      {children}
    </NumbersContext.Provider>
  )
}

export default NumbersContext

