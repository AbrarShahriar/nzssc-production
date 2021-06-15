import React, { useEffect } from 'react'
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
import { useMediaQuery } from '@material-ui/core';
import { screens } from "../screens";
import logo from '../images/blue-logo.svg'
import Aos from "aos";

function Hero() {
    const mobile = useMediaQuery(`(max-width: ${screens.mobile}px)`)

    useEffect(() => {
        Aos.init()
    }, [])

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
                <div className="hero_banner slideLeft">
                    <img id='logo'  src={logo} alt=""/>
                    <div className="banner_text">
                        <h1>NZS</h1>
                        <h2>Science Club</h2>
                    </div>
                </div>
                <p className='subtitle fadeUp'>"Conserve resources, sustain life, educate humans to be technologically progressive."</p>
            </div>

            {!mobile && <img className='zoom' src={ill} alt=""/>}
        </div>
    )
}

export default Hero
