import { Home, LibraryAddCheck, VideoCall } from '@material-ui/icons'
import React from 'react'
import './Sidebar.css'

function Sidebar({ open, handleOpen, handleClose }) {
    return (
        <div className='sidebar'>
            <div className="sidebar_items">
                <div className="sidebar_item">
                    <Home fontSize='large'/>
                </div>
                <div className="sidebar_item">
                    <LibraryAddCheck fontSize='large'/>
                </div>
                <div className="sidebar_item">
                    <VideoCall fontSize='large'/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
