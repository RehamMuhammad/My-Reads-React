import React, { useEffect, useState } from 'react'
import { SearchInput } from '../../components'
import * as BooksAPI from "../../BooksAPI"
import { BookShelf } from '../../components';

function SearchPage() {
    const [searchWord, setSearchWord] = useState("");
    const [resultBooks, setResultBooks] = useState([]);


    const searchBook = async (query) => {
        setSearchWord(query)
        await BooksAPI.search(searchWord).then((res) => setResultBooks([...res, ...books])).catch((e) => setResultBooks(books))
    }


    const updateShelf = async (book, shelfName) => {
        await BooksAPI.update(book, shelfName);
        console.log("Book", book, "Shelf", shelfName)
    }

    const [books, setBooks] = useState([])

    useEffect(() => {
        if (searchWord) {
            getAllBooks()

        } else {
            setBooks([])
            setResultBooks([])

        }

    }, [searchWord])

    const getAllBooks = async () => {
            await BooksAPI.getAll().then(res => setBooks(res.filter((book) => book.title === searchWord)))

        

    }
    console.log(books)


    console.log(resultBooks)
    return (
        <div className="search-books">
            <SearchInput searchWord={searchWord} onSearch={(e) => searchBook(e.target.value)} />
            {searchWord && <BookShelf shelf="Search Results" books={resultBooks} updateShelf={updateShelf} />
            }

        </div>
    )
}

export default SearchPage