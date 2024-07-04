import { useEffect, useState } from "react"
import { Form } from "./components/Form"
import { UsersList } from "./components/UsersList.jsx"
import { Counter } from "./components/Counter.jsx"

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    console.log(users)
  }, [users])

  function addUser(firstname, lastname) {
    const user = {
      firstname,
      lastname,
    }

    setUsers(users => {
      const newUsers = [...users]
      newUsers.push(user)
      return newUsers
    })
  }

  return (
    <>
      <Form addUser={addUser}/>
      <UsersList users={users}/>
      <Counter />
    </>
  )
}

export default App
