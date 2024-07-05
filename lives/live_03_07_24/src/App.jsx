import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'
import {  Users } from './Users'

function App() {

  return (
    <>
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/users">Users</Link>
    </div>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/users" element={<Users />}/>
     </Routes>
    </>
  )
}

export default App
