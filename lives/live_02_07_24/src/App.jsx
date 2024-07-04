import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { GitHubUser } from "./GitHubUser";
import { useState } from "react";
import { First } from "./First";
import { About } from "./About";
import { Home } from "./Home";

function App() {
  const [id, setId] = useState("")
  const navigate = useNavigate()
  return (
    <>
      <input type="text" placeholder="Search the Username" value={id} onChange={(event) => setId(event.target.value)}/>
      <button onClick={()=> navigate(`/users/${id}`)}> Search</button>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<GitHubUser />} />
      </Routes>
    </>
  );
}

export default App;
