import React from 'react'
import { Book } from '..'
import propTypes from 'prop-types'
function BookShelf({ shelf, books, updateShelf }) {
    return (
        <div className='container'>
            <div className="bookshelf">
                <h2 className="bookshelf-title my-5 pb-3 fw-bold fs-2">{shelf}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => (
                            <li key={book.id}>
                                <Book id={book.id} title={book.title} authors={book.authors && book.authors.join(", ")} cover={book.imageLinks ? book.imageLinks.thumbnail : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9T4eZdmlbj1NKFcbcizY5I0AkfL6t0qaidw&usqp=CAU"} updateShelf={(e) => updateShelf(book, e.target.value)} shelfValue={book.shelf} />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}

BookShelf.propTypes = {
    shelf: propTypes.string,
    books: propTypes.array,
    updateShelf: propTypes.func,
}

export { BookShelf } 