import './App.css';
import React, { useEffect, useState } from 'react';
import * as BooksAPI from './BooksAPI'
import { Book, Header } from './components';

function App() {

  const [books, setBooks] = useState([])

  useEffect(() => {
    BooksAPI.getAll().then(res => setBooks(res))
  }, [])
  console.log(books)


  return (
    <div className="app">
      <Header />
      <Book title="tit" authors="au" />
    </div>
  );

}
export default App;
