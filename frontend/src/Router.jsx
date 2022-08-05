import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'

// Pages
import Home from './pages/Home/Home'
import Tests from './pages/Tests/Tests'

function Router () {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='tests' element={<Tests />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
