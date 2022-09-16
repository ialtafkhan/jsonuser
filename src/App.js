import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Login />} />

      </Routes>
    </BrowserRouter>

//8975225548

  )
}

export default App
