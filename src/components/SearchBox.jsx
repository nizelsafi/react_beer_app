import React from 'react'
import './SearchBox.css'

const SearchBox = (props) => {

    const {searchTerm, handleInput} = props

    return (
        <div className="searchBox">
            <input type="text" value={searchTerm} onChange={handleInput} placeholder="Start your search..."/>
        </div>
    )
}

export default SearchBox
