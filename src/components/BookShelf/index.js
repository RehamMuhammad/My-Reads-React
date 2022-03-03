import React from 'react'
import { Book } from '..'

function BookShelf({ shelf }) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    <li>
                        <Book title="tit" authors="au" />

                    </li>
                </ol>
            </div>
        </div>
    )
}

export { BookShelf } 