import './App.css';
import React, { useEffect, useState } from 'react';
import * as BooksAPI from './BooksAPI'

function App() {
  
const [books, setBooks] = useState([])

useEffect(()=>{
  BooksAPI.getAll().then(res => setBooks(res) )
},[])
  console.log(books)

  
  return (
    <div className="app">
 
      </div>
  );

  }
export default App;
