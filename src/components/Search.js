import { SearchOutlined } from '@material-ui/icons'
import React from 'react'
import './Search.css'

function Search({mobile}) {
    const handleSearch = () => {}
    
    return (
        <>
             {!mobile ?
            <div className="search">
              <SearchOutlined />
              <input type="text"/>
            </div>
            :
            <div onClick={handleSearch} className="search">
                <SearchOutlined />
            </div>
            }
        </>
    )
}

export default Search
