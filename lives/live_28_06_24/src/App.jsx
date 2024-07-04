import { useContext } from 'react'
import './App.css'
import NumbersContext from './Components/NumbersContext'
import AddNumbers from './Components/AddNumbers'
import CompUno from './Components/CompUno'

function App() {
const {numbers} = useContext(NumbersContext)

function greetings() {
  console.log("Hello, Sono un metodo che deve essere per forza dichiarato in App")
}

  return (
    <>
      <AddNumbers />
      <CompUno hi={greetings} />
     {numbers.map((num, i) => <p key={i}>{num}</p>)}
    </>
  )
}

export default App
