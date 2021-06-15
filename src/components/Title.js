import React from 'react'
import './Title.css'
import wave1 from '../images/wave1.3.png'


function Title({ title }) {
    return (
        <div className='title'>
            <h3>{title}</h3>
        </div>
    )
}

export default Title
