import React, { useEffect, useState, useRef } from 'react'
import './Header.css'
import logo from '../images/blue-logo.svg'
import { Link } from "react-router-dom";
import { Avatar, Menu, useMediaQuery } from '@material-ui/core';
import { screens } from "../screens";
import banner2 from "../images/banner.png";
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

function Header() {

    const logoRef = useRef(null)
    const logoTextRef = useRef(null)

    const mobile = useMediaQuery(`(max-width: ${screens.mobile}px)`)

    const [show, setShow] = useState(false)

    useEffect(() => {
        const elements = {
            logo: logoRef.current,
            logoText: logoTextRef.current,
        }

        gsap.to(elements.logo, 
        {
            x: -500,
            scrollTrigger: {
                trigger: document.querySelector('.search'),
                start: 'top center+=100',
                toggleActions: 'play none none reverse',
                // markers: true
            }
        }
        )

        // gsap.to(elements.logoText, 
        // {
        //     duration: 1,
        //     y: -200,
        //     opacity: 0,
        //     scrollTrigger: {
        //         trigger: document.querySelector('.search'),
        //         start: 'top center+=100',
        //         toggleActions: 'play none none reverse',
        //         // markers: true
        //     }
        // }
        // )

    }, [])

    return (
        <div className={`header ${show && `header_bg`}`}>
            <div ref={logoRef} className="header_banner">
                <img id='logo'  src={logo} alt=""/>
                <div ref={logoTextRef} className="banner_text">
                    <span className='nzs'>Noakhali Zilla School</span>
                    <span className='sc'>Science Club</span>
                </div>
            </div>
            

            {
            mobile 
                ? 
                <p>menu</p>
                :
                <div className="header_items">
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/join'>Join</Link>
                    <Avatar className='header_avatar'/>
                </div>
            }
        </div>
    )
}

export default Header
