import React from 'react'
import { Book } from '..'

function BookShelf({ shelf, books }) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">

                    {books.map((book) => (
                        <li key={book.id}>
                            <Book title={book.title} authors={book.authors} />
                        </li>
                    ))}


                </ol>
            </div>
        </div>
    )
}

export { BookShelf } 