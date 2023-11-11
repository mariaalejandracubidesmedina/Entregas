import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from "./views/Home.jsx"
import Login from "./views/Login.jsx"
import Register from "./views/register.jsx"
import Navbar from "./components/Navbar.jsx"

import './App.css'

function App() {
 
  return (
    <>
    <Navbar></Navbar>
     <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/login" element={<Login/>}> </Route>
        <Route path="/register" element={<Register/>}> </Route>
      </Routes> 
    </>
  )
}

export default App
