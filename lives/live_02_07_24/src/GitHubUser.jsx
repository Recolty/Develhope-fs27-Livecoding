import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export function GitHubUser () {
  const [user, setUser] = useState()
  const {id} = useParams()

  async function fetchUser() {
    const response = await fetch(`https://api.github.com/users/${id}`)
    if (response.ok) {
      const json = await response.json()
      setUser(json)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <div>
      
      {user && (
        <div>
          <img src={user.avatar_url} alt="user" />
          <h3>{user.login}</h3>
          <h1>{user.name}</h1>
        </div>
      )}
    </div>
  )
}