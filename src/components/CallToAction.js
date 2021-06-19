import { SendOutlined } from '@material-ui/icons'
import React from 'react'
import './CallToAction.css'

function CallToAction() {
    return (
        <div className='call_to_action'>
            <span>Post Your Article Or Book Review <SendOutlined className='call_to_action_icon'/></span>
        </div>
    )
}

export default CallToAction
