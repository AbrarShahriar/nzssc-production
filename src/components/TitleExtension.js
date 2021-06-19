import React from 'react'
import Title from './Title'
import './TitleExtension.css'

function TitleExtension({ iconSrc, title, mobile, Extension }) {
    return (
        <div className='title-addtition'>
            <Title iconSrc={iconSrc} title={title} />

            {Extension && <Extension mobile={mobile} />}
        </div>
    )
}

export default TitleExtension
