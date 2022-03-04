import React, { useEffect, useState, useCallback } from 'react'
import { SearchInput, BookShelf } from '../../components'
import * as BooksAPI from "../../BooksAPI"
import _ from "lodash"

function SearchPage() {
    const [searchWord, setSearchWord] = useState("");
    const [resultBooks, setResultBooks] = useState([]);
    const [books, setBooks] = useState([])
    const [error, setError] = useState("")

    //Get All Books have the Search keyword
    const searchBook = async (query) => {
        setSearchWord(query)
        await handleSearch(query)
    }

    const handleSearch = useCallback(
        _.debounce(async (query) => {
            Promise.all(
                //Get All Books from getting books func. By title & Author
                [BooksAPI.getAll().then(res => {
                    let allMainPageBooks = res;
                    let booksWithTitle = allMainPageBooks.filter((book) => book.title.toLowerCase().includes(query))
                    let booksWithAuthor = allMainPageBooks.filter((book) => book.authors.join(" ").toLowerCase().includes(query))
                    setBooks(booksWithTitle.concat(booksWithAuthor))
                    console.log(booksWithTitle.concat(booksWithAuthor))
                }).catch((e) => console.log(e)),

                //Get All Books from searching books func. By title & Author
                BooksAPI.search(query).then((res) => {
                    let searchResultBooks = res;
                    if (searchResultBooks.error){
                        setError("No Reults Found")
                    }else{
                        setResultBooks(searchResultBooks)
                    }
                }).catch((e) => console.log(e))])
        }, 1000),
        []
    );

    //Update Books Shelves
    const updateShelf = async (book, shelfName) => {
        await BooksAPI.update(book, shelfName).catch((e) => console.log(e))
        console.log("Book", book, "Shelf", shelfName)
    }
    console.log(books)
    console.log(resultBooks)
    console.log(_.uniqBy(books.concat(resultBooks), "id"))

    console.log(error)
    return (
        <div className="search-books">
            <SearchInput searchWord={searchWord} onSearch={(e) => searchBook(e.target.value)} />
            {searchWord && (books.length > 0 || resultBooks.length > 0) && <BookShelf shelf="Search Results" books={_.uniqBy(books.concat(resultBooks), "id")} updateShelf={updateShelf} />}
            {searchWord && error && books.length<1 && (
                <div className='container my-5 py-5 text-center'>
                    <p className="text-danger alert-danger py-5 my-5 fw-bold fs-1">{error}</p>
                    </div>
            )
            }
        </div>
    )
}

export default SearchPage