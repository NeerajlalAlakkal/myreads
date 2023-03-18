import React from 'react'

export default function Book({book, updateBooks}) {
  return (    
    <li key={book.id}>
        <div className="book">
            <div className="book-top">
                <div
                className="book-cover"
                style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                    'url("'+book.imageLinks?.smallThumbnail+'")',
                }}
                ></div>
                <div className="book-shelf-changer">
                <select onChange={(e) => updateBooks(book, e.target.value)} defaultValue={(book.shelf)?book.shelf: 'none'}>
                    <option value="moveto" disabled>
                    Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.author}</div>
        </div>
    </li>
  )
}
