import { useState } from "react";
import { useRef } from "react";

export function Form() {
  const [data, setData] = useState({firstname: "", lastname: ""})
  // const [firstname, setFirstname] = useState("");
  // const [lastname, setLastname] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setData({firstname, lastname})
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="text"
        name="firstname"
        placeholder="Firstname"
        value={data.event}
        onChange={(event) => {
          setData({...data, [event.target.name]: event.target.value});
        }}
      />
      <input
        type="text"
        name="lastname"
        placeholder="Lastname"
        value={data.event}
        onChange={(event) => {
          setData({...data, [event.target.name]: event.target.value});
        }}
      />
      <button>Login</button>
      <p>
        {data.firstname} {data.lastname}
      </p>
    </form>
  );
}
