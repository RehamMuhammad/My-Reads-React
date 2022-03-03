import React, { useEffect, useState } from 'react'
import { SearchInput } from '../../components'
import * as BooksAPI from "../../BooksAPI"
import { BookShelf } from '../../components';

function SearchPage() {
    const[searchWord, setSearchWord] = useState("");
    const[resultBooks, setResultBooks] = useState([]);


    const searchBook = async (query) =>{
        setSearchWord(query)
        await BooksAPI.search(searchWord).then((res) => setResultBooks(res))
    } 

    
const updateShelf = async (book, shelfName) => {
    await BooksAPI.update(book, shelfName);
    console.log("Book",book,"Shelf",shelfName)
  }

    console.log(resultBooks)
    return (
        <div className="search-books">
         <SearchInput searchWord={searchWord} onSearch={(e) => searchBook(e.target.value) } />
         <BookShelf shelf="Search Results" books={resultBooks} updateShelf={updateShelf}/>


        </div>
    )
}

export default SearchPage