import React from 'react'
import './Title.css'
import wave1 from '../images/wave1.3.png'

function Title({ title, iconSrc }) {
    return (
        <div className='title'>
            <img src={iconSrc} alt=""/>
            <h3>{title}</h3>
        </div>
    )
}

export default Title
