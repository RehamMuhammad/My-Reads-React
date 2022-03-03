import React from "react";
import { Link } from 'react-router-dom'


function SearchInput() {
  return (
    <div className="search-books-bar">
      <Link to="/">
        <button className="close-search">Close</button>
      </Link>
      <div className="search-books-input-wrapper">
        <input type="text" placeholder="Search by title or author" />
      </div>
    </div>
  );
}

export {SearchInput} ;
