import { useContext } from "react"
import NumbersContext from "./NumbersContext"

export function Number({number, index}) {
  const {handleDelete} = useContext(NumbersContext)
  return <div onClick={() => {handleDelete(index)}}>{number}</div>
}