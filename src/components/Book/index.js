import React from 'react'
import { Dropdown } from '..'


function Book({ title, authors, cover }) {
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${cover})` }}></div>
                <Dropdown />
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors}</div>
        </div>
    )
}

export { Book }