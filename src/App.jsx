import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav } from './components/Common/Nav'
import { Footer } from './components/Common/Footer'
import { Hero } from './pages/LandingPage'
import { Dashboard } from './pages/Dashboard';

export const App = () => {
  return (
    <Router>
    <Nav/>
    <Routes>
      <Route path='/' element = {<Hero/>} />
      <Route path='dashboard' element = {<Dashboard/>} />
    </Routes>
    {/* <Footer/> */}
    </Router>
  )
}

