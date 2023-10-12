import React, { type ReactElement, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Signin from './pages/Signin'
import Home from './pages/Home'

function App(): ReactElement {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
