import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Welcome'
import Body from './Body'

function App() {

  return (
    <>
      <div className="body">
        <Welcome />
      </div>
      <Body />
    </>
  )
}

export default App
