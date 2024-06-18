import React from 'react'
import './style.css'
import AnchorTemporaryDrawer from './NavMenu'
import { Button } from '../Button'

export const Nav = () => {
  return (
    <div className='nav'>
      <h4>Coin Tracker <span>.</span></h4>
      <div className='nav-links'>
        <p>Home</p>
        <p>Compare</p>
        <Button text= "DashBoard" outline={false} />
      </div>
      <div className='nav-menu'>
      <AnchorTemporaryDrawer />

      </div>
    </div>
  )
}
