import React, { useEffect, useState } from 'react'
import { SearchInput } from '../../components'
import * as BooksAPI from "../../BooksAPI"
import { BookShelf } from '../../components';

function SearchPage() {
    const [searchWord, setSearchWord] = useState("");
    const [resultBooks, setResultBooks] = useState([]);
    const [books, setBooks] = useState([])

    //Get All Books have the Search keyword on Initialization by getting all books Fun.
    useEffect(() => {
        getAllBooks()
    }, [searchWord])

    const getAllBooks = async () => {
        await BooksAPI.getAll().then(res => setBooks(res.filter((book) => book.title === searchWord))).catch((e) => console.log(e))
    }
    console.log(books)

    //Get All Books have the Search keyword by search Fun.
    const searchBook = async (query) => {
        setSearchWord(query)
        await BooksAPI.search(query).then((res) => setResultBooks([...res, ...books])).catch((e) => console.log(e))
    }

    //Update Books Shelves
    const updateShelf = async (book, shelfName) => {
        await BooksAPI.update(book, shelfName).catch((e) => console.log(e))
        console.log("Book", book, "Shelf", shelfName)
    }
    console.log(resultBooks)
    return (
        <div className="search-books">
            <SearchInput searchWord={searchWord} onSearch={(e) => searchBook(e.target.value)} />
            {searchWord && <BookShelf shelf="Search Results" books={resultBooks} updateShelf={updateShelf} />}
        </div>
    )
}

export default SearchPage