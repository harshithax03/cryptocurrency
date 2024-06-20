import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav } from './components/Common/Nav'
import { Footer } from './components/Common/Footer'
import { Hero } from './components/LandingPage'
import { Dashboard } from './components/Dashboard';

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

