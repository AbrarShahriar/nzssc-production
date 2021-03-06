import React, { useEffect, useRef } from 'react'
import './ContentCard.css'
import { Link } from "react-router-dom";
import { MoreHorizRounded } from '@material-ui/icons';
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Fade from "react-reveal/Fade";

gsap.registerPlugin(ScrollTrigger)

function ContentCard({ type, img, title, desc, tags, timestamp, author, authorImg, delay }) {

    const cardRef = useRef(null)

    useEffect(() => {

        const cardDom = cardRef.current
    
        const duration = .5

        // gsap.from(cardDom, {
        //     y: 50,
        //     opacity: 0,
        //     duration,
        //     delay: delay,
        //     scrollTrigger: {
        //         trigger: cardDom,
        //         start: 'bottom bottom',
        //         toggleActions: 'play none none none',
        //         once: true,
        //         // markers: true,
        //     }
        // })
      }, [])

    return (
        <Fade bottom delay={delay*100}>
        <div ref={cardRef} className={`card ${(type === 'article') && 'article_card'}`}>

            <div className="card_header">
                {img && <img src={img} alt=""/>}
            </div>

            <div className="card_body">
                <h2>
                    <Link>{title}</Link>
                </h2>
                {(type == 'article') && <div className='author_info'>
                    {authorImg && <img src={authorImg} alt=""/>}
                    <span className='author'>{author}</span>
                </div>}
                <span className='timestamp'>{timestamp}</span>
                <p>{desc}</p>
            </div>

            
            <div className="card_action">
                <span className={`${(type == 'article') ? 'article_btn' : 'news_btn'}`}>Read More</span>

                {(type == 'article') && 
                    <MoreHorizRounded />
                }
            </div>

            {tags && 
                <div className="card_info">
                    {tags.map(tag => {
                        <p>{tag}</p>
                    })}
                </div>
            }

        </div>
        </Fade>
    )
}

export default ContentCard
