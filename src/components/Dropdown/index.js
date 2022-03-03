import React from "react";

function Dropdown({onChange}) {
  return (
    <div className="book-shelf-changer">
      <select onChange={onChange}>
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

export {Dropdown} ;
