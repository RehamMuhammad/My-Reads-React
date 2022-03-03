import './App.css';
import React, { useEffect, useState } from 'react';
import * as BooksAPI from './BooksAPI'
import { BookShelf, Header, OpenSearch } from './components';
import AppRoutes from './AppRoutes';

function App() {

  const [books, setBooks] = useState([])
  const[shelfChanged, setShelfChanged] = useState(false);

  useEffect( () => {
    getAllBooks()
   
  }, [shelfChanged])
  console.log(books)

const getAllBooks = async () => {
  await BooksAPI.getAll().then(res => setBooks(res))
}

const updateShelf = async (book, shelfName) => {
  await BooksAPI.update(book, shelfName);
  console.log("Book",book,"Shelf",shelfName)
  setShelfChanged(!shelfChanged)

}
 


  return (
    <div className="app">
      <Header />
      <BookShelf shelf="Currently Reading" books={books.filter((book) => book.shelf === "currentlyReading")} updateShelf={updateShelf}/>
      <BookShelf shelf="Read" books={books.filter((book) => book.shelf === "read")} updateShelf={updateShelf}/>
      <BookShelf shelf="Want to Read" books={books.filter((book) => book.shelf === "wantToRead")} updateShelf={updateShelf}/>
<OpenSearch />

    </div>
  );

}
export default App;
