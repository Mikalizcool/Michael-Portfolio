import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Welcome'
import Body from './Body'
import Projects from './Projects'
import Navbar from './Navbar'

function App() {

  return (
    <>
      <div className="body">
        <Navbar />
        <Welcome />
      </div>
      <div className="center">
      <Body />
      <Projects />
      </div>
    </>
  )
}

export default App
