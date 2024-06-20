import React from 'react'
import './style.css'
import AnchorTemporaryDrawer from './NavMenu'
import { Button } from '../Button'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div className='nav'>
        <Link to='/' className='link'>

      <h4>Coin Tracker <span>.</span></h4>
      </Link>
      <div className='nav-links'>
        <Link to='/' className='link'>
        <p>Home</p>
        
        </Link>
        <p>Compare</p>
        <Link to="/dashboard" className='link'>
          <Button text="Dashboard" outline={false} />
        </Link>
      </div>
      <div className='nav-menu'>
        <AnchorTemporaryDrawer />

      </div>
    </div>
  )
}
