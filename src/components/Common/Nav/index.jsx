import React from 'react'
import './style.css'

export const Nav = () => {
  return (
    <div className='nav'>
      <h4>Coin Tracker <span>.</span></h4>
      <div className='nav-links'>
        <p>Home</p>
        <p>Compare</p>
        <p id='dashboard'>Dashboard</p>
      </div>
    </div>
  )
}
