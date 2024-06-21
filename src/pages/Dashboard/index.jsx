import React, { useEffect, useState } from 'react'
import "./style.css"
import {TabFeature } from '../../components/Dashboard/Tab'
import axios from 'axios'

export const Dashboard = () => {

  const [coins, setCoins] = useState([])
  useEffect( ()=>{
    axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&x_cg_demo_api_key=	CG-6SyUBuN2u5vWc2qhnjQuRWWY'
    )
    .then((response) =>{
      console.log("worked ---", response);
      setCoins(response.data);
    })
    .catch((error)=>{
      console.log("did not work ---", error )
    })

  }, []);



  return (
    <div className='dashboard'>
      <TabFeature data = {coins}/>
    </div>
  )
}
