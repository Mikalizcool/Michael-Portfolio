import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Body from './components/Body'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import Graphicdesign from './pages/Graphicdesign.jsx'
import PersonalProjects from './pages/PersonalProjects.jsx'
import Homepage from './pages/Homepage.jsx'
import ConcernWorldwide from './pages/ConcernWorldwide.jsx';
import HomelandSecurity from './pages/HomelandSecurity.jsx';
import CunyMedicine from './pages/CunySchoolOfMedicine.jsx';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Homepage />}></Route>
          <Route path = "/graphicdesign" element= {<Graphicdesign />}></Route>
          <Route path = "/personalprojects" element= {<PersonalProjects />}></Route>
          <Route path = "/concernworldwide" element= {<ConcernWorldwide />}></Route>
          <Route path = "/homelandsecurity" element= {<HomelandSecurity />}></Route>
          <Route path = "/cunymedicine" element= {<CunyMedicine />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App