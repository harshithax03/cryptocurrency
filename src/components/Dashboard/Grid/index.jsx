import React from 'react'
import "./style.css"
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';

export const Grid = ({ info }) => {
    return (
        <div className='grid-box'>
            <div className='img-name'>
                <img src={info.image} className='coin-img' />
                <div className='name-info'>
                    <p className='coin-symbol'>{info.symbol} -usd</p>
                    <p className='coin-name'>{info.name}</p>
                </div>
            </div>
            <div className='growth-rate'>
                <p className={`pr ${info.price_change_percentage_24h < 0 ? 'negative' : 'positive'}`}>
                    {info.price_change_percentage_24h.toFixed(2)} %
                </p>
                {info.price_change_percentage_24h > 0 ? (
                    <TrendingUpRoundedIcon className='growth-icon positive'/>
                ) : (
                    <TrendingDownRoundedIcon className='growth-icon negative'/>
                )}
            </div>
            <div className={`price ${info.price_change_percentage_24h < 0 ? 'pn': 'pp'}`}>
                ${info.current_price}
            </div>
            <div className='values'>
                <p>Total Volume : <span>{info.total_volume}</span></p>
                <p>Market Cap : <span>{info.market_cap}</span></p>

            </div>
              
        </div>
    )
}
