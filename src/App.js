import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from './components/Hero';
import Title from './components/Title';
import { SearchOutlined } from '@material-ui/icons';
import { CircularProgress, useMediaQuery } from '@material-ui/core';
import { screens } from './screens';
import ContentCard from './components/ContentCard';

import ss from './images/ss.png'
import React, { useRef, useEffect } from 'react';
import TopicSelection from './components/TopicSelection';
import bookLogo from './images/book-logo.png'
import articleLogo from './images/article-logo.png'
import newsLogo from './images/news-logo.png'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const dummy = {
  type: 'article',
  title: 'Test Card',
  desc: 'lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum...',
  author: 'AbrarShahriar',
  authorImg: {ss},
  img: {ss},
  timestamp: '35 mins ago',
}

function App() {

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
    <Router>
      <div className="app">
        {/* HEADER */}
        <Header />

        {/* HERO */}
        <Hero />
        <div className="overlay"></div>
        {/* WAVE1 */}
        {/* <svg className='hero-wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill-opacity="1" d="M0,32L80,64C160,96,320,160,480,197.3C640,235,800,245,960,213.3C1120,181,1280,107,1360,69.3L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg> */}

        {/* NEWS(title) + SEARCH */}
        <form ref={titleOneRef} className="news-search title-addtition">
          <Title iconSrc={newsLogo} title='news' />
          {!mobile ?
            <div className="search search_desktop">
              <SearchOutlined />
              <input type="text"/>
            </div>
          :
          <div onClick={handleSearch} className="search search_mobile">
            <SearchOutlined />
          </div>
          }
        </form>
        {/* NEWS CARDS */}
        <div className="cards">
          <div className="news-cards">
            {Array.from(new Array(4)).map((card, index) => {
              return (
                <ContentCard
                  title='Test Card'
                  desc='lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum...'
                  img={ss}
                  timestamp='35 mins ago'
                  delay={index}
                />
              )
            })}
          </div>

          <div className="load_more">
            <span>Explore</span>
            {/* <CircularProgress /> */}
          </div>
        </div>

        {/* ARTICLES(title) + TOPIC Selection */}
        <div ref={titleTwoRef} className="article-topicSelection title-addtition">
          <Title iconSrc={articleLogo} title='articles' />
          <TopicSelection />
        </div>
        {/* ARTICLES */}
        <div className="cards">
          <div className="article-cards">
            {Array.from(new Array(4)).map(card => {
              return (
                <ContentCard
                  type='article'
                  title='Test Card'
                  desc='lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum...'
                  author='AbrarShahriar'
                  authorImg={ss}
                  img={ss}
                  timestamp='35 mins ago'
                />
              )
            })}
          </div>
          <div className="load_more">
            <span>Explore</span>
            {/* <CircularProgress /> */}
          </div>
        </div>
        {/* ARTICLES */}

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
    </Router>
  );
}

export default App;
