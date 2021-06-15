import React, { useEffect } from 'react'
import './ContentCard.css'
import { Link } from "react-router-dom";
import { MoreHorizRounded } from '@material-ui/icons';

function ContentCard({ type, img, title, desc, tags, timestamp, author, authorImg }) {

    return (
        <div className='card'>

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
    )
}

export default ContentCard
