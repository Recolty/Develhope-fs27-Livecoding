import { useState } from "react";

export function Users() {
  const [username, setUsername] = useState("")
  const [user, setUser] = useState(null)

  async function fetchUsername() {
    const response = await fetch(`https://api.github.com/users/${username}`)
    if (response.ok) {
      const json = response.json()
      setUser(json)
    }
  }

  return (
    <>
      <h3>Users</h3>
      <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
      <button onClick={fetchUsername}>Search</button>
      {user && <>
      <img src={user.avatar_url} alt="user" /></>}
    </>
  );
}
