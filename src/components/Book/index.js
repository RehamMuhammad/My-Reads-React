import React from 'react'
import { Dropdown } from '..'


function Book({ title, authors, cover, updateShelf }) {
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${cover})` }}></div>
                <Dropdown onChange={updateShelf}  />
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors}</div>
        </div>
    )
}

export { Book }