import React from 'react'
import ContentCard from './ContentCard'
import ExploreBtn from './ExploreBtn'
import './CardRow.css'

function CardRow({amount, type, ss}) {
    return (
        <div className="cards">
            {(type === 'article') ? 
                <div className="article-cards">
                {Array.from(new Array(amount)).map((card, index) => {
                  return (
                    <ContentCard
                      type='article'
                      title='Test Card'
                      desc='lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum...'
                      author='AbrarShahriar'
                      authorImg={ss}
                      img={ss}
                      delay={index}
                      timestamp='35 mins ago'
                    />
                  )
                })}
              </div>

              : 

              <div className="news-cards">
                {Array.from(new Array(amount)).map((card, index) => {
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
            }

          <ExploreBtn />
        </div>
    )
}

export default CardRow
