import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home.jsx"
import Login from "./components/Login.jsx"
import Signup from "./components/Signup.jsx"
import Deck from "./components/Deck.jsx"


export default function App() {
  return (
    <>
    <div id="app">
      <Routes>
        <Route index element={ <Home /> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/deck" element={ <Deck /> } />
      </Routes>
    </div>
    </>
  )
};