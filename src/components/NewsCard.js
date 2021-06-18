import React from 'react'
import './NewsCard.css'
import { Link } from 'react-router-dom'

function NewsCard({ img, title, desc, timestamp }) {
    return (
        <div className='news_card'>
            <div className="card_header">
                {img && <img src={img} alt=""/>}
            </div>

            <div className="card_body">
                <h2>
                    <Link>{title}</Link>
                </h2>
                <span className='timestamp'>{timestamp}</span>
                <p>{desc}</p>
            </div>

            
            <div className="card_action">
                <span className=''>Read More</span>
            </div>
        </div>
    )
}

export default NewsCard
