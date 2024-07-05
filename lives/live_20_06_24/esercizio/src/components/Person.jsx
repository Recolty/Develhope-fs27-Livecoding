import { useEffect, useState } from "react"

export function Person() {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")

  useEffect(() => {
    console.log(`${firstname} ${lastname}`)
  }, [ firstname, lastname])

  return(
    <>
    <input type="text" name="firstname" value={firstname} onChange={(event) => {setFirstname(event.target.value)}}/>
    <input type="text" name="firstname" value={lastname} onChange={(event) => {setLastname(event.target.value)}}/>
    <p>My name is {firstname} {lastname}</p>
    </>
  )
}