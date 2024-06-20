import React from 'react'
import "./style.css"
import { TabFeature } from '../../components/Dashboard/TabFeature'

export const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='tab'>
      <TabFeature/>
      </div>
    </div>
  )
}
