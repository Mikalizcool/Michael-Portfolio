import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Welcome from './components/Welcome'
import Body from './components/Body'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import Graphicdesign from './pages/Graphicdesign.jsx'
import Homepage from './pages/Homepage.jsx'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Homepage />}></Route>
          <Route path = "/graphicdesign" element= {<Graphicdesign />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
