import { useEffect, useState } from "react"

export function Form () {
  const [paragraph, setParagraph] = useState()
  useEffect(() => {
    if(paragraph?.length > 6) {
      alert("The word is too long")
    }
  }, [paragraph])

  function handleWriting(event) {
    setParagraph(event.target.value)
  }
  return (
    <>
    <input type="text" onChange={handleWriting}/>
    <p>{paragraph}</p>
    </>
  )
}