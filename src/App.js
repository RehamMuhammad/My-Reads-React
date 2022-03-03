import './App.css';
import React, { useEffect, useState } from 'react';
import * as BooksAPI from './BooksAPI'
import { Book } from './components';

function App() {
  
const [books, setBooks] = useState([])

useEffect(()=>{
  BooksAPI.getAll().then(res => setBooks(res) )
},[])
  console.log(books)


  return (
    <div className="app">
 <Book title="tit" authors="au" />
      </div>
  );

  }
export default App;
