import './App.css';
import React, { useEffect, useState } from 'react';
import * as BooksAPI from './BooksAPI'
import { BookShelf, Header } from './components';

function App() {

  const [books, setBooks] = useState([])

  useEffect(() => {
    BooksAPI.getAll().then(res => setBooks(res))
  }, [])
  console.log(books)

 


  return (
    <div className="app">
      <Header />

      <BookShelf shelf="Currently Reading" books={books.filter((book) => book.shelf === "currentlyReading")}/>
      <BookShelf shelf="Read" books={books.filter((book) => book.shelf === "read")} />
      <BookShelf shelf="Want to Read" books={books.filter((book) => book.shelf === "wantToRead")}/>


    </div>
  );

}
export default App;
