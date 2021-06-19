import { Home, LibraryAddCheck, VideoCall } from '@material-ui/icons'
import React from 'react'
import './Sidebar.css'

function Sidebar({ open }) {
    
    return (
        <div className={`sidebar ${open && 'open'}`}>
            <div className="sidebar_items">
                <div className="sidebar_item">
                    <Home className='sidebar_icon' />
                </div>
                <div className="sidebar_item">
                    <LibraryAddCheck className='sidebar_icon' />
                </div>
                <div className="sidebar_item">
                    <VideoCall className='sidebar_icon' />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
