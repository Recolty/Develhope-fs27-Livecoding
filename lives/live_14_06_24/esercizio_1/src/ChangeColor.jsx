import { useState } from "react"
import classes from "./ChangeColor.module.css"

let color = "purple"

export function ChangeColor () {
  // const [color, setColor] = useState("purple")
  function handleColor (event) {
    event.stopPropagation()
    color = event.target.name
    console.log(color)
    // setColor(event.target.name)
  }

  const [toggle, setToggle] = useState(false)


  return (
    <>
    <button name="red" onClick={handleColor}>Red</button>
    <button name="green" onClick={handleColor}>Green</button>
    <button name="blue" onClick={handleColor}>Blue</button>
    <div style={{
      height: "100px",
      width: "200px",
      backgroundColor: color,
    }}></div>
    <button onClick={() => {setToggle(!toggle)}}>toggle</button>
    </>
  )
}