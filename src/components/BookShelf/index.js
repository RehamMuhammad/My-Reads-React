import React from 'react'
import { Book } from '..'
import * as BooksAPI from '../../BooksAPI'



function BookShelf({ shelf, books }) {

    const updateShelfName = async (book, shelf) => {
        await BooksAPI.update(book, shelf)
    }

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">

                    {books.map((book) => (
                        <li key={book.id}>
                            <Book title={book.title} authors={book.authors} cover={book.imageLinks.thumbnail} updateShelf={(e) => updateShelfName(book, e.target.value)} />
                        </li>
                    ))}


                </ol>
            </div>
        </div>
    )
}

export { BookShelf } 