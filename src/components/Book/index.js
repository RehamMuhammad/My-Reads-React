import React from 'react'
import { Dropdown } from '..'
import propTypes from 'prop-types'


function Book({ title, authors, cover, updateShelf, shelfValue }) {
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${cover})` }}></div>
                <Dropdown onChange={updateShelf} shelfValue={shelfValue} />
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors}</div>
        </div>
    )
}

Book.propTypes ={
    title:propTypes.string,
    authors:propTypes.string || propTypes.array,
    cover:propTypes.string,
    updateShelf:propTypes.func,
    shelfValue:propTypes.string,
}

export { Book }