import React from "react";
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
function SearchInput({ searchWord, onSearch }) {
    return (
        <div className="search-books-bar">
            <Link to="/">
                <button className="close-search">Close</button>
            </Link>
            <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" value={searchWord} onChange={onSearch} />
            </div>
        </div>
    );
}

SearchInput.propTypes = {
    onSearch: propTypes.func,
    searchWord: propTypes.string,
}

export { SearchInput };
