import React, { useEffect, useState, useRef } from 'react'
import './Header.css'
import logo from '../images/blue-logo.svg'
import { Link } from "react-router-dom";
import { Avatar, Menu, useMediaQuery } from '@material-ui/core';
import { screens } from "../screens";
import banner2 from "../images/banner.png";
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoreHoriz, MoreVert, MoreVertOutlined } from '@material-ui/icons';

gsap.registerPlugin(ScrollTrigger)

function Header() {

    const logoRef = useRef(null)
    const logoTextRef = useRef(null)

    const mobile = useMediaQuery(`(max-width: ${screens.mobile}px)`)

    useEffect(() => {
        

    }, [])

    return (
        <>
            {
            mobile 
                ? 
                <div className="mobile_nav">
                    <MoreVert className="nav_icon" />
                </div>
                :
                <div className="header">
                    <div className="header_items">
                        <div className="header_item">
                            <div className="item_bg"></div>
                            <Link to='/'>Home</Link>
                        </div>
                        <div className="header_item">
                            <div className="item_bg"></div>
                            <Link to='/about'>About</Link>
                        </div>
                        <div className="header_item">
                            <div className="item_bg"></div>
                            <Link to='/contact'>Contact</Link>
                        </div>
                        <div className="header_item">
                            <div className="item_bg"></div>
                            <Link to='/join'>Join</Link>
                        </div>
                        <Avatar className='header_avatar'/>
                    </div>
                </div>
            }
        </>
    )
}

export default Header
