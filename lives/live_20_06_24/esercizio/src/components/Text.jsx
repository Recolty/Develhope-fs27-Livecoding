import { useEffect, useState } from "react"

export function Text() {
  const [ text, setText ] = useState("")
  const [ error, setError ] = useState(false)

  function handleInputText(event) {
    setText(event.target.value)
  }

  useEffect(() => {
    if (text.length < 8) {
      setError(true)
    } else {
      setError(false)
    }
  }, [ text ])

  return (
    <>
      <input type="text" onChange={handleInputText} value={text}/>
      {error && <p className="alert">Attenzione, testo non valido</p>}
    </>
  )
}