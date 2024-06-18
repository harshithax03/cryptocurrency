import React from 'react'
import { Button } from '../Common/Button'
import "./style.css"

export const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-text'>
                <h1>Track Crypto</h1>
                <h1 id='diff-txt'>Real Time.</h1>

                <p>Track crypto through a public api in real time.
                    Visit the dashboard to do so!
                </p>

                <div className='btns'>
                <Button text="Dashboard" outline={false} />
                <Button text="Share" outline={true} />
                </div>

            </div>
            <div className='hero-img'>
                Img comes here
            </div>


        </div>
    )
}
