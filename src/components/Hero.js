import React from 'react'
import './Hero.css'
import blob from '../images/gradient-blob.png'
import Atom from './svg/Atom'
import Biological from './svg/Biological'
import Biology from './svg/Biology'
import Chemistry from './svg/Chemistry'
import DNA from './svg/DNA'
import Mitochondria from './svg/Mitochondria'
import Relativity from './svg/Relativity'
// import ill from '../images/Laboratory-cuate.svg'
// import ill from '../images/Outer space-bro.svg'
import ill from '../images/Science-bro.svg'

function Hero() {
    return (
        <div className='hero'>
            <Atom svgClass='icon icon-1'/>
            <Biological svgClass='icon icon-2' />
            <Biology svgClass='icon icon-3'/>
            <Chemistry svgClass='icon icon-4'/>
            <DNA svgClass='icon icon-5'/>
            <Mitochondria svgClass='icon icon-6'/>
            <Relativity svgClass='icon icon-7'/>

            <div className="hero_title">
                <h1>NZS</h1>
                <h2>Science Club</h2>
                <p>Conserve resources, sustain life, educate humans to be technologically progressive.</p>
            </div>

            <img src={ill} alt=""/>
        </div>
    )
}

export default Hero
