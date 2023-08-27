import React, { Children } from 'react'
import "./Button.css"

export const Button = ({ children,onClick }) => {
    return (
        <button onClick={onClick} className='brutal-btn'>
            {children}
        </button>
    )
}
