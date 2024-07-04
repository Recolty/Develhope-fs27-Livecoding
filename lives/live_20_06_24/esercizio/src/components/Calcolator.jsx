import { useRef, useState } from "react"

export function Calcolator() {
  const [firstNumber, setFirstNumber] = useState(0)
  const [secondNumber, setSecondNumber] = useState(0)
  const [operationResult, setOperationResult] = useState(0)

  const operationRef = useRef(null)

  function handleResult() {
    if (operationRef.current?.value === "add") {
      setOperationResult(firstNumber + secondNumber)
    } else if (operationRef.current?.value === "sub") {
      setOperationResult(firstNumber - secondNumber) 
    } else if (operationRef.current?.value === "mul") {
      setOperationResult(firstNumber * secondNumber) 
    } else if (operationRef.current?.value === "div") {
      setOperationResult(firstNumber / secondNumber) 
    }
  }

  return (
    <>
    <input onChange={(event) => {setFirstNumber(+event.target.value)}} type="number" />
    <select name="operations" id="operations" ref={operationRef}>
      <option value="add">+</option>
      <option value="sub">-</option>
      <option value="mul">*</option>
      <option value="div">/</option>
    </select>
    <input onChange={(event) => {setSecondNumber(+event.target.value)}} type="number" />
    <button onClick={handleResult}>=</button>
    <h1>The result is {operationResult}</h1>
    </>
  )
}