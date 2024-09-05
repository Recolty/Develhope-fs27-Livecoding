import React, { useEffect } from "react"
function Heroes() {
    useEffect(() => {
        async function fetchApi() {
            const response = await fetch("http://localhost:3000/heroes")
            const json = await response.json()
            console.log(json)
        }
        fetchApi()
    }, [])

    return (
        <p>Ciao</p>
    )
}
export default Heroes