import React from "react";
import propTypes from 'prop-types'

function Dropdown({ onChange, shelfValue }) {
    return (
        <div className="book-shelf-changer">
            <select onChange={onChange} value={shelfValue?shelfValue :"none"} >
                <option value="move" disabled>
                    Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    );
}

Dropdown.propTypes ={
    onChange:propTypes.func,
    shelfValue:propTypes.string,
}

export { Dropdown };
