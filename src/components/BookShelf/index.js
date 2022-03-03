import React from 'react'
import { Book } from '..'

function BookShelf({ shelf, books, updateShelf }) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">

                    {books.map((book) => (
                        <li key={book.id}>
                            <Book title={book.title} authors={book.authors&&book.authors.length>1? book.authors.join(", ") : book.authors } cover={book.imageLinks? book.imageLinks.thumbnail:""} updateShelf={(e) => updateShelf(book, e.target.value)} shelfValue={book.shelf} />
                        </li>
                    ))}


                </ol>
            </div>
        </div>
    )
}

export { BookShelf } 