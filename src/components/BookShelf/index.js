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
                            <Book title={book.title} authors={book.authors&&book.authors.join(", ")} cover={book.imageLinks ? book.imageLinks.thumbnail : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9T4eZdmlbj1NKFcbcizY5I0AkfL6t0qaidw&usqp=CAU"} updateShelf={(e) => updateShelf(book, e.target.value)} shelfValue={book.shelf} />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export { BookShelf } 