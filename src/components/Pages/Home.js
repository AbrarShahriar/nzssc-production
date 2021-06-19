import React, { useRef, useEffect } from 'react'
import CardRow from '../CardRow'
import Header from '../Header'
import Hero from '../Hero'
import TitleExtension from '../TitleExtension'
import TopicSelection from '../TopicSelection'
import Search from '../Search'
import { useMediaQuery } from '@material-ui/core';
import { screens } from '../../screens';
import ss from '../../images/ss.png'
import bookLogo from '../../images/book-logo1.png'
import articleLogo from '../../images/article-logo1.png'
import newsLogo from '../../images/news-logo1.png'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Home.css'

gsap.registerPlugin(ScrollTrigger)



function Home({ Extension }) {
    const mobile = useMediaQuery(`(max-width: ${screens.mobile}px)`)

  const titleOneRef = useRef(null)
  const titleTwoRef = useRef(null)

  const handleSearch = () => {}

  useEffect(() => {
    const titleOneDom = titleOneRef.current
    const titleTwoDom = titleTwoRef.current

    const duration = .5

    gsap.from(titleOneDom, {
        x: 50,
        opacity: 0,
        duration,
        scrollTrigger: {
            trigger: titleOneDom,
            start: 'bottom bottom',
            // markers: true
        }
    })

    gsap.from(titleTwoDom, {
        x: -50,
        opacity: 0,
        duration,
        scrollTrigger: {
            trigger: titleTwoDom,
            start: 'bottom bottom',
            // markers: true
        }
    })

  }, [])
  
    return (
        <div className='main'>
        {Extension && <Extension className='side'/>}
        <div className='home'>
            {/* HEADER */}
            <Header />

            {/* HERO */}
            <Hero />
            <div className="overlay"></div>

            {/* NEWS(title) + SEARCH */}
            <form ref={titleOneRef}>
            <TitleExtension 
                title='news' 
                iconSrc={newsLogo} 
                mobile={mobile} 
                Extension={Search}
            />
            </form>
            {/* NEWS CARDS */}
            <CardRow amount={4} ss={ss} />

            {/* ARTICLES(title) + TOPIC Selection */}
            <div ref={titleTwoRef} >
            <TitleExtension 
                title='article'
                iconSrc={articleLogo}
                Extension={TopicSelection}
                mobile={mobile}
            />
            </div>
            {/* ARTICLES */}
            <CardRow type='article' amount={4} ss={ss} />

            {/* BOOK REVIEW(title) */}
            {/* BOOK REVIEW CARDS */}

            {/* 
            COMMITTEE MEMBER(title) as tree 
            MEMBERS (1)
            MEMBERS (2)
            MEMBERS (4)
            MEMBERS (4)
            */}

            {/* FOOTER */}
        </div>
        </div>
    )
}

export default Home
