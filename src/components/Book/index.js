import React from 'react'
import { Dropdown } from '..'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'


function Book({id, title, authors, cover, updateShelf, shelfValue }) {
    return (
       
        <div className="book">
            <div className="book-top">
            
                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${cover})` }}></div>
                
                <Dropdown onChange={updateShelf} shelfValue={shelfValue} />
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors}</div>
            <Link to={`book/${id}`} className="know-more d-inline-block text-decoration-none bg-dark main-font-color fw-bold px-2 py-1 mt-2">Know more...</Link>
        </div>
       
    )
}

Book.propTypes ={
    title:propTypes.string,
    id:propTypes.string,
    authors:propTypes.string,
    cover:propTypes.string,
    updateShelf:propTypes.func,
    shelfValue:propTypes.string,
}

export { Book }