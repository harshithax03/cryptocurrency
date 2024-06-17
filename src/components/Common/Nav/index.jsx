import React from 'react'
import './style.css'
import AnchorTemporaryDrawer from './NavMenu'

export const Nav = () => {
  return (
    <div className='nav'>
      <h4>Coin Tracker <span>.</span></h4>
      <div className='nav-links'>
        <p>Home</p>
        <p>Compare</p>
        <p id='dashboard'>Dashboard</p>
      </div>
      <div className='nav-menu'>
      <AnchorTemporaryDrawer />

      </div>
    </div>
  )
}
