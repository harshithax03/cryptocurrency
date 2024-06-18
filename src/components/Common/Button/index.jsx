import React from 'react'
import "./style.css"

export const Button = ({ text, outline, onClick }) => {
    return (
        <div className={outline ? 'outline-btn' : 'button'}
             onClick={() => onClick()}
        >
            {text}
        </div>
    )
}
